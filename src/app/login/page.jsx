import LoginForm from "@/component/login/login-form";
import { isLoginable, isRefreshable } from "@/function/token/get";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function LoginPage() {
    // redirect to root when already logged in
    if (isLoginable()) {
        return redirect("/");
    }

    // silent token refresh and redirect to root when refresh token still alive
    if (isRefreshable()) {
        // TODO: implement token silent refreshing

    }

    return <>
        <main className="container">
            <div style={ { width: "20rem", margin: "auto", marginTop: "10rem" } }>
                <h5 className="text-center">로그인</h5>
                <LoginForm />
                <p className="text-center">아직 회원이 아니신가요? <Link href="/signup">회원가입</Link></p>
            </div>
        </main>
    </>;
}
