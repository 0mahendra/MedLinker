import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";

const SignupPr = ()=>{
    const[name,setName] = useState();
     const[age,setAge] = useState();
      const[email,setEmail] = useState();
       const[password,setPassword] = useState();
        const[sex,setSex] = useState();
        const[phoneno,setPhoneno] = useState();
      const[pic,setPic] = useState();
      const postDetails=(pics)=>{

      }
    return (
    <>
          <VStack spacing={"1px"} color={"white"}>
          <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
            placeholder="Enter Your Name"
            onChange={(e)=>setName(e.target.value)}
        />

    </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>email</FormLabel>
        <Input
            placeholder="Enter Your Email"
            onChange={(e)=>setEmail(e.target.value)}
        />

    </FormControl> 
    <FormControl id='age' isRequired>
        <FormLabel>age</FormLabel>
        <Input
            placeholder="Enter Your age"
            onChange={(e)=>setAge(e.target.value)}
        />

    </FormControl>
     <FormControl id='sex' isRequired>
        <FormLabel>sex</FormLabel>
        <Input
            placeholder="Enter Your sex"
            onChange={(e)=>setSex(e.target.value)}
        />

    </FormControl>
 <FormControl id='phoneno' isRequired>
        <FormLabel>phoneno</FormLabel>
        <Input
            placeholder="Enter Your phoneno"
            onChange={(e)=>setPhoneno(e.target.value)}
        />

    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel>password</FormLabel>
        <Input
            placeholder="Enter Your password"
            onChange={(e)=>setPassword(e.target.value)}
        />

    </FormControl>
     <FormControl id='picture' isRequired>
        <FormLabel>upload your picture</FormLabel>
        <Input
            type="file"
            p={.5}
            accept="image/"

            onChange={(e)=>postDetails(e.target.files[0])}
        />

    </FormControl> 
    <Button
    bgColor={"rgb(28, 112, 112)"}
    borderRadius={"1px"}
    
    margin marginTop={"8px"
    
    
    } >Submit</Button>



    
          </VStack>
    </>
    )
}

export default SignupPr;