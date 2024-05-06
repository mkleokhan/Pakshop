import App from "../App.css";
import Home from "./Home";
import { BrowserRouter, Link} from 'react-router-dom'
import {useAuth} from "../store/auth"


function Mynav(){
  const {isLoggedIn} = useAuth()
   return(
    
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success ">
  <div className="container-fluid">
 <Link className="navbar-brand whiteFontsInNav" to="/admin/Home">Pakshop</Link>
    <ul className="navbar-nav shiftNavItemRight ">
      <li className='nav-item '>
        <Link className='nav-link whiteFontsInNav' to="/admin/Home">Home</Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link whiteFontsInNav' to="/admin/Categories">Categories</Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link whiteFontsInNav' to="/admin/Products">Products</Link>
      </li>
      <li className='nav-item'>
        <Link className = 'nav-link whiteFontsInNav' to="/admin/Order">Orders</Link>
      </li >

      <li className='nav-item'>
        <Link className = 'nav-link whiteFontsInNav' to="/admin/AboutUS">About Us</Link>
      </li >

      <li className='nav-item'>
        <Link className = 'nav-link whiteFontsInNav' to="/admin/ContactUs">Contact Us</Link>
      </li >
       
      {
        isLoggedIn ?(<li className='nav-item'>
      <Link className='nav-link whiteFontsInNav' to="/admin/LogOut">Logout</Link>
    </li>)
          :
      
   
      <>
      <li className='nav-item'>
        <Link className='nav-link whiteFontsInNav' to="/admin/Signup">SignUp</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link whiteFontsInNav' to="/admin/SignIn">SignIn</Link>
      </li>
      </>
      
  }   
    
    </ul>
  
  </div>
</nav>
    </div>
    
   )
}

export default Mynav;