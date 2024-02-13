import Link from "next/link";
import Image from "next/image";
import NavSearch from "@/component/nav/nav-search";
import SearchModal from "@/component/nav/search-modal";
import LoginButton from "./login-button";
import SportButton from "./sport-button";


export default function Nav() {
    
    
    return <>
        <nav className="navbar bg-primary">
            <div className="container">
                <Link href="/" className="navbar-brand d-flex align-items-center">
                    <div style={ { height: "2rem", width: "2rem", position: "relative" } }>
                        <Image src="/logo.svg" fill alt="logo"/>
                    </div>
                    <div style={ { marginLeft: "10px" } }>
                        Ezports
                    </div>
                </Link>
                <SportButton/>
                <LoginButton/>
                <NavSearch />
            </div>
        </nav>
        <SearchModal />
       
        
    </>;
}
