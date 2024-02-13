"use client";
import IconList from "@/component/iconList/icon-list"
import { useState } from "react"

/*"data": {
    "teams":[{ 
        "id": Int,
        "name": String,
        "logoUrl": String
    }],
    "leagues": [{
        "id":Int,
        "name": String,
        "logoUrl": String
    }]
}*/

export async function getSportData(id) {
    return {
        teams: [{id: 1, name: "T1", logoUrl:"#"}],
        leagues: [{id: 1, name: "L1", logoUrl: "#"}]
    }
}

export default function SportCollapse( { sports } ) {
    const [cachedSport, setCachedSport] = useState([]);

    const buttonOnClick = async (e) => {
        const sportId = e.target.dataset.spId;
        const sportData = await getSportData(sportId);

        const newCache = cachedSport;
        newCache[sportId] = sportData;
        setCachedSport(newCache);
        console.log(cachedSport);
        console.log(e.target.dataset.bsTarget);
    }

    const buttonList = sports.map((sport, i) => <p key={i} className="d-inline-flex gap-1">
        <button className="btn btn-primary" type="button" data-sp-id={sport.id}
            data-bs-toggle="collapse" data-bs-target={ `#collapse-${i}` } aria-expanded="false" aria-controls="collapse"
            onClick={buttonOnClick}    
        >
            {sport.name}
        </button>
    </p>);

    const collapseList = cachedSport.map((sport, i) => <div key={i} className="collapse" id={`collapse-${i}`}>
        <div className="card card-body">
           <IconList tag="소속 리그" info="league" TLList={ sport.leagues }/>
           <IconList tag="소속 팀" info="team" TLList={ sport.teams }/>
        </div>
    </div>);

/*
    for(let i = 0; i<sportList.length; i++) {
        let target = "collapseExample"+i;
        buttonList.push(
            <p key={ i } className="d-inline-flex gap-1">
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={ "#"+target } aria-expanded="false" aria-controls="collapseExample">
                    {data.name}
                </button>
            </p>
        )

        collapseList.push(
            <div key={ i } className="collapse" id={ target }>
                <div className="card card-body">
                    <IconList tag="소속 리그" info="league" TLList={ leagues }/>
                    <IconList tag="소속 팀" info="team" TLList={ teams }/>
                    
                </div>
            </div>
        )
    }
    */

    return <>
        {buttonList}
        {collapseList}
    </>
}