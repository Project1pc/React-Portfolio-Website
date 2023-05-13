import "./Menu.scss";

export default function Menu({menuOpen, setMenuOpen}){
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li onClick={() => setMenuOpen(false) /* Yeh kya krega ki jaise hi suppose mene Menu ke andar Home pr click kra woh Menubar ko auto matically close kr dega */} >
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testinomials">Testinomials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    )
}