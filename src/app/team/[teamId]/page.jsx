import { notFound } from "next/navigation";
import { getTeamPage } from "@/component/temp-database";
import CalendarCollapse from "@/component/TL/calendar/calendar-collapse";
import TLLogo from "@/component/TL/TLLogo";
import TLInfo from "@/component/TL/TLInfo";
import TLList from "@/component/TL/TLList";
/**
 * @param params { params: { teamId: string } }
 */
export default function TeamPage({ params }) {
    const teamId = Number(params.teamId);
    


    // show 404 page when wrong team id
    if (isNaN(teamId)) {
        return notFound();
    }

    /*
    	"data": {
		"id": Int,
        "teamName": String,
		"information": String,
		"logoUrl": String,
		"leagues": [{
				"id": Int,
				"name": string,
				"logoUrl": String
		}],
		"matches": [{
			"id": Int,
			"homeTeamName": String,
			"awayTeamName": String,
			"matchDate": DateTime,
			"homeTeamScore": Int,
            "awayTeamScore": Int,
			"homeTeamLogoUrl": String,
            "awayTeamLogoUrl": String,
			"matchStatus": String,
		}],					
	}
    */
    
    const data = {
		"id": 1,
		"teamName": "T1",
		"information": "This is T1",
		"logoUrl": "/img/LCK/T1.svg",
		"leagues": [
            { id:1, name:"LCK", logoUrl: "/img/LCK.svg" },
            { id:2, name:"WORLDS", logoUrl: "/img/WORLDS.svg" },
            
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
			"awayTeamName": "LNG",
			"matchDate": '2024-02-29',
			"homeTeamScore": 3,
            "awayTeamScore": 0,
            "homeTeamLogoUrl": "/img/LCK/T1.svg",
            "awayTeamLogoUrl": "/img/LPL/LNG.svg",
			"matchStatus": 0,
		    }
        ]				
	}

    const info = getTeamPage(teamId)

    return <>
        <main className="container">
            Team Page: {teamId}
        </main>
        <div className="container">
            <div>
                <div style={ { display:"inline-block" } }>
                    <TLLogo name={ data.teamName } logo={ data.logoUrl }/>
                </div>
                <div style={ { display:"inline-block" } }>
                    <TLInfo information={ data.information }/>
                </div>
            </div>
            <div>
                <TLList TL ={ data.leagues }/>
            </div>
            <div>
                <CalendarCollapse matches={ data.matches }/>
            </div>
        </div>
    </>;
}
