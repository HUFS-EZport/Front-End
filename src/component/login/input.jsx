"use client";

import { isValidEmailFormat } from "@/util/email";

export function LoginEmailInput({ isValidEmail, setIsValidEmail }) {
    const onEmailChange = (e) => {
        const { value } = e.target;

        if (value === "") {
            setIsValidEmail(true);
            return;
        }

        setIsValidEmail(isValidEmailFormat(value));
    };

    return <div className="mb-3 form-floating">
        <input id="login-email-input" name="email" className="form-control" required type="email" onChange={ onEmailChange }/>
        <label htmlFor="login-email-input">Email address</label>
        {
            /* When email is invalid format */
            isValidEmail === false ?
                <div className="invalid-feedback" style={ { display: "inline" } }>이메일 형식이 잘못됐습니다.</div> :
                <div className="invalid-feedback"></div>
        }
    </div>
}

export function LoginPasswordInput({ isValidUser }) {
    return <div className="mb-3 form-floating">
        <input id="login-password-input" name="password" className="form-control" type="password"/>
        <label htmlFor="login-password-input">Password</label>
        {
            isValidUser === false ?
                <div className="invalid-feedback" style={ { display: "inline" } }>이메일 혹은 비밀번호가 잘못됐습니다.</div> :
                <div className="invalid-feedback"></div>
        }

    </div>
}

export function LoginButton() {
    return <div className="d-grid gap-2 mb-3 mx-auto">
        <button type="submit" className="btn btn-outline-primary">로그인</button>
    </div>
}
