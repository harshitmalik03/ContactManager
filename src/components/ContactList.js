import React from "react";
import ContactCard from "./ContactCard";
import {Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';


const ContactList = (props) => {
    console.log(props.Contacts.length);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.Contacts.map((contact) => {
        return (
            <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key = {contact.id} />
        )
    })

    


    if(props.Contacts.length === 0){
        return(
            <div className="ui celled list">
            <h2 className="contactlist-heading" >Contact List</h2>
            <h5 className="no-contacts">No Contacts Added</h5>
            
        </div>
        )
    }else{
    
    return (
        <div className="ui celled list">
            <h2 className="contactlist-heading" >Contact List</h2>

           
                {/* <button className="ui button blue"><Link to  = "/addcontacts" reaplace>Add</Link></button> */}
            {renderContactList}
            
        </div>
    );
    }
}

export default ContactList;