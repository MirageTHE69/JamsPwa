import React,{ useState, useEffect } from 'react';
import { Link } from "gatsby"
import Services from "../components/services"
import axios, { URL } from '../services/api';



const IndexPage = () => {

	
  return(
    <div class="w-60 h-80">
    <div class="flex justify-center pt-2">
      <span> select any service </span>
    </div>
  
    <div>
      <div class="grid grid-cols-3 w-full gap-3 py-5 px-2">

          <Services/>


      </div>
  
      <div class="px-24 ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 22 22" fill="purple">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
  
)
}


export default IndexPage;