import React, { useState } from "react";
import SideGallery from "./SideGallery";
// import SideGallery from "./SideGallery";

import { Box, Image, Text, useToast } from "@chakra-ui/react";
import Navbarp from "../Navbarp";
import MianReportp from "./MainReportPage";
import axios from "axios";
const Preports=()=>{

    const data = JSON.parse(localStorage.getItem("userInfo"));
      console.log(data);
      let patientId = data._id;



    const [check ,setCheck ] = useState(true);
    const[pic2,setPic2]= useState();
    const toast =useToast();
    

    const HandleGet = async (sender)=>{
    
        console.log(patientId);
        console.log("this is the sender " ,sender);
        console.log("this is pic",patientId)
        const {data} = await axios.post("/api/report/view",{patientId,sender},);
        console.log(data);
             if(data){

               if(sender =="registration"  && data.Rreport ){
                    setPic2(data.Rreport);
                }
                if(sender =="BloodReport" && data.Bpreport ){
                    setPic2(data.Bpreport);
                }
                if(sender =="UrineReport" && data.Ureport){
                    setPic2(data.Ureport);
                }
                if(sender =="Xreport" && data.Xreport){
                    setPic2(data.Xreport);
                }
                if(sender =="ECGReport" && data.ECGreport){
                    setPic2(data.ECGreport);
                }
                if(sender =="MRIReport" && data.MRIreport){
                    setPic2(data.MRIreport);
                }
        
        toast({
            title:" wait report are uploading ",
            status:"success",
            duration:500,
            isClosable:true,
            position:"bottom",

        });
       
    }else{
        toast({
            title:"Oops !  not uploaded by doctor",
            status:"warning",
            duration:3000,
            isClosable:true,
            position:"bottom",

        });
    }


        
    }

    return(
        <>
        <Box display={"flex"} flexDirection={"row"}>
        <Box height={"100vh"} width={"5%"} >
          <Navbarp/>
        
        </Box>

        <Box display={"flex"} flexDirection={"row"} width={"96%"} height={"100vh"}  >
            <Box width={"25%"} borderRadius={"10px"} borderWidth={"4px"} bgClip={"red"} height={"100vh"} maxHeight={"100vh"} overflowY={"scroll"} bgColor={"#3484d9"} >

            <Text fontFamily={"Work sans"} fontSize={"35px"} fontWeight={"900"} textAlign={"center"} textTransform={"capitalize"}> please select your report</Text>
            <Box  width={"100%"} height={"100px"} borderRadius={"10px"} borderWidth={"2px"}  _hover={{ background: "#38B2AC",color: "white", }} display={"flex"} flexDirection={"row"} alignContent={"space-evenly"} cursor={"pointer"} alignItems={"center"}>
                               <Box >
                              <Text width={"300px"} marginLeft={"2%"} textAlign={"center"} fontFamily={"Work sans"} fontSize={"30px"} textTransform={"capitalize"} onClick={()=>{HandleGet("registration")}} >Registration Form</Text> 
                             
                              </Box>
                        </Box>
                        <Box  width={"100%"} height={"100px"} borderRadius={"10px"} borderWidth={"2px"}  _hover={{ background: "#38B2AC",color: "white", }} display={"flex"} flexDirection={"row"} alignContent={"space-evenly"} cursor={"pointer"} alignItems={"center"}>
                               <Box >
                              <Text width={"300px"} marginLeft={"2%"} textAlign={"center"} fontFamily={"Work sans"} fontSize={"25px"} textTransform={"capitalize"}  onClick={()=>{HandleGet("BloodReport")}}>Blood Report</Text> 
                           
                              </Box>
                        </Box>
                        <Box  width={"100%"} height={"100px"} borderRadius={"10px"} borderWidth={"2px"}  _hover={{ background: "#38B2AC",color: "white", }} display={"flex"} flexDirection={"row"} alignContent={"space-evenly"} cursor={"pointer"} alignItems={"center"}>
                               <Box >
                              <Text width={"300px"} marginLeft={"2%"} textAlign={"center"} fontFamily={"Work sans"} fontSize={"25px"} textTransform={"capitalize"}  onClick={()=>{HandleGet("UrineReport")}}> Urine Report</Text> 
                              
                              </Box>
                        </Box>
                        <Box  width={"100%"} height={"100px"} borderRadius={"10px"} borderWidth={"2px"}  _hover={{ background: "#38B2AC",color: "white", }} display={"flex"} flexDirection={"row"} alignContent={"space-evenly"} cursor={"pointer"} alignItems={"center"}>
                               <Box >
                              <Text width={"300px"} marginLeft={"2%"} textAlign={"center"} fontFamily={"Work sans"} fontSize={"25px"} textTransform={"capitalize"}   onClick={()=>{HandleGet("Xreport")}} >X-ray Report</Text> 
                            
                              </Box>
                        </Box>
                        <Box  width={"100%"} height={"100px"} borderRadius={"10px"} borderWidth={"2px"}  _hover={{ background: "#38B2AC",color: "white", }} display={"flex"} flexDirection={"row"} alignContent={"space-evenly"} cursor={"pointer"} alignItems={"center"}>
                               <Box >
                              <Text width={"300px"} marginLeft={"2%"} textAlign={"center"} fontFamily={"Work sans"} fontSize={"25px"} textTransform={"capitalize"} onClick={()=>{HandleGet("ECGReport")}}>ECG Report</Text> 
                           
                              </Box>
                        </Box>
                        <Box  width={"100%"} height={"100px"} borderRadius={"10px"} borderWidth={"2px"}  _hover={{ background: "#38B2AC",color: "white", }} display={"flex"} flexDirection={"row"} alignContent={"space-evenly"} cursor={"pointer"} alignItems={"center"}>
                               <Box >
                              <Text width={"300px"} marginLeft={"2%"} textAlign={"center"} fontFamily={"Work sans"} fontSize={"25px"} textTransform={"capitalize"}  onClick={()=>{HandleGet("MRIReport")}} >MRI Report</Text> 
                             
                              </Box>
                        </Box>                                               
            </Box>
            
            <Box display={"flex"} justifyContent={"center"} width={"80%"} height={"100vh"} borderRadius={"10px"} borderWidth={"4px"}>
             {pic2 ? (<> <Image src={pic2}/> </> )
              
             : ( <Box>
             <Box width={"auto"} height={"90vh"}
      //  bgImage= "url('https://cdn4.vectorstock.com/i/1000x1000/87/68/graphic-cartoon-character-online-chat-vector-35338768.jpg')"
       > 
        <Image src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-business-analysis_516790-335.jpg" height={"90vh"}></Image>
               </Box>
             </Box>
             )
             }

            </Box>
        </Box>
        </Box>
             

        </>
    )

}
export default Preports; 