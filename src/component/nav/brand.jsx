import Image from "next/image";
import Link from "next/link";

export default function Brand() {
    return <Link href="/" className="navbar-brand d-flex align-items-center">
        <div style={ { height: "2rem", width: "2rem", position: "relative" } }>
            <Image src="/logo.svg" fill alt="logo"/>
        </div>
        <div style={ { marginLeft: "10px" } }>
            Ezports
        </div>
    </Link>
}
