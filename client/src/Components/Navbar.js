import React from 'react'
import logo from '../assets/budget.webp'
import {Link} from 'react-router-dom';
import '../Pages.css';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
           <a class="navbar-brand" href="#" style={{fontWeight:900, fontSize:60}}>
              <img src={logo} alt="Logo" width="160" height="100" class="d-inline-block align-text-top"  />
               BudgetBee
           </a>
           <div class="d-flex" id="navbar-link">
             <Link to="/login" class="btn btn-outline-dark">Login</Link>
             <Link to="/signup" class="btn btn-outline-dark">SignUp</Link>
           </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar