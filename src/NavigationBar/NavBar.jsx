import { NavLink } from "react-router-dom";
import "./nav.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements" style={{ flex: "flex" }}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none ",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none ",
                })}
                to="/competitions"
              >
                competitions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
