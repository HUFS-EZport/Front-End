import { notFound } from "next/navigation";
import Match from "@/component/mtch/match";
/**
 * @param params { params: { matchId: string } }
 */
export default function MatchPage({ params }) {
    const matchId = Number(params.matchId);

    // show 404 page when wrong league id
    if (isNaN(matchId)) {
        return notFound();
    }

    return <>
        <main className="container">
            Match Page: {matchId}
        </main>
        <Match data = { data }/>
    </>;
}
