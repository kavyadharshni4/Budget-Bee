import React from 'react'
import logo from '../assets/budget.webp'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel" style={{width:350}}>
            <div class="offcanvas-header">
               <a class="navbar-brand" href="#" style={{fontWeight:700, fontSize:38}}>
                    <img src={logo} alt="Logo" width="100" height="60" class="d-inline-block align-text-top"  />
                        BudgetBee
                </a>
            </div>

            <div class="d-flex" id="sidebar-link">
                <Link to="/dashboard" class="sidebar-links">
                 <i className="bi bi-speedometer2 me-2"></i>
                 Dashboard</Link>
                <Link to="/add" class="sidebar-links">
                <i className="bi bi-plus-circle me-2"></i>
                Add Expense</Link>
                <Link to="/history" class="sidebar-links">
                <i className="bi bi-clock-history me-2"></i>
                History</Link>
                <Link to="/profile" class="sidebar-links">
                <i className="bi bi-person me-2"></i>
                Profile</Link>
                <Link to="/" class="sidebar-links-logout">
                <i className="bi bi-box-arrow-right me-2 text-danger"></i>
                Log out</Link>
            </div>

        </div>
    </div>
  )
}

export default Sidebar