import { notFound } from "next/navigation";
import CalendarCollapse from "@/component/TL/calendar/calendar-collapse";
import TLLogo from "@/component/TL/TLLogo";
import TLInfo from "@/component/TL/TLInfo";
import TLList from "@/component/TL/TLList";
import { getTeam } from "@/function/api";
import { getAccessToken, isLoginable } from "@/function/token/get";

async function getTeamData(id, token = undefined) {
    return getTeam(id, token);
}

/**
 * @param params { params: { teamId: string } }
 */
export default async function TeamPage({ params }) {
    const teamId = Number(params.teamId);

    // show 404 page when wrong team id
    if (isNaN(teamId)) {
        return notFound();
    }

    let token;
    if (isLoginable()) {
        token = getAccessToken();
    }

    let team;

    try {
        const res = await getTeamData(teamId, token);

        // show 404 page when API error (this may contain following case: there is no team id)
        if (res.code !== "200") {
            return notFound();
        }

        team = res.data;
    } catch (e) {
        console.error(e);
        return notFound();
    }


    return <>
        <main className="container">
            <div>
                <div style={ { display:"inline-block" } }>
                    <TLLogo name={ team.name } logo={ team.logoUrl }/>
                </div>
                <div style={ { display:"inline-block" } }>
                    <TLInfo information={ team.information }/>
                </div>
            </div>
            <div>
                <TLList TL ={ team.leagues }/>
            </div>
            <div>
                <CalendarCollapse matches={ team.matches }/>
            </div>
        </main>
    </>;
}
