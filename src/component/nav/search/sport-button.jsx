"use client"

import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function SportButton() {
    const router = useRouter();
    return (
        <Button onClick={ (e) => { 
            e.preventDefault();
            router.push("/sport"); } }>
                sport
        </Button>)
}