import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import products from '../data/productsData';


function ItemPage() {
    const currentPath = useLocation().pathname;
    const id = currentPath.split("/").pop();
    const product = products[id];

    const navigate = useNavigate();
    if (id < 0 || id >= products.length) {
        navigate("/404/item");
    }

    const content = () => {
        const texts = product.texts.map((text, id) => <p key={id} style={styles.text}>{text}</p>);

        let details = [];
        for (const key in product.details) {
            details.push(
                <div key={key} style={{ display: "flex", width: "100%" }}>
                    <dt style={styles.dt}>{key}<span style={{ margin: "0 0 0 auto" }}>:</span></dt>
                    <dd style={styles.dd}>{product.details[key]}</dd>
                </div>
            );
        }

        return (
            <div id='content' style={styles.content}>
                <h2 className="pageTitle">{product.name}</h2>
                <div className="flex" style={styles.flex}>
                    <div className="imgWrapper" style={styles.imgWrapper}>
                        <img src={`${product.img}`} alt='product' />
                    </div>
                    <div className="textWrapper" style={styles.textWrapper}>
                        {texts}
                        <p id="price" style={styles.price}>
                            {product.price}
                        </p>
                        <dl id="details" style={styles.dl}>
                            {details}
                        </dl>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main>
            {content()}
            <div id="goto-products-btn" style={styles.gotoProductsBtn}>
                <Link to="/products">Back To Products</Link>
            </div>
        </main>
    )
}

const styles = {
    content: {
        marginBottom: "60px",
    },
    flex: {
        display: "flex",
        width: "100%"
    },
    imgWrapper: {
        maxWidth: "400px",
        aspectRatio: 1
    },
    textWrapper: {
        maxWidth: "400px",
        paddingLeft: "65px",
        textWrap: "anywhere"
    },
    text: {
        marginBottom: "25px"
    },
    price: {
        paddingLeft: "5px",
        fontSize: "0.9rem"
    },
    dl: {
        maxWidth: "400px",
        width: "100%"
    },
    dt: {
        display: "flex",
        width: "30%",
        paddingRight: "10px",
        fontSize: "0.9rem"
    },
    dd: {
        width: "70%",
        fontSize: "0.9rem"
    },
    gotoProductsBtn: {
        width: "fit-content",
        margin: "0 auto 60px auto",
    }
}

export default ItemPage
