import React, { useState } from "react";
import Navbarp from "./Navbarp";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import UserDetails from "./UserDetail";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const DctrProfilep = () => {
  const user1 = localStorage.getItem("userInfo");
  const user = JSON.parse(user1);
  const location = useLocation();
  const dctrData = location.state.dctrData;

  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    setDisplay(display === "none" ? "block" : "none");
  };

  return (
    <>
      <Box display="flex" height="100vh" bgColor="#2a3970">
        {/* Sidebar */}
        <Box width="250px" height="100vh" position="fixed" bgColor="#2a3970">
          <Navbarp />
        </Box>

        {/* Main Content */}
        <Box flex="1" ml="270px" p="20px" display="flex" justifyContent="center" alignItems="center">
          {/* Doctor Profile Card */}
          <Box
            bg="#ffffff"
            p="30px"
            borderRadius="20px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="600px"
          >
            <Image borderRadius="full" boxSize="150px" src={dctrData.pic} alt={`${dctrData.name} profile`} mb="20px" />
            <Text fontFamily="Work Sans" fontSize="35px" fontWeight="bold" color="#2a3970" textAlign="center">
              {dctrData.name}
            </Text>
            <Text fontFamily="Work Sans" fontSize="20px" color="#555" textAlign="center" mt="5px">
              {dctrData.mproficiency}
            </Text>
            <Text fontFamily="Work Sans" fontSize="18px" color="#555" textAlign="center" mt="10px">
              {dctrData.email}
            </Text>
            <Text fontFamily="Work Sans" fontSize="18px" color="#555" textAlign="center" mt="5px">
              Phone: {dctrData.phnumber}
            </Text>
            <Text fontFamily="Work Sans" fontSize="18px" color="#555" textAlign="center" mt="5px">
              Qualification: {dctrData.qualification}
            </Text>

            <Box bg="#f0f0f5" p="20px" mt="20px" borderRadius="10px" width="100%">
              <Text fontSize="18px" fontWeight="bold" color="#333">
                About Me
              </Text>
              <Text fontSize="16px" color="#666" mt="5px">
                Hello everyone, this is {dctrData.name}, a {dctrData.mproficiency}. My approach combines evidence-based
                medicine with personalized care to ensure the best possible outcomes for my patients.
              </Text>
            </Box>

            <Text fontFamily="Work Sans" fontSize="20px" color="#2a3970" fontWeight="bold" mt="20px">
              Want an online appointment?
            </Text>
            <Button
              mt="10px"
              bg="#3484d9"
              color="white"
              _hover={{ bg: "#2a3970" }}
              _active={{ bg: "#2a3970" }}
              onClick={handleClick}
              transition="background-color 0.3s ease"
              borderRadius="8px"
            >
              Click here
            </Button>
          </Box>

          {/* User Details (Appointment Form) */}
          <Box
            ml="30px"
            width="400px"
            display={display}
            bg="#ffffff"
            p="20px"
            borderRadius="20px"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            transition="opacity 0.3s ease"
          >
            <UserDetails user={user} dctrData={dctrData} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DctrProfilep;
