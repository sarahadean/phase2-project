function NavBar () {
    
    function navigate(e) {
        e.preventDefault()
        window.history.pushState(null, "", e.target.href)
    }

    return (
        <div >
            <nav id="nav-list">
                <ul>
                    <li className="nav">
                        <a href="/" onClick={navigate}>HOME</a>
                    </li>
                    <li className="nav">
                        <a href="/about" onClick={navigate}>ABOUT</a>
                    </li>
                    <li className="nav">
                        <a href="/favorites" onClick={navigate}>FAVORITES</a>
                    </li>
                    <li className="nav">
                        <a href="/form" onClick={navigate}>ADD</a>
                    </li>
                </ul>
            </nav>
        
        </div>
    )
}
export default NavBar