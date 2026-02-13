import { Link } from "react-router-dom";

export default  function NaveBar() {
    return (
        <nav className="navebar">
            <div className="logo">
                <Link className="navbar-brand" to="/">ShopeHub</Link>
            </div>
          <div className="navbar-links">
            <Link className="navbar-link" to="/">Home</Link>
             <Link className="navbar-link" to="/checkout">Cart</Link>

            <div className="navbar-auth">
                <div>
                <Link to="/auth" className="btn btn-secondary">Login</Link>
                <Link to="/auth" className="btn btn-primary">Sign Up</Link>

                </div>
            </div> 
            

          </div>
        </nav>
    )
}