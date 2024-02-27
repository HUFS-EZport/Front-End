import Search from "@/component/nav/search/search";
import SearchModal from "@/component/nav/search/search-modal";
import Brand from "@/component/nav/brand";
import ButtonContainer from "@/component/nav/button/button-container";
import buttons from "@/component/nav/button";
import User from "@/component/nav/user/user";

export default function Nav() {

    return <>
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <Brand />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse"
                    aria-controls="navbar-collapse" aria-expanded="false" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ButtonContainer buttons={ buttons }/>
                    <Search />
                    <User />
                </div>

            </div>
        </nav>
        <SearchModal />
    </>;
}
