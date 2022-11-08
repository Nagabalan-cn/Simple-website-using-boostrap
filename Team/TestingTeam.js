import React from 'react'
import janani from "C:/Users/RBT/Desktop/React/boostrap/src/Images/janani.jpg"
import velu from "C:/Users/RBT/Desktop/React/boostrap/src/Images/vettivelu.jpeg"
import madhan from "C:/Users/RBT/Desktop/React/boostrap/src/Images/madhan.jpeg"

function TestingTeam() {
  return (
    <div>
         <div class="row">
      <div class="card col-4"  >
        <img src={velu} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name:<b>Velmurugan</b></h5>
          <p class="card-text">Role:<b>Supervisor of Testing Team</b></p>
          <a href="https://instagram.com/velmurugan2972001?igshid=MDE2OWE1N2Q=" 
          class="btn btn-primary" rel="noreferrer" target={'_blank'}>For More Details</a>
        </div>
      </div>
      <span class="col-8">
        <h3 class="text-left">His name is <b>Mr.Velmurugan</b> from PothuRavutherPatti in karur.
      And he is 20 years old guy.
      He works in codenatives in the role of phyton developer.
      He finished  his  Bsc - Bachelor of computer science  degree
      in jairam's Arts and Science collage with 87% .
      He is a supervisor of testing Team. And he has completed more then four 
      courses like phyoton, javascript and so on. his ambition is to become a 
       <b> FullStack Developer.</b></h3>
  
       <h1 class="text-center text-primary">skills</h1>

       <h3 class="text-center text-info">
        HTML,Boostrap,JavaScript,JSON,Jquery and Css.
   
       </h3>
       <br></br>
       <h1><u>project Details</u></h1>

       <h3>He sucessfully  tested  more then 25 projecets.
        And he has two year experience in manual testing.
       </h3>

   
     </span>
      </div>
<hr></hr>
<br></br>

      
      <div class="row">

      <span class="col-8">
        <h3 class="text-left"> She's Name is <b> Miss.Janani</b> from vellore village in karur.
      And he is 22 years old guy.
      she works in codenatives in the role of  Senior Tester developer.
      She finished  his  BE - Bachelor of Engeneering  degree
      in NSN collage of Engeneering with 87% . And she has completed more then four 
      courses like c, javascript and so on. her ambition is to become a 
       <b>  Engeneer.</b></h3>
  
       <h1 class="text-center text-primary">skills</h1>

       <h3 class="text-center text-info">
        HTML,Boostrap,JavaScript,JSON,Jquery and Css.
        
       </h3>
       <br></br>
       
       <h3>She sucessfully testing more then 14 projecets.
        And She has one year experience in Automation Testing.
       </h3>

   
     </span>
      <div class="card col-4"  >
        <img src={janani} class="card-img-top" height="400px" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name:<b>Janani</b></h5>
          <p class="card-text">Role:<b>Senior Tester</b></p>
          <a href="https://instagram.com/jananivj123?igshid=MDE2OWE1N2Q=" 
          class="btn btn-primary" rel="noreferrer" target={'_blank'}>For More Details</a>
        </div>
      </div>
      </div>

<hr></hr>
<br></br>
      <div class="row">
      <div class="card col-4"  >
        <img src={madhan} class="card-img-top" height="430px" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Name:<b>MadhanPrakash</b></h5>
          <p class="card-text">Role:<b>Manager Of TestingTeam</b></p>
          <a href="https://instagram.com/madhan_aathira?igshid=YmMyMTA2M2Y=" 
          class="btn btn-primary" rel="noreferrer" target={'_blank'}>For More Details</a>
        </div>
      </div>


      <span class="col-8">
      <h3 class="text-left">His Name is<b> Mr.MadhanPrakash</b> from Tanthonimalai village in karur.
      And he is 25 years old guy.
      He works in codenatives in the role of Manager of TestingTeam.
      He finished  his  BCA - Bachelor of Computer Application degree
      in Jairams collage of Arts And science with 89% . And he has completed more then four 
      courses like c, javascript, Celenium and so on. her ambition is to become a 
       <b>  FullStack Developer.</b></h3>
  
       <h1 class="text-center text-primary">skills</h1>

       <h3 class="text-center text-info">
        HTML,Boostrap,C,C++,Java,Celenium and Css.
        
       </h3>
       <br></br>
       
       <h3>She sucessfully testing more then 34 projecets.
        And She has threee year experience in Automation Testing.
       </h3>

   
     </span>



      
      </div>

    </div>
  )
}

export default TestingTeam;