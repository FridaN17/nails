import React from "react";
import './App.css';
import Navbar from './Navbar/Navbar';
import Cover from './Cover/Cover';
import Footernew from "./FooterNew/Footernew";
import Sergallery from "./Sergallery/Sergallery";
import Collseason from "./Collseason/Collseason";
import Salonail  from "./Salonail/Salonail";
import Brandnail from "./Brandnail/Brandnail";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Cover/>  
        <Sergallery/>
        <Collseason/>
        <Salonail/>
        <Brandnail/>
        <Footernew/> 
        
        
    </div>
  );
}

export default App;
