import React from "react";


function Footer () {
    const date = new Date().getFullYear();
    return (
        <footer>
            <p>
                Made For The Graduates!! © {date}
            </p>
        </footer>
    )
}

export default Footer;