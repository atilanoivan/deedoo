import React, { useState } from "react";
import * as Icon from "react-feather";
import {useAccount, useDisconnect, useEnsName,ConnectButton} from "@web3modal/react";
import {Web3Modal} from '@web3modal/react'

const NavbarStyleTwo = (props) => {
  const {address, isConnected } = useAccount();
  const {data, isLoading } = useEnsName({address});
  const disconnect =useDisconnect()
  const [menu, setMenu] = React.useState(true);
  const [form, setForm] = useState(props.form);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  

    const selectForm = (form) => {
        console.log("Selected form1: " + form);
        setForm(form);   
        props.selectForm(form);                
    };

    const Logout =() =>{
      disconnect();
      selectForm("")
    }
  

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
 
  return (
    <header id="header" className="headroom navbar-style-two">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a onClick={toggleNavbar} className="navbar-brand">
              <img src="/images/dark_transparent_cropped.png" alt="logo" style={{height: '57px'}} />
            </a>
            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item text-silver">
                {isConnected && isLoading ? (
                  <> 
                    <h4> Loading.. </h4>           
                  </>
                ) :  isConnected? (
                  <> 
                      
                      <h6> Address: {address} </h6> 
                      logged in with WalletConnect <button className="deedoo-button-logout" onClick={Logout}
                      
                      >Log out</button>
                  </>
                ):""}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarStyleTwo;
