import React from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Users from './Component/Users'
import Login from './Component/Login'
import SignIn from './Component/SignIn'

const App = () => {
  return <div>
         <BrowserRouter>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to="/index" className='navbar-brand'>REDSY</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li><Link to="/index" className='nav-link'>Home</Link></li>
                        <li><Link to="/about" className='nav-link'>About</Link></li>
                        <li><Link to="/services" className='nav-link'>Services</Link></li>
                        <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                        <li><Link to="/Users" className='nav-link'>Users</Link></li>
                        <li><Link to="/Login" className='nav-link'>Login</Link></li>
                        <li><Link to="/SignIn" className='nav-link'>SignIn</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="index" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="Users" element={<Users/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="SignIn" element={<SignIn/>}/>
            </Routes>
            </BrowserRouter>
          </div>
}

export default App