"use client";

export default function Search() {
    return <form className="d-flex" role="search">
        <button
            className="btn btn-outline-dark"
            style={ { paddingRight: "9em" } } type="button"
            data-bs-toggle="modal" data-bs-target="#search-modal"
        >
            <i className="bi bi-search"
                style={ { paddingRight: "0.5em" } }
            ></i>
            검색
        </button>
    </form>;
}
