import React from "react"
import Om from "../images/om.png"
import { Link } from "gatsby"


const services = () => {
    return(
        <div class="w-14 h-16 flex pt-2 pl-1.5 flex-col active:border-2 active: border-purple-400">
        <Link to="/service-package" > 
         <div class=" w-10 h-10">
               <img src={Om}></img>
           </div> 
           </Link>
           <div class=" text-ss  ">
             <span> bharhmin bhojan</span>
           </div>
         </div>
    )
}

export default services