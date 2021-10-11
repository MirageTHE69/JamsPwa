import * as React from "react"
import { Link } from "gatsby"



const IndexPage = () => (
  
<div class="h-80 w-60 bg-gray-100">
  <div class="flex flex-col  justify-between h-full w-full ">
<div class="flex flex-col items-center space-y-2">
    <h2 class="mt-3">select</h2>

    <p class="text-center text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus.</p>
    </div>
<div class="space-y-2 h-full px-3">
  <div class="w-full h-8 bg-purple-600 mt-3 flex items-center justify-center">

    <div class="flex w-full justify-between items-center px-3">
        <span> Puja</span>
       <div class="">
        <input type="radio"/>
       </div>

    </div>

  </div>

</div>

<div class="w-full flex items-center justify-center pb-4">  
<div > 
    <Link to="/service-form">
 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 22 22" fill="purple">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
</Link>
</div>
</div>

</div>

</div>

)

export default IndexPage;