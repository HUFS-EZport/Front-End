"use client"

import { useEffect } from "react"

import "./page.module.css";
import IconList from "@/component/iconList/icon-list";


const teams =[
    { id:0, name:"T1", logoUrl: "/img/LCK/T1.svg" },
    { id:1, name:"GEN", logoUrl: "/img/LCk/GEN.svg" },
    { id:2, name:"MUN", logoUrl: "/img/manU.svg" }
]

const league = [
    { id:1, name:"LCK", logoUrl: "/img/LCK.svg" },
    { id:2, name:"LPL", logoUrl: "/img/LPL.webp" },
    { id:3, name:"WORDS", logoUrl: "/img/WORDS.svg" }
]



export default function IndexPage() {

    return <>
        <main className="container">
            
            <IconList tag="선호 팀" info="team" TLList={ teams }/>
            <IconList tag="선호 리그" info="league" TLList={ league }/>
            
        </main>
    </>;
}

