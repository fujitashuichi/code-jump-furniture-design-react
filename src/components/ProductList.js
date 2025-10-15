import React from 'react';
import products from "../data/productsData.js";
import { Link } from 'react-router-dom';

function ProductList({ pageNumber, productCount }) {
    pageNumber = pageNumber < 1 || isNaN(pageNumber) ? 1 : Number(pageNumber);
    const items = () => {
        const length = products.length;
        const firstId = productCount * (pageNumber - 1);
        const lastId = length > productCount * pageNumber ? productCount * pageNumber : length;
        if (firstId >= length) return <li>商品がありません<br/>No products</li>

        let items = [];
        for (let i = firstId; i < lastId; i++) {
            const product = products[i];
            const item =
                <li key={i} id={`item-${i}`} className='item' style={styles.item}>
                    <Link to={`/item/${i}`} className='link'>
                        <img src={`${!product.img ? "/img/no-image.svg" : product.img}`}
                            alt={`${product.name}の画像`}
                            style={styles.img}
                        />
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
