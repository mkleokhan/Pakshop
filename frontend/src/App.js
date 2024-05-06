
import Home from './admin/Home';
import Categories from './admin/Categories';
import Order from './admin/Order';
import Settings from './admin/Settings';
import { Route, Routes} from 'react-router-dom'
import Mynav from './admin/Mynav';
import Signup from './admin/Signup';
import SignIn from './admin/SignIn';
import LogOut from './admin/LogOut' 
import ContactUs from './admin/ContactUs' 
import AboutUs from './admin/AboutUs';
import  Products from './admin/Products'
import Image from './admin/Image'



function App() {

  return (

  
    <div className="App ">
      <Mynav/>
      <Routes>
        <Route exact path='/admin/Signup' element={<Signup/>}/>     
      <Route exact path='/admin/Home' element={<Home/>}/>
      <Route exact path='/admin/Home' element={<Home/>}/>
      <Route exact path='/admin/Settings' element={<Settings/>}/>
      <Route exact path='/admin/Order'element={<Order/>}/>
      <Route exact path='/admin/categories' element={<Categories/>}/>
      <Route exact path='/admin/SignIn' element={<SignIn/>}></Route>
      <Route exact path='/admin/LogOut' element={<LogOut/>}></Route>
      <Route exact path='/admin/ContactUs' element={<ContactUs/>}></Route>
      <Route exact path='/admin/AboutUs' element={<AboutUs/>}></Route>
      <Route exact path='/admin/products' element={<Products/>}></Route>
      <Route exact path='/admin/image' element={<Image/>}></Route>
      </Routes>

    
    </div>
 
    );

}

export default App;
