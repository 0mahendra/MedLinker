import React, { useState } from "react";
import {  FormControl, FormLabel, Input,VStack ,Button} from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useToast } from "@chakra-ui/react";

var data2;
const LoginPr = ()=>{

    const toast = useToast();
    const history = useHistory();

   const[email,setEmail]=useState();
   const[password,setPassword]=useState();
   const[loading ,setLoading]= useState(false);
   const[data1 ,setData1] = useState({});

   const submitHandler = async() =>{
    setLoading(true);
    if( !email|| !password ){
       toast({
           title:"Please fill all the fields!",
           status:"warning",
           duration:3000,
           isClosable:true,
           position:"bottom",

       });
       setLoading(false);
       return; 
    }
   
    try{
        const config = {
            headers: {
              "Content-Type": "application/json", 
             
            },
          };
     const {data} = await axios.post(
       "/api/patient/login",
       {email,password},
        config
       ); 
       toast({
           title:"Registration Successful",
           status:"success",
           duration:3000,
           isClosable:true,
           position:"bottom",

       });
       localStorage.setItem("userInfo",JSON.stringify(data));
        data2 = data;
        localStorage.setItem("token", data.token); 

       setLoading(false);
       history.push("/pHome");

    }
    catch(error){
       toast({
           title:"error occured",
           status:"error",
           duration:3000,
           isClosable:true,
           position:"bottom",

       });
       setLoading(false);
    }
   };
     return (
        <>
        <VStack spacing={"1px"} color={"white"}>
        <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
            placeholder="Enter Your email"
            onChange={(e)=>setEmail(e.target.value)}
        />

    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <Input
        type="password"
            placeholder="Enter Your password"
            onChange={(e)=>setPassword(e.target.value)}
        />

    </FormControl>


    <Button
     marginTop={"30px"}
 
     className="btn" 
    onClick={submitHandler}>Submit</Button>
    </VStack>
           
        </>
     )
}


export default LoginPr;