import React from "react";
import Info from "./Pages/Info";
import { Route } from "react-router-dom";
import PRegistration from "./Auth/PRegistration";
const App = ()=>{

  return (
    <>
       <div className="App">
        <Route path ="/" component ={Info} exact / >
        <Route path = "/Ptrgtn" component = {PRegistration}/>
        

        
        
    </div>
    </>
  )
};

export default App;