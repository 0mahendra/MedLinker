import React, { useState } from "react";
import {  FormControl, FormLabel, Input,VStack } from "@chakra-ui/react";
const LoginPr = ()=>{
   const[email,setEmail]=useState();
   const[password,setPassword]=useState();
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
            placeholder="Enter Your password"
            onChange={(e)=>setPassword(e.target.value)}
        />

    </FormControl>
    </VStack>
           
        </>
     )
}
export default LoginPr;