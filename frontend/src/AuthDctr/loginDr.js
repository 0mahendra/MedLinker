import React, { useState } from "react";
import {  FormControl, FormLabel, Input,VStack ,Button} from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useToast } from "@chakra-ui/react";
const LoginDr = ()=>{

    const toast = useToast();
    const history = useHistory();

   const[email,setEmail]=useState();
   const[password,setPassword]=useState();
   const[loading ,setLoading]= useState(false);

   const submitHandler = async() =>{
    setLoading(true);
    if( !email|| !password ){
       toast({
           title:"sarri field fill karo yrr!",
           status:"warning",
           duration:5000,
           isClosable:true,
           position:"bottom",

       });
       setLoading(false);
       return; 
    }
   
    try{
     const config = {
       header:{
           "Content-type":"application/json",
       },
     };
     const {data} = await axios.post(
       "/api/dctr/login",
       {email,password},
        config
       ); 
       toast({
           title:"Registration Successful",
           status:"warning",
           duration:5000,
           isClosable:true,
           position:"bottom",

       });
       localStorage.setItem("dctrInfo",JSON.stringify(data));

       setLoading(false);
       history.push("/maind");

    }
    catch(error){
       toast({
           title:"error occured",
           status:"error",
           duration:5000,
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
    className="btn"
    onClick={submitHandler}>Submit</Button>
    </VStack>
           
        </>
     )
}
export default LoginDr;