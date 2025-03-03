import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container">
        <Link className="navbar-brand fs-2" to="/">
          Home
        </Link>
        {/* <Link className="navbar-brand fs-2" to="/contact">Contact</Link> */}
        <Link className="navbar-brand fs-2" to="/services">
          Services
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
