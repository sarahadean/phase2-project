import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
        <div id='nav-bar'>
            <nav id="nav-list">
                <ul>
                    <NavLink to="/" activeclassname="active">HOME</NavLink>
                    <NavLink to="/packing-list" activeclassname="active">PACKING LIST</NavLink>
                    <NavLink to="/bucket-list" activeclassname="active">BUCKET LIST</NavLink>
                    <NavLink to="/visited" activeclassname="active">VISITED</NavLink>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar