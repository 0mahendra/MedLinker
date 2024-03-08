
import "./index.css"
import React from 'react';
import  App from "./App"
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom"; 
import { ChakraProvider } from '@chakra-ui/react';
// import ChatProvider from "./Context/ChatProvider";


ReactDom.render(
  <BrowserRouter>
  {/* <ChatProvider> */}
  <ChakraProvider> 
        <App/>
  </ChakraProvider>
  {/* </ChatProvider> */}
  </BrowserRouter>
  ,
  document.getElementById("root")

  
);