import React, { useState, useEffect } from "react";
import {ConnectButton, useAccount} from "@web3modal/react";


function Login (props){
    const [form, setForm] = useState(props.form);

    const selectForm = (form) => {
        console.log("Selected form1: " + form);
        setForm(form);   
        props.selectForm(form);                
    };
    
    return (
        <div className="container">
            <div className="section-title">
                <h2>LOG IN</h2>
                <div className="bar"></div>
                
                <img src="/images/dark_transparent_cropped.png" alt="logo" style={{height: '120px'}} />
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-xs-8">
                    <div className="single-blog-post">            
                        <div><ConnectButton config={props.config}/>              </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-xs-8">
                    <div className="single-blog-post">            
                        
                             
                    </div>
                </div>
            </div>                
        </div>
    );
}

export default Login;