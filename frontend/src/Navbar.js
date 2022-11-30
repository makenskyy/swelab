import "./styles.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
export default function Navbar() {
  const isLoggedIn = false;
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Densys.me
      </Link>
      <ul>
        <CustomLink to="/admin/appointments">Appointments</CustomLink>
        <CustomLink to="/make-appointment">Make appointment</CustomLink>
        <CustomLink to="/admin/doctors">Doctors</CustomLink>
        <CustomLink to="/admin/patients">Patients</CustomLink>

        {/* <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Signup</CustomLink> */}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
