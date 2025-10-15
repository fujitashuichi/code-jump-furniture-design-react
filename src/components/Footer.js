import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="footer">
            <ul id="sns">
                <li>
                    <Link to="https://instagram.com" target="_blank" rel="noreferrer noopener">INSTAGRAM</Link>
                </li>
                <li>
                    <Link to="https://x.com" target="_blank" rel="noreferrer noopener">X</Link>
                </li>
                <li>
                    <Link to="https://facebook.com" target="_blank" rel="noreferrer noopener">FACEBOOK</Link>
                </li>
            </ul>
            <p id="copy-right">© Furniture Design</p>
        </footer>
    )
}

export default Footer
