/**
 * @typedef { { name: string, id: number, type: "TEAM" | "LEAGUE" } } SearchResultData
 * @typedef { { results: SearchResultData[] } } SearchResultProps
 */

/**
 * @param props { SearchResultProps }
 */
export default function SearchResult(props) {
    // when there is no result
    if (typeof props == "undefined" || typeof props.results == "undefined" || props.results.length < 1) {
        return <div className="list-group">
            <a className="list-group-item disabled">검색 결과가 없습니다.</a>
        </div>
    }

    // when there is results
    return <div className="list-group">

        {/* render list of search result */}
        {props.results.map((result, i) => {
            return <a
                key={ i } className="list-group-item list-group-item-action"
                href={ result.type === "TEAM" ? `/team/${result.id}` : `/league/${result.id}` }
            >
                {result.type === "TEAM" ? `팀: ${result.name}` : `리그/대회: ${result.name}`}
            </a>
        })}
    </div>;
}
