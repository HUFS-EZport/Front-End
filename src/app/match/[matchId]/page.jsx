import { notFound } from "next/navigation";
import { getMatchPage } from "@/component/temp-database";
import Match from "@/component/mtch/match";
/**
 * @param params { params: { matchId: string } }
 */
export default function MatchPage({ params }) {
    const matchId = Number(params.matchId);
    const info = getMatchPage(matchId)

    const data = {
        "id": "1",
        "homeTeamName": "T1",
        "awayTeamName": "GEN",
        "matchDate": '2024-02-17',
        "homeTeamScore": 1,
        "awayTeamScore": 2,
        "homeTeamLogoUrl": "/img/LCK/T1.svg",
        "awayTeamLogoUrl": "/img/LCK/GEN.svg",
        "matchStatus": 0,
    }
    // show 404 page when wrong league id
    if (isNaN(matchId)) {
        return notFound();
    }

    return <>
        <main className="container">
            Match Page: {matchId}
        </main>
        <Match data = {data}/>
    </>;
}
