import React from "react";
import Info from "./Pages/Info";
import { Route } from "react-router-dom";
import PRegistration from "./Auth/PRegistration";
import Testing from "./Testing";
import DrRegisteration from "./AuthDctr/DrRegistration";
import Mianp from "./Pages/patPages.js/Mainp";
const App = ()=>{

  return (
    <>
       <div className="App">
        <Route path ="/" component ={Info} exact / >
        <Route path = "/Ptrgtn" component = {PRegistration}/>
        <Route path  = "/testing" component = {Testing}/>
        <Route path = "/Dtrgtn" component = {DrRegisteration} />
        <Route path = "/pHome" component = {Mianp}/>
        


        
        
    </div>
    </>
  )
};

export default App;
