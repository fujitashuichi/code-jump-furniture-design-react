import React from 'react'
import { useLocation } from 'react-router-dom'


function NotFoundPage() {
    const currentPath = useLocation().pathname;

    // 見つからなかったページに応じたメッセージを表示
    const message = () => {
        if (currentPath.includes("/item")) {
            return (
                <>
                    <p>商品が見つかりません。<br/>Product was not found</p>
                </>
            );
        } else if (currentPath.includes("/products")) {
            return (
                <>
                    <p>URLのページ番号を確認してください。<br/>Please check the Page Number in the URL.</p>
                </>
            );
        }
    }

    return (
        <div>
            <h1>404 Not Found</h1>
            <p>The page {currentPath.replace("/404", "")} was not found</p>
            {message()}
        </div>
    )
}

export default NotFoundPage
