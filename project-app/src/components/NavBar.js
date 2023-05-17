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
                        <a href="/packing-list" onClick={navigate}>PACKING LIST</a>
                    </li>
                    <li className="nav">
                        <a href="/bucket-list" onClick={navigate}>BUCKET LIST</a>
                    </li>
                    <li className="nav">
                        <a href="/visited" onClick={navigate}>VISITED</a>
                    </li>
                </ul>
            </nav>
        
        </div>
    )
}
export default NavBar