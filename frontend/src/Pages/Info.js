import React  from "react";
import "./Info.css";
import { Box, Button, Text } from "@chakra-ui/react"; 
import Video from "./Video";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Testing from "../Testing";
const Info = ()=>{
      const history = useHistory();
      const images = [
        "https://www.shutterstock.com/image-photo/medicine-doctor-hold-icon-health-260nw-2144616781.jpg",
        "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=sph",
        "https://media.istockphoto.com/id/1327568875/photo/healthcare-business-graph-data-and-growth-insurance-healthcare-doctor-analyzing-medical-of.jpg?s=612x612&w=0&k=20&c=R4idIeTPq0f1TPSJwAq4KUeLUQg6ul8eIBSjvs9MXQk=",
      ];

      const handlePatient = ()=>{
              history.push("/Ptrgtn");
      }

      const handelDoctor = ()=>{
              history.push("/Dtrgtn");
      }
      return (
        <>
    <div className="about-page">
      <div className="about-content">

      <Testing images={images} />
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