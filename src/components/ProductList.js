import React from 'react';
import products from "../data/productsData.js";
import { Link } from 'react-router-dom';

function ProductList({ pageNumber, productCount }) {
    const items = () => {
        const first = productCount * (pageNumber - 1);
        const length = products.length;
        const last = length > productCount * pageNumber ? productCount * pageNumber : length;

        let items = [];
        for (let i = first; i < last; i++) {
            const product = products[i];
            const item =
                <li key={i} id={`item-${i}`} className='item' style={styles.item}>
                    <Link to={`/item/${i}`}>
                        <img src={`${product.img}`} alt={`${product.name}の画像`} style={styles.img} />
                        <p className='itemName' style={styles.name}>{product.name}</p>
                        <p className='itemPrice' style={styles.price}>{product.price}</p>
                    </Link>
                </li>

            items.push(item);
        }
        return items;
    }


    return (
        <ul className="productList">
            {items()}
        </ul>
    )
}

const styles = {
    item: {
        cursor: "pointer"
    },
    img: {
        width: "100%",
        aspectRatio: 1,
        pointerEvents: "none"
    },
    name: {
        fontSize: "1rem",
        pointerEvents: "none"
    },
    price: {
        fontSize: "0.9rem",
        pointerEvents: "none"
    }
};

export default ProductList
