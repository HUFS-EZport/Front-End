"use client"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Calendar from './calendar';

export default function CalendarCollapse( { matches} ) {

    const [ open, setOpen ] = useState(true);
    
    return (
        <>
            <Button
                onClick={ () => setOpen(!open) }
                aria-controls="example-fade-text"
                aria-expanded={ open }
            >
        리그 일정
            </Button>
            <Fade in={ open }>
                <div id="example-fade-text">
                    <Calendar matches={ matches }/>
                </div>
            </Fade>

        </>
    );
}