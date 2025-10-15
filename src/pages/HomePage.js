import React from "react"
import ProductList from "../components/ProductList.js"
import { Link } from "react-router-dom"


function HomePage() {
    return (
        <main>
            <ProductList pageNumber={1} productCount={8} />
            <div id="goto-productsBtn" style={styles.goToProductsBtn}>
                <Link to="/products">View More</Link>
            </div>
        </main>
    )
}

const styles = {
    goToProductsBtn: {
        width: "fit-content",
        margin: "0 auto 60px auto",
    }
}

export default HomePage
