import logo from "../img/logo.svg"

function Header() {
    return (
        <header id="header">
            <h1 className="site-title">
                <a href="/index.html">
                    <img src = {logo} alt="Furniture Design" />
                </a>
            </h1>
            <nav id="nav">
                <ul id="nav-menu">
                    <li><a href="/pages/products.html">PRODUCTS</a></li>
                    <li><a href="/pages/about.html">ABOUT</a></li>
                    <li><a href="/pages/company.html">COMPANY</a></li>
                    <li><a href="mailto:company@example.co?subject=Contact">CONTACT</a></li>
                </ul>
            </nav>
            <div className="toggle-btn">
                <span></span>
                <span></span>
            </div>
            <div id="mask"></div>
        </header>
    )
}

export default Header
