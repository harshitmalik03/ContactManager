import React from "react";
import {useParams, useLocation } from 'react-router-dom';
import "./styles.css";


console.log("Im at contact's details");

const ContactDetails = (props) => {

    const location =  useLocation();
    console.log(location);
    const name = location.state.name;
    const email = location.state.email;
    const image = location.state.image;
    // console.log(location.state.email);

    const params = useParams();

    // console.log(props);

    return(

        <div className="contact-details-container">
      <div className="contact-details-card">
        <div className="contact-details-header">
          {image && (
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-image-link"
            >
              <img
                src={image}
                alt={name}
                className="contact-image"
              />
            </a>
          )}
          <h2 className="contact-name">{name}</h2>
          <p className="contact-email">{email}</p>
        </div>
        <div className="contact-details-info">
          <h4>Contact Information</h4>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          {/* Add more contact information here */}
        </div>
      </div>
    </div>
    // <div style={{paddingTop : 40}}>
    //     <div className="contact-full">
    //         <h2 className="contact-lines">This is {name}'s Contact Card</h2>
    //         <h2 className="contact-lines">The name of the person is {name}</h2>
    //         <h2 className="contact-lines">The email of the person is {email}</h2>
    //     </div>
    //     <h6 className="contact-id">Contact Details of {params.id}</h6>
        

    // </div>
    )
    
}


export default ContactDetails;

