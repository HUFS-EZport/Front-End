import { notFound } from "next/navigation";
import { getLeaguePage } from "@/component/temp-database";
import CalendarCollapse from "@/component/TL/calendar/calendar-collapse";
import TLLogo from "@/component/TL/TLLogo";
import TLInfo from "@/component/TL/TLInfo";
import TLList from "@/component/TL/TLList";

async function getLeagueMatches(leagueId) {

}




/**
 * @param params { params: { leagueId: string } }
 */
export default async function LeaguePage({ params }) {
    const leagueId = Number(params.leagueId);

    //const data = await getLeagueData(leagueId);

    // TODO: Implement converter (match data to calendar event)
    // TODO: Implement match filter
    
    
    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }
    
    
    const data = {
		"id": 1,
		"leagueName": "LCK",
		"information": "This is LCK",
		"logoUrl": "/img/LCK.svg",
		"teams": [
            { id:0, name:"T1", logoUrl: "/img/LCK/T1.svg" },
            { id:1, name:"GEN", logoUrl: "/img/LCK/GEN.svg" },
            { id:2, name:"KT", logoUrl: "/img/LCK/KT.svg" },
            { id:3, name:"HLE", logoUrl: "/img/LCK/HLE.svg" },
            { id:4, name:"DK", logoUrl: "/img/LCK/DK.svg" },
            { id:5, name:"DRX", logoUrl: "/img/LCK/DRX.svg" },
            { id:6, name:"FOX", logoUrl: "/img/LCK/FOX.webp" },
            { id:7, name:"BRO", logoUrl: "/img/LCK/BRO.svg" },
            { id:8, name:"NS", logoUrl: "/img/LCK/NS.svg" },
            { id:9, name:"KDF", logoUrl: "/img/LCK/KDF.svg" },
            { id:10, name:"team 11", logoUrl: "/img/Team.svg" },
            { id:11, name:"team 12", logoUrl: "/img/Team.svg" },
            { id:12, name:"team 13", logoUrl: "/img/Team.svg" },
            { id:13, name:"team 14", logoUrl: "/img/Team.svg" },
            { id:14, name:"team 15", logoUrl: "/img/Team.svg" },
            { id:15, name:"team 16", logoUrl: "/img/Team.svg" },
            { id:16, name:"team 17", logoUrl: "/img/Team.svg" },
            { id:17, name:"team 18", logoUrl: "/img/Team.svg" },
            { id:18, name:"team 19", logoUrl: "/img/Team.svg" },
            { id:19, name:"team 18", logoUrl: "/img/Team.svg" },
        ],
		"matches": [{
            "id": "1",
			"homeTeamName": "T1",
			"awayTeamName": "GEN",
			"matchDate": '2024-02-17',
			"homeTeamScore": 1,
            "awayTeamScore": 2,
            "homeTeamLogoUrl": "/img/LCK/T1.svg",
            "awayTeamLogoUrl": "/img/LCK/GEN.svg",
			"matchStatus": 0,
		    },
            {
            "id": "2",
			"homeTeamName": "T1",
			"awayTeamName": "GEN",
			"matchDate": '2024-02-18',
			"homeTeamScore": 1,
            "awayTeamScore": 2,
            "homeTeamLogoUrl": "/img/LCK/T1.svg",
            "awayTeamLogoUrl": "/img/LCK/GEN.svg",
			"matchStatus": 0,
		    }
        ]				
	}
    
    const info = getLeaguePage(leagueId)


    return <>
        <main className="container">
            League Page: {leagueId}
        </main>
        <div className="container">
            <div>
                <div style={ { display:"inline-block" } }>
                    <TLLogo name={ data.leagueName } logo={ data.logoUrl }/>
                </div>
                <div style={ { display:"inline-block" } }>
                    <TLInfo information={ data.information }/>
                </div>
            </div>
            <div>
                <TLList TL ={ data.teams }/>
            </div>
            <div>
                <CalendarCollapse matches={ data.matches }/>
            </div>
        </div>
    </>;
}
