"useClient"

import Link from "next/link";
import moment from 'moment';
import Image from "next/image";
import "./calendar.css"
import { Fade, Button } from "react-bootstrap";
import { useState } from "react";
import { right } from "@popperjs/core";

export default function CalendarList( {matches} ) {
    const [open, setOpen] = useState(true);
    const content = [];
    let preIndex = null;
    let currentDiv = []

    for(let i of matches) {
          
        let dateFomat = moment(i.start).format('YYYY. MM. DD')
        if(preIndex === null || preIndex.start !== i.start) {
            content.push(<div key={i.start} className="btn-group-vertical" role="group" aria-label="Vertical button group" style={{display:"block", margin:"20px"}}>{currentDiv}</div>);
            currentDiv =[];
            currentDiv.push(<button key={i.start} type="button" className="btn btn-primary" disabled style={{textAlign:"left", borderWidth:"1px",borderColor:"white"}}>{dateFomat}</button>)
        }

        let state;
        if(i.matchStatus===0) {
            state="경기 종료"
        }else if(i.matchStatus===1) {
            state="경기 중"
        }else{
            state="경기 예정"
        }
        
        let scorebord;
        if(i.matchStatus === 2) {
            scorebord="VS"
        }else{
            scorebord=`${i.homeTeamScore} : ${i.awayTeamScore}`
        }
    
        
        const LinkContent=(
            <div className="calendar-div">
                <div className="calendar-div" style={{width:"80px", position:"absolute", left:"10px"}}>
                    {state}
                </div>
                <div className="calendar-div" style={{width:"80px"}}>
                    <div className="calendar-div">
                        {i.homeTeamName}
                    </div>
                    <Image width={30} height={30} src={i.homeTeamLogoUrl} alt="test" style={{marginLeft:"7px", marginRight:"7px"}}/>
                </div>
                
                <div style={{position:"relative",zIndex:"2", backgroundColor:"red", width:"70px", height:"30px", display:"inline-flex", alignItems:"center", justifyContent: "center"}}>
                        <Fade in={open}>
                            <div style={{position:"absolute", backgroundColor:"white", width: "70px", height: "30px"}} id="example-fade-text" className="collapseCalendarList">
                                    스코어
                            </div>    
                        </Fade>
                    {scorebord}
                </div>
                <div className="calendar-div" style={{width:"80px"}}>
                    <Image width={30} height={30} src={i.awayTeamLogoUrl} alt="test" style={{marginLeft:"7px", marginRight:"7px"}}/>
                    <div className="calendar-div">
                        {i.awayTeamName}
                    </div>
                </div>
            </div>
        )
        const href = `/match/${i.id}`
        currentDiv.push(<Link href={href} style={{borderWidth:"1px",borderColor:"white"}}key={i.id} type="button" className="btn btn-primary">
                            {LinkContent}
                        </Link>)
        preIndex=i
    }
    content.push(<div key={"last"} className="btn-group-vertical" role="group" aria-label="Vertical button group" style={{display:"block", margin:"20px"}}>{currentDiv}</div>);
    return(
        <> 
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
            >
                전체결과
            </Button>
            {content}
        </>
    )
}