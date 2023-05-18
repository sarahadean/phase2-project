import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
        <div id='nav-bar'>
            <nav id="nav-list">
                <ul>
                    <NavLink to="/">{({ isActive, isPending }) => (
                        <span className={isActive ? "active nav-link" : "nav-link"}>HOME</span> )}
                    </NavLink>
                    <NavLink to="/packing-list">{({ isActive, isPending }) => (
                        <span className={isActive ? "active nav-link" : "nav-link"}>PACKING LIST</span> )}
                    </NavLink>
                    <NavLink to="/bucket-list">{({ isActive, isPending }) => (
                        <span className={isActive ? "active nav-link" : "nav-link"}>BUCKET LIST</span> )}
                    </NavLink>
                    <NavLink to="/visited">{({ isActive, isPending }) => (
                        <span className={isActive ? "active nav-link" : "nav-link"}>VISITED</span> )}
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar