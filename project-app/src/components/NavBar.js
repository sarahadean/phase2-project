import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
        <div >
            <nav id="nav-list">
                <ul>
                    <NavLink exact to="/" activeClassName="active">HOME</NavLink>
                    <NavLink to="/packing-list" activeClassName="active">PACKING LIST</NavLink>
                    <NavLink to="/bucket-list" activeClassName="active">BUCKET LIST</NavLink>
                    <NavLink to="/visited" activeClassName="active">VISITED</NavLink>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar