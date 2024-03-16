import React  from "react";
import Footer from "../patPages/Footer.js";
import "../patPages/Footer.css";
import Navbarp from "./Navbard.js";
import PatientReq from "./PatientReq.js";
import { Box } from "@chakra-ui/react";

const Maind = ()=>{
    return (
        <>
          <Navbarp/>
          <Box marginBottom={"10%"}></Box>
          
          <PatientReq/>

        </>
    )
}
export default Maind;