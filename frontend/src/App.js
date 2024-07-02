import React from "react";
import Info from "./pages/Info";
import "./App.css";
import { Route } from "react-router-dom";
import PRegistration from "./Auth/PRegistration";
import Testing from "../src/pages/patPages/Testing";
import DrRegisteration from "./AuthDctr/DrRegistration";
import Mianp from "./pages/patPages/Mainp";
// import Commu from "./Pages/patPages.js/Commu";
import FindDctr from "./pages/patPages/FindDctr";
import Maind from "./pages/dctrPages/Maind";
import DctrProfilep from "./pages/patPages/DctrProfilep";
import Commu from "./pages/chatting/Commu";
import ChatBox from "./pages/chatting/ChatBox";
import AboutUs from "./pages/patPages/AboutUs";
import ContactUs from "./pages/patPages/ContactUs";
import FAQSection from "./pages/patPages/FAQSection";
// import MianReportp from "./pages/patPages/Preport/MainReportPage";
import Preports from "./pages/patPages/Preport/Preport";
import Reportd from "./pages/dctrPages/Reportd";
import AddP from "./pages/dctrPages/AddPatient";
// import Commud from "./Pages/dctrPages/Commud";
import Features from "./pages/Features";
const App = ()=>{

  return (
    <>
       <div className="App">
        <Route path ="/" component ={Info} exact / >
        <Route path = "/AboutUs" component = {AboutUs}/>
        <Route path = "/Ptrgtn" component = {PRegistration}/>
        <Route path  = "/testing" component = {Testing}/>
        <Route path = "/Dtrgtn" component = {DrRegisteration} />
        <Route path = "/pHome" component = {Mianp}/>
        <Route path = "/Commu" component = {Commu}/>
        <Route path = "/pfindDctr" component = {FindDctr}/>
        <Route path = "/maind" component = {Maind}/>
        <Route path = "/DctrProfilep" component = {DctrProfilep}/>
        <Route path = "/Chatbox" component = {ChatBox} />
        <Route path = "/Contact" component = {ContactUs}/>
        <Route path = "/FAQSection" component ={FAQSection}/>
        <Route path = "/MainReportp" component = {Preports} />
        <Route path = "/Reportd" component = {Reportd}/>
        <Route path = "/AddPatient" component = {AddP}/>
        <Route path = "/Features" component = {Features}/>

        
    </div>
    </>
  )
};

export default App;