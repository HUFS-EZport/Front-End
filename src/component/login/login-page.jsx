'use client';

import Link from 'next/link';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Image from 'next/image';
import { login } from "@/function/api";

export default function Login(props) {

    const [ passwordModal, setPasswordModal ] = useState(false);
    const [ isEmailInvalid, setIsEmailInvalid ]= useState(false);
    const [ isLoginDataInvalid, setIsLoginDataInvalid ] = useState(false);

    const [ user, setUser ] = useState({ email:"", password:"" });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.type]: e.target.value
        })
    }

    function isInvalidEmailFormat(str){
        const emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        return emailRegex.test(str);
    }

    return (<div style={ { width:"400px", margin:"auto", marginTop:"200px" } }>

        <h5 style={ { textAlign:"center" } }>로그인</h5>
        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
            <Form.Control
                isInvalid={ isEmailInvalid }
                type="email" placeholder="name@example.com" onChange={ handleChange } onKeyDown={ (e) => {
                    if(e.key == "Enter" && isInvalidEmailFormat(e.target.value)===true) {
                        console.log("엔터 눌렀다")
                        setIsEmailInvalid(false)
                        setPasswordModal(true)
                        console.log("형식 맞으면 패스워드 뜬다")
                    }else if(e.key == "Enter" && isInvalidEmailFormat(e.target.value)!==true) {
                        console.log("엔터 눌렀다")
                        setIsEmailInvalid(true)
                        console.log("형식 안 맞음 Invalid다")
                    }
                } }/>
            <Form.Control.Feedback type="invalid">
            이메일 형식을 지키거라
            </Form.Control.Feedback>
        </FloatingLabel>


        <Collapse in={ passwordModal }>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password"
                    isInvalid={ isLoginDataInvalid }
                    onChange={ handleChange } onKeyDown={ async (e) => {
                        if(e.key == "Enter") {
                            console.log(user)
                            console.log("엔터 누르면 useState로 user정보 저장한다")

                            try {
                                const result = await login(user.email, user.password);

                                const { accessToken, refreshToken } = result.data;

                                if (result.code !== "200") {
                                    setIsLoginDataInvalid(true);
                                }
                            } catch (e) {
                                setIsLoginDataInvalid(true);
                            }
                        }
                    } }/>
                <Form.Control.Feedback type="invalid">
                    이메일이나 비밀번호가 틀렸습니다
                </Form.Control.Feedback>
            </FloatingLabel>
        </Collapse>
        <div style={ { width:"400px", margin:"auto",marginTop:"25px", textAlign:"center" } }>
            <Link href="/" ><p>회원가입</p></Link>
        </div>
        <div style={ { margin:"auto",marginTop:"25px", textAlign:"center" } }>
            <Link href={ "/" } style={ { width:"75px", height:"75px" } }><Image src="/img/icons8-apple.svg" width={ 50 } height={ 50 } style={ { fontSize:"40px", margin:"25px" } } alt=''></Image></Link>
            <Link href={ "/" }><Image src="/img/icons8-discord.svg" width={ 50 } height={ 50 } style={ { fontSize:"40px", margin:"25px" } } alt=''></Image></Link>
            <Link href={ "/" }><Image src="/img/icons8-facebook.svg" width={ 50 } height={ 50 } style={ { fontSize:"40px", margin:"25px" } } alt=''></Image></Link>
            <Link href={ "/" }><Image src="/img/icons8-google.svg" width={ 50 } height={ 50 } style={ { fontSize:"40px", margin:"25px" } } alt=''></Image></Link>
        </div>
    </div>
    )
}
