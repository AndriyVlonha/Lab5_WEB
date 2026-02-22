import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🚦</span>
          <span className="logo-text">Traffic Lights</span>
        </div>

        <nav className="nav-menu">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Головна
          </NavLink>
          <NavLink 
            to="/vertical" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Вертикальний світлофор
          </NavLink>
          <NavLink 
            to="/horizontal" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Горизонтальний світлофор
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;