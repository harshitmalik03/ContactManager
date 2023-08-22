import { logDOM } from "@testing-library/react";
import React from "react";
import dhoni_image from "../images/dhoni_image.jpg";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ContactDetails from "./ContactDetails";

const ContactCard = (props) => {
    console.log(props);
    const { id , name , email, image} = props.contact;
    const imageSrc = image ? URL.createObjectURL(image) : dhoni_image;
    console.log(imageSrc);

    return (
        <div className="item contact-card">
            <img className="ui avatar image" src={imageSrc} alt = "user" />
                <div className="content">
                    <div className="header">
                    <Link to  =  {'/contactdetails/' + id}  state= {{id: id, name: name, image: imageSrc,email: email}}> {name}</Link>
                    </div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color : "red" , marginTop : "7px", cursor: "pointer"}}
                onClick = { () => props.clickHandler(id) }
                ></i>
            
            </div>
    );
}




export default ContactCard;