import { NavLink } from'react-router-dom'

function NavBar () {
    
    // function navigate(e) {
    //     e.preventDefault()
    //     window.history.pushState(null, "", e.target.href)
    // }

    return (
        <div >
            <nav id="nav-list">
                <ul>
                    <NavLink exact to="/" activeClassName="active">HOME</NavLink>
                    <NavLink to="/packing-list" activeClassName="active">PACKING LIST</NavLink>
                    <NavLink to="/bucket-list" activeClassName="active">BUCKET LIST</NavLink>
                    <NavLink to="/visited" activeClassName="active">VISITED</NavLink>
                    {/* <li className="nav">
                        <a href="/packing-list" onClick={navigate}>PACKING LIST</a>
                    </li>
                    <li className="nav">
                        <a href="/bucket-list" onClick={navigate}>BUCKET LIST</a>
                    </li>
                    <li className="nav">
                        <a href="/visited" onClick={navigate}>VISITED</a>
                    </li> */}
                </ul>
            </nav>
        
        </div>
    )
}
export default NavBar