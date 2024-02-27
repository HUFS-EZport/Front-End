import Link from "next/link";
import { isLoginable } from "@/function/token/get";

export default function UserDropdown() {
    if (isLoginable()) {
        return <ul className="dropdown-menu">
            <li>
                <Link className="dropdown-item" href="/my">마이페이지</Link>
            </li>
            <li>
                <Link className="dropdown-item" href="/logout">로그아웃</Link>
            </li>
        </ul>
    } else {
        return <ul className="dropdown-menu">
            <li>
                <Link className="dropdown-item" href="/login">로그인</Link>
            </li>
            <li>
                <Link className="dropdown-item" href="/signup">회원가입</Link>
            </li>
        </ul>
    }
}
