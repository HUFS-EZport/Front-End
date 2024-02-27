/**
 *
 * @param buttons {buttons: JSX.Element[]}
 * @return {JSX.Element}
 */
export default function ButtonContainer({ buttons }) {
    return <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {buttons.map((button) => button)}
    </ul>
}
