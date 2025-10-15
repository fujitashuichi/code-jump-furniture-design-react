import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';


function NotFoundPage() {
    const P = styled.p`
        ${{...styles.p}}
    `;

    const currentPath = useLocation().pathname;

    // 見つからなかったページに応じたメッセージを表示
    const message = () => {
        if (currentPath.includes("/item")) {
            return (
                <>
                    <P>商品が見つかりません。 Product was not found</P>
                </>
            );
        } else if (currentPath.includes("/products")) {
            return (
                <>
                    <P>URLのページ番号を確認してください。 Please check the Page Number in the URL.</P>
                </>
            );
        }
    }

    return (
        <div>
            <h1 style={styles.title}>404 Not Found</h1>
            <P>The page <span style={{ color: "red" }}>{currentPath.replace("/404", "")}</span> was not found</P>
            <Link to={currentPath.replace("/404", "")} style={styles.Link}>Reload</Link>
            {message()}
            <br/>
            <fieldset>
                <legend style={styles.legend}>以下の方法をお試しください。</legend>
                <br/>
                <P>Reloadボタンを押してみてください</P>
                <P>URLの" /404 "を消してみてください</P>
                <P>URLの末尾の" / "以降を消してみてください<br/>例: ~/404/products/0 → ~/products</P>
                <P>ホームに戻ってみてください</P>
                <P style={{ color: "red" }}>↓それでも解決しない場合↓</P>
                <Link to="mailto:company@example.co?subject=Contact" className="link" style={styles.Link}>CONTACT</Link>
            </fieldset>
            ※ReloadボタンはURLの" /404 "を消したページに移動します。
        </div>
    )
}

const styles = {
    title: {
        margin: "60px auto 30px auto",
        textAlign: "center",
        fontSize: "2rem"
    },
    Link: {
        display: "block",
        width: "fit-content",
        margin: "0 auto 15px auto",
        background: "#c2e7ff",
        border: "1px solid #999",
        borderRadius: "5px",
        padding: "10px 20px"
    },
    p: {
        margin: "0 auto 15px auto",
        textAlign: "center",
        fontSize: "1.2rem"
    },
    legend: {
        margin: "0 auto"
    }
}

export default NotFoundPage
