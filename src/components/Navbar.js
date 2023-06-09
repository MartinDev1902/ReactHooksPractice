import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
            <div className={'navbar-brand'}>
                Github search
            </div>
            <ul className={'navbar-nav'}>
                <li className={'nav-item'}><NavLink to="/" className={'nav-link'}>Main</NavLink></li>
                <li className={'nav-item'}><NavLink to="/about" className={'nav-link'}>Information</NavLink></li>
                <li className={'nav-item'}><NavLink to="/profile" className={'nav-link'}>Profile</NavLink></li>
            </ul>
        </nav>
    )

}

export default Navbar
