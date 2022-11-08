import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import {FaCopyright} from 'react-icons/fa'





export default function Footer() {
  return (
   <div>



   
        <div class="card bg-secondary text-center">
  <div class="card-header ">

  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p><FaCopyright/>&nbsp;2022doubleN.com</p>
      <footer> <BsFacebook/>&nbsp; DoubleN007
      <br></br><AiFillInstagram />&nbsp;DoubleN_007
      <br></br>
      <SiGmail/>&nbsp;doublen007@gmail.com
      <br></br>
      <br></br>

      <cite title="Source Title">Visit Us</cite></footer>
    </blockquote>
  </div>
</div>
  </div>
  )
}
