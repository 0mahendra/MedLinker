import { Button, FormControl, FormLabel, Input,VStack
 } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";

const SignupDr = ()=>{
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
   
     
 <FormControl id='phone-no' isRequired>
        <FormLabel>phoneno</FormLabel>
        <Input
            placeholder="Enter Your phone-no"
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
   
     <FormControl id='qualification' isRequired>
        <FormLabel>Qualification</FormLabel>
        <Input
            placeholder="Enter Your qualification"
            onChange={(e)=>setName(e.target.value)}
        />

    </FormControl>
     <FormControl id='field' isRequired>
        <FormLabel>medical proficiency</FormLabel>
        <Input
            placeholder="enter your field of expertise"
            onChange={(e)=>setName(e.target.value)}
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

export default SignupDr;