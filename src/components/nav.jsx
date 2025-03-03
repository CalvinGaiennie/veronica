import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/contact">Contact</Link> */}
      <Link to="/services">Services</Link>
    </nav>
  );
}

export default Nav;
