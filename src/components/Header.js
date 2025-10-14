import { useRef } from "react";

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
                <a href="/">
                    <img src="/img/logo.svg" alt="Furniture Design" />
                </a>
            </h1>
            <nav ref={navRef} id="nav">
                <ul id="navMenu">
                    <li><a href="/products">PRODUCTS</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/company">COMPANY</a></li>
                    <li><a href="mailto:company@example.co?subject=Contact">CONTACT</a></li>
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
