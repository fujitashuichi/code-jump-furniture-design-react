import React from "react"
import ProductList from "../components/ProductList.js"


function HomePage() {
    return (
        <main>
            <ProductList pageNumber={1} productCount={8} />
            <div id="goto-productsBtn" style={styles.btn}>
                <a href="/products">View More</a>
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
