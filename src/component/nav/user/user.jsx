import UserDropdown from "@/component/nav/user/user-dropdown";
import UserIcon from "@/component/nav/user/user-icon";

export default function User() {
    return <ul className="navbar-nav d-flex flex-row me-1">
        <li className="nav-item dropdown">
            <UserIcon />
            <UserDropdown />
        </li>
    </ul>
}
