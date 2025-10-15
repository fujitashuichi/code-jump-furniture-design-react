import React from 'react'
import styled from 'styled-components';

function CompanyPage() {
    const Dt = styled.dt`
        ${{...styles.dt}}
    `;
    const Dd = styled.dd`
        ${{...styles.dd}}
    `;

    return (
        <main>
            <h2 className="pageTitle">Company</h2>
            <div id="content" style={styles.content}>
                <dl style={styles.dl}>
                    <Dt>社名</Dt>
                    <Dd>株式会社ファニチャーデザイン</Dd>
                    <Dt>住所</Dt>
                    <Dd>〒107-0062 東京都港区南青山１丁目××××××</Dd>
                    <Dt>設立</Dt>
                    <Dd>XXXX年XX月</Dd>
                    <Dt>資本金</Dt>
                    <Dd>XXXX万円</Dd>
                    <Dt>従業員数</Dt>
                    <Dd>XX名</Dd>
                    <Dt style={{ border: "none" }}>事業内容</Dt>
                    <Dd style={{ border: "none" }}>家具、インテリアの企画・生産 家具、インテリアの販売<br/>店舗の企画・デザイン・設計</Dd>
                </dl>
                <div id="google-map" style={styles.googleMap}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.8056709519428!2d140.1255030807309!3d39.71608488783124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc29251408f53%3A0x3c5b7f8f2ab40f2d!2z56eL55Sw6aeF!5e0!3m2!1sja!2sjp!4v1760163351132!5m2!1sja!2sjp"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='googleMap'
                    />
                </div>
            </div>
        </main>
    )
}

const styles = {
    content: {
        maxWidth: "600px"
    },
    dl: {
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "45px"
    },
    dt: {
        width: "40%",
        padding: "20px 0 20px 5px",
        fontSize: "0.8rem",
        borderBottom: "1px solid #ccc"
    },
    dd: {
        width: "60%",
        padding: "20px 0",
        fontSize: "0.8rem",
        borderBottom: "1px solid #ccc"
    },
    googleMap: {
        width: "100%",
        aspectRatio: "2 / 1",
        marginBottom: "150px"
    }
}

export default CompanyPage
