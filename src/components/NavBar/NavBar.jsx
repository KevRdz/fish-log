// npm modules
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div>
      <nav>
        {user ?
          <ul className='Navbar'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/fish">View Fish</NavLink></li>
            <li><NavLink to="/add">Add Catch</NavLink></li>
            <li><NavLink to="/profiles">Profiles</NavLink></li>
            <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
            <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
          </ul>
        :
          <ul>
            <li><NavLink to="/auth/login">Log In</NavLink></li>
            <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
          </ul>
        }
      </nav>
    </div>
  )
}

export default NavBar
