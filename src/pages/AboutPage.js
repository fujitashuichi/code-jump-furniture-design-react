import React from 'react'

function AboutPage() {
    return (
        <main>
            <h2 className="pageTitle">About</h2>
            <div id="content" style={styles.content}>
                <p style={styles.text}>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキ テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキ テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキ テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキ テキストテキストテキスト
                </p>
                <p style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, provident omnis. Quaerat rerum cum minima consequatur distinctio, inventore voluptatum nostrum fugit voluptatem magni est aperiam quidem, ut tenetur corrupti error?
                </p>
            </div>
        </main>
    )
}

const styles = {
    content: {
        maxWidth: "600px"
    },
    text: {
        marginBottom: "35px"
    }
}

export default AboutPage
