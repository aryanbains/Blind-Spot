import './index.scss'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <>
        <div class="nav">
  <div class="nav-header">
    <div class="nav-title">
      Blind Spot
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
        <NavLink className="navlink" exact="true" activeclassName="active" to="/">Home</NavLink>   
        <NavLink className="navlink" exact="true" activeclassName="active" to="/about">About</NavLink>
        <NavLink className="navlink" exact="true" activeclassName="active" to="/product">Products</NavLink>      
        <NavLink className="navlink" exact="true" activeclassName="active" to="/contact">Contact</NavLink>
        <NavLink exact="true" activeclassName="active" to="/login"><FontAwesomeIcon className="navlink" icon={faUser} color='#f0ffff'></FontAwesomeIcon></NavLink>   
  </div>
        <div>
        </div>

</div>
        </>
    )
}

export default Navbar;