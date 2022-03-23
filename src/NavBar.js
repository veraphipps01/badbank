import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
        <Link className="navbar-brand" to="/">National Bank of Ukraine</Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-end">
            <li className="nav-item" title="Create an Account to Get Started">
              <Link className="nav-link" to="/create-account/">Create Account</Link>
            
			  
            </li>
           
            <li className="nav-item" title="Deposit Money into Your Account">
              <Link className="nav-link" to="/deposit/">Deposit</Link>
             
            </li>
            <li className="nav-item" title=" Withdraw Money From Your Account">
              <Link className="nav-link" to="/withdraw/">Withdraw</Link>
            
            </li>
           
            <li className="nav-item" title="Account Information">
              <Link className="nav-link" to="/all-data/">AllData</Link>
            
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }
  
      

  export default NavBar;