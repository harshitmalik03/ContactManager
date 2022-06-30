import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
// import { v4 as uuid } from 'react-uuid';
import { v4 as uuid } from 'uuid';
import Testing from './Testing';
import ContactDetails from './ContactDetails';
import "./styles.css";

 
console.log("Im herer");


// WE WONT BE USING CONTACTS ARRAY ALREADY MADE RATHER WE'll USE USESTATE
// const Contacts = [
//   {
//     id: "1",
//     "name" : "Harshit",
//     "email" : "malikharshit.333@gmail.com"
//   },
//   {
//     id: "2",
//     "name" : "Aryan",
//     "email" : "aryan@gmail.com"
//   }
// ];
function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
  const [Contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...Contacts, { id: uuid() , ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = Contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

//    useEffect(() => {
//   setContacts(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
// }, []);
    useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []); 
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts));
  }, [Contacts]);

  return (




      <div className='mainb'>

      <Router>
        <div>
        <Header/>
        <Routes>
          <Route exact path = '/main' element = {<App/>} />

          <Route path = '/contactdetails/:id' element = {<ContactDetails/>}/> 


          <Route path = '/testing' element = {<Testing/>} />
          <Route path = '/addcontacts' element = {<AddContact addContactHandler = {addContactHandler}/>} />
          <Route path = '/contactlist' element = {<ContactList Contacts = {Contacts} getContactId = {removeContactHandler}/>}  />
        </Routes>
        </div>
{/* 
        <div style={{paddingTop : 40}} className='list'>
          <ul className='ui.list'>
          
            <li ><Link to = '/addcontacts'><h1>Add Contact</h1></Link></li>
            <li ><Link to = '/contactlist'><h1>Contact List</h1></Link></li>
          </ul>
        </div> */}

        <div className='my-buttons'>
        <Link className='mybutton' to = '/addcontacts'><button type="button" className='btn btn-outline-primary'>Add Contact</button></Link>
        <Link to = '/contactlist'><button type="button" class="btn btn-outline-success" >Contact List</button></Link>
        </div> 

      </Router>
     
  </div>
      

  );
}

export default App;
