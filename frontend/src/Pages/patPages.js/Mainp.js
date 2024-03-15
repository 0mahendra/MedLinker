import React from "react";
import Navbarp from "./Navbarp";
import { Box} from "@chakra-ui/react";






const Mainp = () => {
       
  const user1 = localStorage.getItem("userInfo");
  const user = JSON.parse(user1);
    console.log(user);

 


  return (
    <>
      <Navbarp />
     
      
      <div>

        <video autoPlay
          muted
          loop
          style={{
            position: 'relative',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            backgroundSize:'cover',
           

          }}
        >
          <source
            src="https://res.cloudinary.com/dojpukez0/video/upload/v1710004594/nbilyuoajdus7qwx3qqh.mp4"
            type="video/mp4"
          />

        </video>




      
       


      </div>
    </>
      )

        }

        export default Mainp;
