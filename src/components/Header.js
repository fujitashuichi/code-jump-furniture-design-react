import { useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
    const toggleBtnRef = useRef(null);
    const navRef = useRef(null);
    const maskRef = useRef(null);


    const handleToggleBtn = () => {
        toggleBtnRef.current.classList.toggle("open");
        navRef.current.classList.toggle("open");
        maskRef.current.classList.toggle("open");
    }


    return (
        <header id="header">
            <h1 className="siteTitle">
                <Link to="/">
                    <img src="/img/logo.svg" alt="Furniture Design" />
                </Link>
            </h1>
            <nav ref={navRef} id="nav">
                <ul id="navMenu">
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/company">COMPANY</Link></li>
                    <li><Link to="mailto:company@example.co?subject=Contact">CONTACT</Link></li>
                </ul>
            </nav>
            <div ref={toggleBtnRef} className="toggleBtn" onClick={() => handleToggleBtn()}>
                <span></span>
                <span></span>
            </div>
            <div ref={maskRef} id="mask"></div>
        </header>
    )
}

export default Header
