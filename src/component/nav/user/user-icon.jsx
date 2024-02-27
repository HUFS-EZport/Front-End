import Link from "next/link";

export default function UserIcon() {
    return <Link className="nav-link" href="#" id="navbar-user-button" role="button"
        data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-person-circle h4 mx-1"></i>
    </Link>
}
