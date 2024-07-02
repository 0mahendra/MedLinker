


import React  from "react";
import "./Info.css";
import Infonavbar from "./patPages/Infonavbar";
import { Box, Button, Image, Text, useBreakpoint } from "@chakra-ui/react"; 
// import Video from "./Video";
// import Video from "./Video";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./patPages/Footer";
// import Testing from "../Testing";
// import { easeIn } from "framer-motion";

// import Footer from "p./patPages.js/Footer.js";
const Info = ()=>{
      const history = useHistory();
      const dctr = ()=>{
        history.push("/Dtrgtn");
      }

      const pst = ()=>{
        history.push("/Ptrgtn");
      }

      const Abt = ()=>{
        history.push("/AboutUs");
      }
      const contact = ()=>{
        history.push("/Contact");
      }
      const FAQSection = ()=>{
        history.push("/FAQSection")
      }
      const Features = ()=>{
         history.push("/Features");
      }
      

     
      return (
        <>  
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-4xl">Medlinker</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <a class="mr-5  hover:text-black-900 hover:text-xl  cursor-pointer " onClick={Features} >Features</a>
      <a class="mr-5 hover:text-black-900 hover:text-xl  cursor-pointer" onClick={Abt}>About Us</a>
      <a class="mr-5 hover:text-black-900 hover:text-xl cursor-pointer" onClick={contact}> ContactUs</a>
      <a class="mr-5 hover:text-black-900 hover:text-xl  cursor-pointer" > Emergency</a>
    </nav>
  </div>
</header>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-250 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Experienced gerneral 
      <br class="hidden lg:inline-block" /> practitioners who have
        <br class="hidden lg:inline-block" /> an eye for your care
      </h1>
      {/* <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
      <div class="flex justify-center mt-11">
      <h1 class = "title-font sm:text-3xl text-3xl mt-10 mb-4 mr-7 font-medium text-gray-900 "> visit as a </h1>
        <button class= " h-12 w-auto mt-4 inline-flex items-center justify-center text-gray-700 bg-gray-100  px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10" onClick={dctr}>As Doctor </button>
        <button class="h-12 w-auto mt-4  inline-flex items-center justify-center text-gray-700 bg-gray-100  px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10" onClick={pst}> As patient </button>
      </div>
    </div>
    <div >
      <img class="object-cover object-center rounded " alt="hero" src="https://res.cloudinary.com/mahisingh/image/upload/v1717317775/frontImg_ttlppk.png"/>
    </div>
  </div>
</section>



<section class="text-gray-600 body-font">
  <div class="container px-5 my-5 mx-auto bg-blue-500">
    <div class="flex flex-wrap -mx-4 -my-8">
      <div class="py-8 px-4 lg:w-1/3  ">
        <div class="h-full flex items-start">
          
        <div class="flex-grow pl-6 ">
            <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">AI assistant for rapid help</h1>
            <p class="leading-relaxed mb-5">MedLinker features an interactive AI bot capable of providing personalized assistance to users, enhancing the overall user experience and accessibility.</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">MedBot</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
         
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Get your all health report</h1>
            <p class="leading-relaxed mb-5">Doctors can effortlessly upload and share medical reports, enabling patients to access and review their health records conveniently within the platform.</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">Report Section</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
         
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Chat with Doctor</h1>
            <p class="leading-relaxed mb-5">Upon acceptance of appointment requests, MedLinker enables real-time communication between patients and doctors via a secure chat interface, fostering effective doctor-patient interaction</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">User Friendly UI</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">

      <img alt="feature" class="object-cover object-center h-full w-full" src="https://res.cloudinary.com/mahisingh/image/upload/v1717560841/vecteezy_cute-doctor-women-compassionate-and-skilled-models-for_22484658_ds12zj.png " />
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">User-Friendly Interface</h2>
          <p class="leading-relaxed text-base">With a user-centric design philosophy, MedLinker offers an intuitive and easily navigable interface, enhancing accessibility for all users.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Appointment Requests:</h2>
          <p class="leading-relaxed text-base"> Facilitating seamless communication, patients can send appointment requests to their chosen doctors, initiating the consultation process efficiently.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">AI-Powered Assistance</h2>
          <p class="leading-relaxed text-base">MedLinker features an interactive AI bot capable of providing personalized assistance to users, enhancing the overall user experience and accessibility.

</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Medlinker</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">All your Medical related problem solution in one App</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Instagram </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">linkedin</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">facebook</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
        <li>
            <a class="text-gray-600 hover:text-gray-800">Instagram </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">linkedin</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">facebook</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
        <li>
            <a class="text-gray-600 hover:text-gray-800">Instagram </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">linkedin</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">facebook</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
        <li>
            <a class="text-gray-600 hover:text-gray-800">Instagram </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">linkedin</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">facebook</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
 
</footer>
       
    
       </>
      )
    
         
      
}
export default Info;