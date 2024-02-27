"use client";

import { useState } from "react";
import SearchResult from "@/component/nav/search/search-result";
import { getRandomInt } from "@/util/random";
import { shuffleArray } from "@/util/array";

// generate example search result data
function generateExampleSearchResults() {
    const sampleTeams = [ ...Array (50) ].map((_, i) => {
        return {
            name: `team ${i}`,
            id: i,
            type: "TEAM"
        }
    });
    const sampleLeagues = [ ...Array (50) ].map((_, i) => {
        return {
            name: `league ${i}`,
            id: i,
            type: "LEAGUE"
        }
    });

    const mixed = sampleTeams.concat(sampleLeagues);
    const shuffled = shuffleArray(mixed);

    const start = getRandomInt(0, 100);
    const end = getRandomInt(start, 100);

    return shuffled.slice(start, end);
}

export default function SearchModal() {
    const [ searchResults, setSearchResults ] = useState([]);

    const onInputChange = (e) => {
        const searchString = e.target.value

        // TODO: Implement search event handler (interact with api and print it)

        // using generated example data for test
        setSearchResults(generateExampleSearchResults());
    };

    return <div className="modal fade" id="search-modal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-body rounded">

                    {/* search modal input division */}
                    <div className="form-floating">
                        <input
                            type="text" className="form-control" id="search-input" placeholder="search"
                            onChange={ onInputChange }
                        />
                        <label htmlFor="search-input">
                            <i className="bi bi-search" style={ { paddingRight: "0.3em" } }></i>
                            팀명이나 리그/대회명으로 검색
                        </label>
                    </div>

                    {/* search result print division */}
                    <div className="pt-3">
                        <SearchResult results={ searchResults } />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
