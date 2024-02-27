import SportCollapse from "@/component/sportCollapse/sport-collapse";
import { getSportList } from "@/function/api";
import { notFound } from "next/navigation";

export async function getSports() {
    return getSportList();
}

export default async function SportPage() {
    let sports;

    try {
        const res = await getSports();

        // when failed to fetch sports list
        if (res.code !== "200") {
            return notFound();
        }

        sports = res.data;
    } catch (e) {
        console.error(e);
        return notFound();
    }


    return (
        <main>
            <div>
                Sport Page
            </div>
            <SportCollapse sports={ sports }/>
        </main>
    );
}
