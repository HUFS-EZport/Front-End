import { notFound } from "next/navigation";
import CalendarCollapse from "@/component/TL/calendar/calendar-collapse";
import TLLogo from "@/component/TL/TLLogo";
import TLInfo from "@/component/TL/TLInfo";
import TLList from "@/component/TL/TLList";
import { getLeague } from "@/function/api";
import { getAccessToken, isLoginable } from "@/function/token/get";

async function getLeagueData(leagueId, token = undefined) {
    return getLeague(leagueId, token);
}

/**
 * @param params { params: { leagueId: string } }
 */
export default async function LeaguePage({ params }) {
    const leagueId = Number(params.leagueId);

    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }

    let token;
    if (isLoginable()) {
        token = getAccessToken();
    }

    let league;

    try {
        const res = await getLeagueData(leagueId, token);

        // show 404 page when API error (this may contain following case: there is no league id)
        if (res.code !== "200") {
            return notFound();
        }

        league = res.data;
    } catch (e) {
        console.error(e);
        return notFound();
    }

    return <>
        <main className="container">
            <div>
                <div style={ { display:"inline-block" } }>
                    <TLLogo name={ league.name } logo={ league.logoUrl }/>
                </div>
                <div style={ { display:"inline-block" } }>
                    <TLInfo information={ league.information }/>
                </div>
            </div>
            <div>
                <TLList TL ={ league.teams }/>
            </div>
            <div>
                <CalendarCollapse matches={ league.matches }/>
            </div>
        </main>
    </>;
}
