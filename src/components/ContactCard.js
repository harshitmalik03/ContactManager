import { logDOM } from "@testing-library/react";
import React from "react";
import dhoni_image from "../images/dhoni_image.jpg";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ContactDetails from "./ContactDetails";

const ContactCard = (props) => {
    const { id , name , email} = props.contact;

    return (
        <div className="item contact-card">
            <img className="ui avatar image" src = {dhoni_image} alt = "user" />
                <div className="content">
                    
                    <div className="header">
                    <Link to  =  {'/contactdetails/' + id}  state= {{id: id, name: name, email: email}}> {name}</Link>
                   
                    
                    </div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color : "red" , marginTop : "7px"}}
                onClick = { () => props.clickHandler(id) }
                ></i>
            
            </div>
    );
}




export default ContactCard;