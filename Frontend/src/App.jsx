import React from 'react'
import Home from './home/Home';
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import {Toaster} from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(useAuth())
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Toaster/>
    </div>
    </>
    );
};
 export default App;