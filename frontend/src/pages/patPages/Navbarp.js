
import React, { useEffect, useState } from "react";

import { Avatar, Box, Button, Tooltip,Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";



import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const Navbarp = ()=>{

const history =useHistory();

let sender = "patient";
  

    
  const user1 = localStorage.getItem("userInfo");
  const user = JSON.parse(user1);
    // console.log(user);

  const logoutHandler = ()=>{
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token"); 
    history.push("/");
  }

  const Home = ()=>{
    history.push("/pHome");
  }

  const communication = ()=>{
    history.push("/Commu" , { sender});
  }
  const FindDctr = ()=>{
    history.push("/pFindDctr");
  }

  const Reportp = ()=>{
    history.push("/MainReportp");
  }
   
   

    return (
        <> 
             {/* middle segmenet  */}
             <Box width={"10vh"} marginBottom={"10px"}  height={"100%"} display={ "flex"} flexDirection={"column"} bgColor={"#3484d9"} marginTop={"2%"} marginLeft={"2%"}borderRadius={"30px"} justifyContent={"space-between"}>
                

                  <Box marginTop={"60%"}  display={"flex"} justifyContent={"space-evenly"} flexDirection={"column"} >
                  <Button  variant={"ghost"}   marginBottom={"10px"} onClick={Home}  >
                  <Tooltip label='Home' fontSize='md'>
                        <i class="fas fa-home "></i>
                   </Tooltip>
                   </Button>
                <Button  variant={"ghost"}  width={"auto"} marginBottom={"10px"}   onClick={communication} > <i class="fas fa-comment"></i></Button>
                <Button   variant={"ghost"}  width={"auto"}  marginBottom={"10px"}  onClick={Reportp} > 
                <i class="fas fa-notes-medical"></i>
                </Button>
                <Button  variant={"ghost"}  width={"auto"} marginBottom={"10px"}   onClick={FindDctr}> 
                <i class="fas fa-user-nurse"></i></Button>
                  </Box>
                  <Box marginBottom={"40%"} justifyContent={"center"} marginLeft={"17%"} >
                  <Button  variant={"ghost"}  width={"auto"}    onClick={logoutHandler}> 
                  <i class="fas fa-chevron-right"></i></Button>
                    
                  </Box>
                
               
             </Box>
              {/* end segmenet */}
              {/* <Box width={"20%"} height={"10vh"} display={"flex"} flexDirection={"row-reverse"} alignItems={"center"}>
              
                <ProfileModal  user={user}/> 
              </Box> */}

        </>
        
    )
};

export default Navbarp;
