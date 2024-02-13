"use client"


import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export default function LoginButton() {
    const router = useRouter();
    return(
        <>
            <Button variant="primary" onClick={ (info) => {
                router.push("/login");
            } }>
                Login
            </Button>
        </>
    );
}