import React  from "react";
import "./Info.css";
import { Box, Button, Text } from "@chakra-ui/react"; 
import Video from "./Video";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Info = ()=>{
      const history = useHistory();

      const handlePatient = ()=>{
              history.push("/Ptrgtn");
      }

      const handelDoctor = ()=>{

      }
      return (
        <>
    <div className="about-page">
      <div className="about-content">

        <Video/>
         <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} height={"90vh"}> 
         <h1 fontFamily={"fantasy"} fontSize={"100px"} textAlign={"center"}> Welcome MedLinker</h1>
          <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} >
          <Button  marginTop={"50px"}fontSize={"50px"} width={"50vh"} borderRadius={"20px"} bgColor={"violet"} onClick={handlePatient}  >As a patient</Button> 
           <Button marginTop={"50px"}fontSize={"50px"}width={"50vh"} borderRadius={"20px"} bgColor={"violet"}onClick={handelDoctor}>As a Doctor</Button> 

          </Box>
          
        


         </Box>
         
        <p>Welcome to our healthcare website! We are dedicated to providing quality medical services to our community.</p>
        <p>Our website is designed to help you find information about our hospital, medical services, and healthcare professionals.</p>
        <p>Feel free to explore and reach out to us if you have any questions or inquiries.</p>
      </div>
      <div className="animated-image">
        {/* Animated hospital or healthcare-themed image */}
      </div>
    </div>

        </>
      )
}
export default Info;