"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import formAction from "@/component/login/form-action";
import { LoginButton, LoginEmailInput, LoginPasswordInput } from "@/component/login/input";

export default function LoginForm() {
    const [ isValidEmail, setIsValidEmail ] = useState(true);
    const [ isValidUser, handledFormAction ] = useFormState(formAction, undefined);
    const router = useRouter();

    if (isValidUser) {
        router.push("/");
    }

    return <form action={ handledFormAction }>
        <LoginEmailInput isValidEmail={ isValidEmail } setIsValidEmail={ setIsValidEmail } />
        <LoginPasswordInput isValidUser={ isValidUser } />
        <LoginButton />
    </form>
}
