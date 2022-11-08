import React from 'react'
import nagabalan from "C:/Users/RBT/Desktop/React/boostrap/src/Images/nagabalan.jpeg"
import nandha from "C:/Users/RBT/Desktop/React/boostrap/src/Images/nandha.jpg"

function ReactTeam() {
  return (
    <div>
            <div class="row">

            <span class="col-8">
        <h4 class="text-left">His name is <b>Mr.NandhaKumar</b> from Gandhigramam village in karur.
      And he is 22 years old guy.
      He works in codenatives in the role of senoir React developer.
      He finished  his  Bsc - Bachelor of computer science  degree
      in Government Arts and Science collage karur with 97% .
     NandhaKumar plays a important role to create this website.
       
       His ambition is to become a 
       <b> Fullstack Developer.</b></h4>
  
       <h1 class="text-center text-primary">skills</h1>

       <h3 class="text-center text-info">
        HTML,Boostrap,JavaScript,JSON,Jquery,Nodejs,Css,
        Phyton,Pogramming in C & C++,React and Typescript.
       </h3>
       <br></br>
       <h1><u>project Details</u></h1>

       <h4>He sucessfully completed more then 14 projecets.
        and he create more then 10 website.
        And he has one year experience in phyton and Node js.
       </h4>

   
     </span>
    <div class="card col-4" >
        <img src={nandha} class="card-img-top"  alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name:<b>NandhaKumar</b></h5>
          <h6 class="card-text">Role:<u>Senior React Developer</u></h6>
          <a href="https://instagram.com/__nandha__007?igshid=MDE2OWE1N2Q=" 
          class="btn btn-primary" rel="noreferrer" target={'_blank'}>For More Details</a>
        </div>
    </div>
      </div>

<hr></hr>
<br></br>

      <div class="row">
      <div class="card col-4"  >
        <img src={nagabalan} class="card-img-top" 
         alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name:<b>Nagabalan</b></h5>
          <h6 class="card-text">Role:<b> Junior React Developer</b></h6>
          <a href="https://instagram.com/balanagabalan?igshid=YmMyMTA2M2Y=" 
          class="btn btn-primary" rel="noreferrer" target={'_blank'}>For More Details</a>
        </div>
      </div>
      <span class="col-8">
        <h4 class="text-left">His name is <b>Mr.Nagabalan</b> from karur.
      And he is 19 years old guy.
      He works in codenatives in the role of React developer.
      He finished  his  bca - Bachelor of computer application  degree
      in jairam's Arts and Science collage with 77% .<b>Nagabalan</b> plays a major role 
      to create tis website. 
     
     his ambition is to become a 
       <b>  FullStack Developer.</b></h4>
  
       <h1 class="text-center text-primary">skills</h1>

       <h3 class="text-center text-info">
        HTML,Boostrap,JavaScript,JSON,Jquery,Nodejs,Css,
        Phyton,Pogramming in C & C++,React and Typescript.
       </h3>
       <br></br>
       <h1><u>project Details</u></h1>

       <h4>He  created sucessfully  more then 8 websites.
        And he completed more then 12 Project.
        And he has one year experience in React and Node js.
       </h4>

   
     </span>
      </div>
      <hr></hr>
    </div>
  
  )
}

export default ReactTeam;