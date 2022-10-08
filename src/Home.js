import "./App.css";
import Navbar from "./components/global/Navbar";
import Buttons from "./components/deedoo/Buttons";
import Footer from "./components/global/Footer";
import Login from "./components/deedoo/Login";
import BackingForm from "./components/deedoo/BackingForm";
import LearningForm from "./components/deedoo/LearningForm";
import TeachingForm from "./components/deedoo/TeachingForm";
import React, { useState, useEffect } from "react";
import {ConnectButton, useAccount} from "@web3modal/react";
import {Web3Modal} from '@web3modal/react'

const config = {
  projectId: '8cfa08919878a7997aafa3d51bfea954',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3modal'
  }
}

function Home() {
  const {isConnected } = useAccount();
  const [form, setForm] = useState("");

  const selectForm = (form) => {
    console.log("Selected form2: " + form);
    setForm(form);                
  };


  return (
    <>
      <Navbar selectForm={(form) => selectForm(form)}/>
      {isConnected ? (
        <div className="container-home">
        {form=='teaching' ? 
          <TeachingForm selectForm={(form) => selectForm(form)}/>
        : form=='backing' ? 
          <BackingForm selectForm={(form) => selectForm(form)}/>
        : form=='learning' ? 
          <LearningForm selectForm={(form) => selectForm(form)}/>
        :
          <Buttons selectForm={(form) => selectForm(form)}/>
        }
        </div>
      ) :  (
        <div className="container-home">
        <Login />
        <Web3Modal config={config}/>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;
