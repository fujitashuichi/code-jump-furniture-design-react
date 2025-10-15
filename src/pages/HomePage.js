import React from "react"
import ProductList from "../components/ProductList.js"
import { Link } from "react-router-dom"


function HomePage() {
    return (
        <main>
            <ProductList pageNumber={1} productCount={8} />
            <div id="goto-productsBtn" style={styles.btn}>
                <Link to="/products">View More</Link>
            </div>
        </main>
    )
}

const styles = {
    btn: {
        textAlign: "center",
        marginBottom: "60px"
    }
}

export default HomePage
