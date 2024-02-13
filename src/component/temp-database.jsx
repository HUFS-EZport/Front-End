const leagueData = [
    { id:1, sportId:2, name:"LCK", icon: "/img/LCK.svg", info: "This is LCK" },
    { id:2, sportId:2, name:"LPL", icon: "/img/LPL.webp", info: "This is LPL" },
    { id:3, sportId:2, name:"WORDS", icon: "/img/WORDS.svg", info: "This is WORDS" }
    ];

const teamsData = [
        { id:0, name:"T1", leagueId:[1, 3], sportId:2, icon: "/img/LCK/T1.svg" },
        { id:1, name:"GEN", leagueId:[1, 3], sportId:2, icon: "/img/LCK/GEN.svg" },
        { id:2, name:"KT", leagueId:[1, 3], sportId:2, icon: "/img/LCK/KT.svg" },
        { id:3, name:"HLE", leagueId:[1], sportId:2, icon: "/img/LCK/HLE.svg" },
        { id:4, name:"DK", leagueId:[1, 3], sportId:2, icon: "/img/LCK/DK.svg" },
        { id:5, name:"DRX", leagueId:[1], sportId:2, icon: "/img/LCK/DRX.svg" },
        { id:6, name:"FOX", leagueId:[1], sportId:2, icon: "/img/LCK/FOX.webp" },
        { id:7, name:"BRO", leagueId:[1], sportId:2, icon: "/img/LCK/BRO.svg" },
        { id:8, name:"NS", leagueId:[1], sportId:2, icon: "/img/LCK/NS.svg" },
        { id:9, name:"KDF", leagueId:[1], sportId:2, icon: "/img/LCK/KDF.svg" },
        { id:10, name:"team 11", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:11, name:"team 12", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:12, name:"team 13", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:13, name:"team 14", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:14, name:"team 15", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:15, name:"team 16", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:16, name:"team 17", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:17, name:"team 18", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:18, name:"team 19", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:19, name:"team 18", leagueId:[1], sportId:2, icon: "/img/Team.svg" },
        { id:20, name:"LNG", leagueId:[2, 3], sportId:2, icon: "/img/LPL/LNG.svg" },
        { id:21, name:"JDG", leagueId:[2, 3], sportId:2, icon: "/img/LPL/JDG.webp" }
    ];

const matchsData = [ 
        { id: "1", start: '2024-01-17', teamId1: 5, teamId2: 8, leagueId:1, score:[0, 2], state:0 },
        { id: "2", start: '2024-01-17', teamId1: 1, teamId2: 0, leagueId:1, score:[2, 1], state:0 },
        { id: "3", start: '2024-01-18', teamId1: 6, teamId2: 7, leagueId:1, score:[0, 2], state:0 },
        { id: "4", start: '2024-01-18', teamId1: 2, teamId2: 6, leagueId:1, score:[2, 0], state:0 },
        { id: "5", start: '2024-01-19', teamId1: 3, teamId2: 5, leagueId:1, score:[2, 0], state:0 },
        { id: "6", start: '2024-01-19', teamId1: 0, teamId2: 9, leagueId:1, score:[2, 0], state:0 },
        { id: "7", start: '2024-01-20', teamId1: 7, teamId2: 6, leagueId:1, score:[0, 2], state:0 },
        { id: "8", start: '2024-01-20', teamId1: 8, teamId2: 1, leagueId:1, score:[0, 0], state:1 },
        { id: "9", start: '2024-01-21', teamId1: 9, teamId2: 3, leagueId:1, score:null, state:2 },
        { id: "10", start: '2024-01-21', teamId1: 4, teamId2: 2, leagueId:1, score:null, state:2 },
        { id: "11", start: '2024-01-22', teamId1: 0, teamId2:20, leagueId:3, score:null, state:2  },
        { id: "12", start: '2024-01-23', teamId1: 21, teamId2:0, leagueId:3, score:null, state:2  }

    ];

function getLeaguePage(id) {

    let info={league:null, teams:[], match:[]}
    for(let l of leagueData) {
        if(l.id === id) info.league=l;
    }
    for(let t of teamsData) {
        if(t.leagueId[0] === id || t.leagueId[1] === id) info.teams.push(t);
    }
    for(let m of matchsData) {
        if(m.leagueId === id) info.match.push(m);
    }
    return info;

}

function getTeamPage(id) {
    let info={teams:[], leagues:[], match:[]}
    for(let t of teamsData) {
        if(t.id === id) info.teams.push(t)
    }
    for(let l of leagueData) {
        if(l.id === info.teams[0].leagueId[0] || l.id === info.teams[0].leagueId[1])info.leagues.push(l)
    }
    for(let m of matchsData) {
        if(m.teamId1 === id || m.teamId2  === id) info.match.push(m)
    }
    for(let t2 of teamsData) {
        for(let m2 of info.match) {
            if((t2.id === m2.teamId1 || t2.id === m2.teamId2) && t2.id !== info.teams[0].id) info.teams.push(t2)
        }
        
    }
    return info;
}

function getMatchPage(id) {
    let info={match:null, league:null, team1:null, team2:null}
    for(let m of matchsData) {
        if(parseInt(m.id) === id) info.match = m;
    }
    for(let l of leagueData) {
        if(l.id === info.match.leagueId) info.league =l;
    }
    for(let t1 of teamsData) {
        if(t1.id === info.match.teamId1) info.team1=t1;
    }
    for(let t2 of teamsData) {
        if(t2.id === info.match.teamId2) info.team2=t2;
    }
    return info;
}

export {getLeaguePage, getMatchPage, getTeamPage}