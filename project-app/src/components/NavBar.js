function NavBar () {
    function navigate(e) {
        e.preventDefault()
        window.history.pushState(null, "", e.target.href)
    }

    return (
        <div>SITE NAVIGATION
            <nav>
                <ul id="nav-list">
                <li>
                    <a href="/" onClick={navigate}>HOME</a>
                </li>
                <li>
                    <a href="/about" onClick={navigate}>ABOUT</a>
                </li>
                <li>
                    <a href="/favorites" onClick={navigate}>FAVORITES</a>
                </li>
                </ul>
            </nav>
        
        </div>
    )
}
export default NavBar