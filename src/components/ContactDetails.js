import React from "react";
import {useParams, useLocation } from 'react-router-dom';
import "./styles.css";


console.log("Im at contact's details");

const ContactDetails = (props) => {

    const location =  useLocation();
    const name = location.state.name;
    const email = location.state.email;
    // console.log(location.state.email);

    const params = useParams();

    // console.log(props);

    return(
    <div style={{paddingTop : 40}}>
        <div className="contact-full">
            <h2 className="contact-lines">This is {name}'s Contact Card</h2>
            <h2 className="contact-lines">The name of the person is {name}</h2>
            <h2 className="contact-lines">The email of the person is {email}</h2>
        </div>
        <h6 className="contact-id">Contact Details of {params.id}</h6>
        

    </div>
    )
    
}


export default ContactDetails;

