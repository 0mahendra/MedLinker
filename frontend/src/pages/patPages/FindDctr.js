import React, { useEffect, useState } from "react";
import Navbarp from "./Navbarp";
import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FindDctr = () => {
  const toast = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
       
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      };
      const { data } = await axios.post(
        "/api/dctr/allDctr",
        {},
        config
      );
      localStorage.setItem("MediInfo", JSON.stringify(data));
      setDoctors(data);
    } catch (error) {
      toast({
        title: "Network Issue",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInfoPage = (doctor) => {
    history.push("/DctrProfilep", { dctrData: doctor });
  };

  return (
    <Box display="flex" height="100vh">
      <Box
        as="nav"
        
        height="100vh"
        position="fixed"
        bgColor="#2a3970"
        top="0"
        left="0"
        zIndex="10"
      >
        <Navbarp />
      </Box>
      <Box flex="1" ml="50px"  p="20px" bgColor="#2a3970">
        <Flex flexWrap="wrap" justifyContent="space-between" bgColor="#2a3970">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} onClick={() => handleInfoPage(doctor)} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const DoctorCard = ({ doctor, onClick }) => (
  <Box
    m="10px"
    w="300px"
    bgColor="#3484d9"
    borderRadius="20px"
    boxShadow="3px 3px 6px rgba(0, 0, 0, 0.16)"
    borderWidth="2px"
    transition="width 0.3s ease-in-out"
    _hover={{ width: "320px", boxShadow: "3px 3px 6px rgba(0, 255,252, 0.16)" }}
  >
    <Image
      borderRadius="full"
      h="200px"
      m="2%"
      ml="17%"
      w="70%"
      src={doctor.pic}
      alt={`${doctor.name} profile`}
    />
    <Text fontSize="31px" textAlign="center" fontFamily="work sans" color="white" textTransform="capitalize">
      {doctor.name} ({doctor.mproficiency})
    </Text>
    <Text fontSize="16px" textAlign="center">Email: {doctor.email}</Text>
    <Text fontSize="14px" textAlign="center">Studies: {doctor.qualification}</Text>
    <Text fontSize="14px" textAlign="center">Rating: {doctor.rating}</Text>
    <Button mt="8px" display="block" mx="auto" onClick={onClick}>
      View Profile
    </Button>
  </Box>
);

export default FindDctr;
