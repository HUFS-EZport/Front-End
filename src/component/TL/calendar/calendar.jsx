"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import bootstrapPlugin from "@fullcalendar/bootstrap5"
import interactionPlugin from "@fullcalendar/interaction";
import { getCalendarConfig } from "@/config/calendar";
import CalendarModal from "./calendar-modal"
import moment from 'moment';
import CalendarList from "./calendar-list"


function resolveCalendarDateRange() {
     
    const { validRange } = getCalendarConfig();
    const start = new Date((new Date().valueOf()) - validRange.start);
    const end = new Date((new Date().valueOf()) + validRange.end);
    return { start, end }
}

/**
 * @typedef {{ id: string, title: string, start: string }} CalendarEvent
 * @typedef {{ events: CalendarEvent[] }} CalendarProps
 */

/**
 * @param props {CalendarProps}
 */
export default function Calendar( {matches} ) {
    const router = useRouter();
    const calendarRef = useRef();
    const validRange = resolveCalendarDateRange();
    const [ modalShow, setModalShow ] = useState(false);
    const [ dateMatchSchedule, setDateMatchSchedule ] = useState([]);

    for(let i of matches) {
        let title = `${i.homeTeamName} vs ${i.awayTeamName}`
        i.title = title;
        i.start = i.matchDate;
    }
    
    function dateMatchScheduleSet(dateString) {
        setDateMatchSchedule([])
        let tempDateMatchSchedule = [];
        for(let i of matches) {
            if(i.start === dateString) {
                tempDateMatchSchedule.push(i)
            }
        }
        setDateMatchSchedule(tempDateMatchSchedule);
    }

    return <>
        <FullCalendar
            ref={ calendarRef }
            plugins={ [ dayGridPlugin, bootstrapPlugin, interactionPlugin ] }
            initialView="dayGridMonth"
            themeSystem="bootstrap5"
            headerToolbar={ { start: "prev", center: "title", end: "next" } }
            titleFormat={ (args) => {
                const date = args.date.marker;
                return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
            } }
            validRange={ validRange }
            events={ matches }
            eventOrder={"id"}
            eventClick={ (info) => {
                const { id } = info.event;
                router.push(`/match/${id}`);
            } }
            dateClick={ (info) => 
                { 
                    let date=moment(info.date).format('YYYY-MM-DD');
                    dateMatchScheduleSet(date);
                    setModalShow(true);
            } }
        />
        <CalendarModal
            show={ modalShow }
            test={ dateMatchSchedule }
            onHide={ () => setModalShow(false) }
        />
        <CalendarList matches={ matches }/>
    </>
}
