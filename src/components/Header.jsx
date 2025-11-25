import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div>Header</div>
    <nav>
        <NavLink to="about"
        className={({isActive}) => isActive ? "active-link" : null}
        >
        Home

        </NavLink>
    </nav>

    </>
    
  )
}

export default Header