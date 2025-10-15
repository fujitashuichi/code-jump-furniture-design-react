import React, { useEffect } from "react"
import ProductList from "../components/ProductList"
import { Link, useLocation, useNavigate } from "react-router-dom"
import products from "../data/productsData";


function ProductsPage() {
    const currentPath = useLocation().pathname;
    let id = currentPath === "/products" || currentPath === "/products/" ? "1" : currentPath.split("/products/").pop();

    // 末尾のページ番号を取得
    const lastPageNumber = Math.ceil(products.length / 12);

    // 不正なページ番号の場合は404へリダイレクト
    const navigate = useNavigate();
    useEffect(() => {
        const i = Number(id);
        if (isNaN(id)) {
            navigate(`/404/products/${id}`);
        } else if (i < 1 || i > lastPageNumber) {
            navigate(`/404/products/${id}`);
        }
    }, [id, lastPageNumber, navigate]);
    id = Number(id);

    // ページャーを生成
    const pager = () => {
        // ページャーに必要な数字を配列で返す
        const numbers = () => {
            let numList = [];
            switch (id) {
                case 1:
                    numList = [1, 2, 3];
                    break;
                case lastPageNumber:
                    numList = [lastPageNumber -2, lastPageNumber -1, lastPageNumber];
                    break;
                default:
                    numList = [id -1, id, id + 1];
            }
            return numList.filter(num => num <= lastPageNumber);
        }

        // ページャーの数字をリンクに変換
        const numberBtns = () => {
            const btn = (key, num, isCurrent) => {
                const style = isCurrent ? { color: "blue", textDecoration: "underline" } : {};
                return <li key={key}><Link to={`/products/${num}`} style={style}>{num}</Link></li>
            }
            return numbers().map((num, key) => key === id - 1 ? btn(key, num, true) : btn(key, num, false));
        }

        return (
            <ul className="navLinkList" style={styles.navLinkList}>
                <li><Link to='/products/1'>First</Link></li>
                {numberBtns()}
                <li><Link to={`/products/${lastPageNumber}`}>End</Link></li>
            </ul>
        );
    };


    return (
        <main>
            <h2 className="pageTitle">Products</h2>
            <ProductList pageNumber={id} productCount={12} />
            {pager()}
        </main>
    )
}

const styles = {
    navLinkList: {
        display: "flex",
        width: "fit-content",
        columnGap: "25px",
        margin: "0 auto",
    }
}

export default ProductsPage
