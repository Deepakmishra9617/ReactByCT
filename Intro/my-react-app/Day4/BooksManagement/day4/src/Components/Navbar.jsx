import {Link} from "react-router-dom";


function Navbar() {
  return (
  <nav  className="navbar navbar-expand-md bg-dark p-3 navbar-dark">
    <Link className="navbar-brand" to="#">
    My Book App
     </Link>
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
        <Link to="/" className="nav-link">
        Home</Link>
    </li>


     <li className="nav-item">
        <Link to="/about" className="nav-link">
        About</Link>
    </li>


      <li className="nav-item">
        <Link to="/Contact" className="nav-link">
        Contact</Link>
    </li>

    <li className="nav-item">
        <Link to="/signup" className="nav-link" style={{padding:"5px soliid blue", borderRadius:"5px solid blue"
      
        }}>
        Signup</Link>
    </li>

    <li className="nav-item">
        <Link to="/add-books" className="nav-link">
        Add-Books</Link>
    </li>
  </ul>




    {/* <Link to="/" className="text-white">Home</Link>
    <Link to="/about"className="text-white">About</Link>
    <Link to="/contact" className="text-white">Contact</Link>
    <Link to="/signup" className="text-white">Signup</Link>
    <Link to="/add-books" className="text-white">Add Books</Link> */}
      </nav>
  );
}

export default Navbar
