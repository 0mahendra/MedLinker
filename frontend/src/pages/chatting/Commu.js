import React, { useEffect, useState } from "react";
import Navbar from "./NavbarChat";
import SideDrawer from "./SideDrawer";
import ChatBox from "./ChatBox";
import ChatLoading from "./ChatLoading";
import { Box, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import SideDrawerp from "./SideDrawerp";
import Navbarp from "../patPages/Navbarp";
import Navbard from "../dctrPages/Navbard";

const Commu = ()=>{
  const [showFirst, setShowFirst] = useState(true);
  

  // const chaton1 = JSON.parse(localStorage.getItem("chaton"));

  
  // const chaton2 = JSON.parse(chaton1);
 
  //  localStorage.removeItem("chaton");

  const location = useLocation();
  const { sender } = location.state;


  console.log(sender);
    // if(chaton===false){
    //   setChaton(true);
    // }
//  console.log(chaton);

 const[chaton,setChaton] =useState(false);

 const handleDataFromChild = (data) => {
   // Do something with the data received from the child component
    setChaton(data);
 };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <>

      {/* <Navbar/> */}
      <Box display={"flex"} flexDirection={"row"}>
      { sender ==="patient" ? (
        <Box width={"5%"}>
         <Navbarp/>
         </Box>
      ) :(
         <Box width={"5%"}>
          <Navbard/>
          </Box>
      )
      }
      <Box display={"flex"} flexDirection={"row"} width={"90%"}>
      { sender ==="patient" ? (
        (showFirst ? <ChatLoading /> : <SideDrawerp   sender = {sender} />)
      ) :(
        (showFirst ? <ChatLoading /> : <SideDrawer sender = {sender}/>)
      )
      }
      
      <Box width={"auto"} height={"90vh"}
      //  bgImage= "url('https://cdn4.vectorstock.com/i/1000x1000/87/68/graphic-cartoon-character-online-chat-vector-35338768.jpg')"
       > 
        <Image src="https://static.vecteezy.com/system/resources/previews/005/642/884/original/illustration-graphic-cartoon-character-of-online-chat-vector.jpg" height={"90vh"}></Image>
        </Box>
      {/* {chaton  ?  <ChatLoading/>:<ChatBox /> } */}
      </Box>
      </Box>
    </>
  )
}
export default Commu;