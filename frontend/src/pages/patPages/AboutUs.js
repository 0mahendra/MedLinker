// import { Box } from "@chakra-ui/react";
import React from "react";
// import "./AboutUs.css"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// import { Flex } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";

const AboutUs=()=>{

  const history = useHistory();
  const dctr = ()=>{
    history.push("/Dtrgtn");
  }
  const home = ()=>{
    history.push("/");
  }

  const pst = ()=>{
    history.push("/Ptrgtn")
  }

  const Abt = ()=>{
    history.push("/AboutUs");
  }
  
    return(

        
       
   <>
            
        {/* <Infonavbar/> */}
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-4xl hover:cursor-pointer" onClick={home} >Medlinker</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" >Features</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer" onClick={Abt}>About Us</a>
      <a class="mr-5 hover:text-gray-900"> ContactUs</a>
      <a class="mr-5 hover:text-gray-900"> Emergency</a>
    </nav>
  </div>
</header>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64  overflow-hidden inline-flex items-center justify-center">
          <img alt="content" class="rounded-full h-100 w-56 justify-center item-center" src="https://res.cloudinary.com/dojpukez0/image/upload/v1710455242/mahendra_kohsti.jpg" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Mahendra Singh (Mern Stack Developer)</h2>
        <p class="leading-relaxed text-base">Hello guys,myself Mahendra Singh in btech 3rd year currently pursuing electrical engineering from MNNIT Allahabad.I have my interest toward backend development and i am  quite efficient in mongodb,express js and node js.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"><a href="https://www.linkedin.com/in/mahendra-singh-995063249/"> linkedin</a></button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden inline-flex items-center justify-center ">
          <img alt="content" class="rounded-full h-100 w-56 justify-center item-center " src="https://res.cloudinary.com/dojpukez0/image/upload/v1710492570/1710492345074_tn8ilb.jpg" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Anuj Kumar</h2>
        <p class="leading-relaxed text-base">Hello guys,Myself AnujKumar crrently in btech 3rd year pursuing elcetrical engineering from MNNIT Allahabad.I am a frontend developer who is passionate about website designing</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" ><a href="https://www.linkedin.com/in/mahendra-singh-995063249/"> linkedin</a></button>
      </div>
    </div>
  </div>
</section>

    </>

        
    )
}
export default AboutUs;