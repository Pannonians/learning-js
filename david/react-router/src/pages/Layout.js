import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/blogs">Blogs</Link></button>
            <button><Link to="/contact">Contact</Link></button>
      </nav>
      <hr></hr>
      <Outlet />
    </>
  )
};

export default Layout;