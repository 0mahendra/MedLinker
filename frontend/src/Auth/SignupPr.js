import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SignupPr = ()=>{
    const[name ,setName] = useState();

    return (
    <>
          <VStack spacing={"5px"} color={"white"}>
          <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
            placeholder="Enter Your Name"
            onChange={(e)=>setName(e.target.value)}
        />

    </FormControl> 

    <FormControl id='em' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
            placeholder="Enter Your Name"
            onChange={(e)=>setName(e.target.value)}
        />
        
    </FormControl> 
          </VStack>
    </>
    )
}

export default SignupPr;