

import React from "react";
import { Box, useBreakpoint } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useState } from "react";
import {  Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
// import HamburgerMenuButton from "./HamburgerMenuButton";
import { IconButton } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { Avatar } from "@chakra-ui/react";
// import AboutUs from "./AboutUs";
import {FaBars} from "react-icons/fa";
// import { useStatStyles } from "@chakra-ui/react";
import { useState } from "react";






// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Infonavbar = ()=>{
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
const handleClick=()=>{
  history.push("/Aboutus");
}
const handle=()=>{
  history.push("/Contact");
}
const handl=()=>{
  history.push("/Handl");
}
const Home=()=>
{
  history.push("/")
}
 const handlePatient = ()=>{
              history.push("/Ptrgtn");
      }

      const handelDoctor = ()=>{
              history.push("/Dtrgtn");
      }
const ismobile=useBreakpoint({base:true,md:false});
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const [selectedOption, setSelectedOption] = useState(null);
  
  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };
  // const onClick=()=>{
  //    {selectedOption ? selectedOption : 'Select an option'};
  // }



  

   

  
   
   

    return (
        <> 
        {ismobile==="base"?(
          <Box display={"flex"} height={"10vh"} width={"100%"} flexDirection={"row"} justifyContent={"space-between"}>
          <Box display={"flex"} flexDirection={"row"} height={"10vh"} width={"20%"}  position={"relative"}>
           <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/healthcare-3099180-2578767.png?f=webp&w=256"/>
           </Box>
           <Box display={"flex"} flexDirection={"row"} height={"10vh"} width={"40%"} justifyContent={"flex-end"}>
           <Menu>
      <MenuButton margin={"1%"} as={Button} rightIcon="" variant={"ghost"}>
       <IconButton  icon={<FaBars/>}></IconButton>
      </MenuButton>
      <MenuList variant ={"ghost"}>
        <MenuItem variant = {"ghost"}>
        <Button color={"black"}
                 variant={"ghost"}
                 onClick={Home}>Explore Us</Button>  
          
        </MenuItem>
        <MenuItem>
        <Button color={"black"}
                 variant={"ghost"}
                onClick={handleClick} > About Us  </Button>
       
        </MenuItem>
        {/* <MenuItem>
                <Button color={"black"}
                 variant={"ghost"}><Rover/></Button>
        </MenuItem> */}
        <MenuItem>
        <Button color={"black"}
                 variant={"ghost"} onClick={handle}>Contact us</Button>
               

          </MenuItem>

          <MenuItem>
          <Button color={"black"}
                 variant={"ghost"} onClick={handl}>FAQ's </Button>
          </MenuItem>
          

          
      </MenuList>
                 </Menu> 


                
    </Box>
    </Box>
           

        ):(
           <Box  display={"flex"} flexDirection={"row"} position={"relative"} justifyContent={"space-between"}>
             {/* starting segemenet  */}
             <Box width={"20%"} height={"10vh"}  display={"flex"} flexDir={"row"} >
              <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/healthcare-3099180-2578767.png?f=webp&w=256"/> 
            <Text fontStyle={"Bold"} fontSize={"26px"} marginTop={"8px"} marginLeft={"25px"}>MedLinker</Text>
             </Box>

             {/* middle segmenet  */}
             <Box width={"60%"} height={"12vh"} display={ "flex"} flexDirection={"row"}   justifyContent={"flex-end"} alignItems={"center"}>

          <Menu>
      <MenuButton as={Button} onClick={toggleMenu}  className = {"btn"} variant={"ghost"}  width={"auto"} margin={"5px"}  >
       <span color="white">Explore Us</span>
      </MenuButton>
      <MenuList >
        <MenuItem minWidth="100px" onClick={handlePatient}>As a Patient</MenuItem>
        <MenuItem  minWidth="100px" onClick={handelDoctor}>As a Doctor</MenuItem>
        
      </MenuList>
    </Menu>
                <Button className = {"btn"} variant={"ghost"}  width={"auto"} margin={"5px"} onClick={handleClick}> About Us</Button>
                <Button  className = {"btn"} variant={"ghost"}  width={"auto"} onClick={handle} margin={"5px"} > contact us</Button>
                <Button className = {"btn"} variant={"ghost"}  width={"auto"} onClick={handl} margin={"5px"} > FAQ's</Button>
             </Box>
              {/* end segmenet */}
              {/* <Box width={"20%"} height={"10vh"} display={"flex"} flexDirection={"row-reverse"} alignItems={"center"}>
              
                <ProfileModal  user={user}/> 
              </Box> */}

          
             
          </Box>

        )}

          
          


        
        </>
        
    )
};

export default Infonavbar;