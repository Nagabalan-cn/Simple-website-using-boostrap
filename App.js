import React from "react";
import Contact from "./Contact";
import Form from "./Home";
import Education from "./Education";
import Save from "./Save";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Footer from "./Footer";

import {AiTwotoneHome} from 'react-icons/ai'
import {BiPaperPlane}from 'react-icons/bi'
import {RiTeamFill}from 'react-icons/ri'
import {IoIosContacts}from 'react-icons/io'
import {AiFillGitlab} from 'react-icons/ai'
import "./App.css" ;


 
export default function  Hello(){

 

  return (
    <div container>
    <Router>
   
     

      <nav  class="navbar  bg-info justify-content-center sticky-top" id="navbars">
     
    
    
    
      <div class="container-fluid">
        

            <p class="nav-itam" id="home"><Link to="/" ></Link><AiTwotoneHome/>&nbsp;Home</p>
          <p class="nav-item" ><Link to="/education"><BiPaperPlane/>&nbsp;About us</Link></p>
          <h1 id="head"><AiFillGitlab id="icon"/>Codenatives-Karur<AiFillGitlab id="icon"/></h1>
          <p class="nav-itam" ><Link to="/family" ><RiTeamFill/>&nbsp;Teams</Link></p>
          <p class="nav-itam" ><Link to="/contact" ><IoIosContacts/>&nbsp;Contacts</Link></p>
          
</div>

          
          </nav> 
          <br></br>
          

           
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/family" element={<Save/>} />
        <Route path="/contact" element={<Contact/>} />

      
              
      </Routes>
     


  

    </Router>
    <br></br>
    <br></br>

   
<Footer />
  </div>  
  )
}

