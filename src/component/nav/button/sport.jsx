import Link from "next/link";

export default function SportButton() {
    return <li className="nav-item">
        <Link className="nav-link active" href="/sport">종목</Link>
    </li>
}
