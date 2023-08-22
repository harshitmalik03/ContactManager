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
import { Button } from '@mui/material';

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
      <div className='content-container'>
        <Header />

        <div className='button-container'>
          <Link className='nav-button' to='/addcontacts'>
            <button type="button" className='btn btn-primary'>Add Contact</button>
          </Link>
          <Link className='nav-button' to='/contactlist'>
            <button type="button" className='btn btn-success'>Contact List</button>
          </Link>
        </div>
        <div className='routes-container content-container'>
          <Routes>
            <Route path='/contactdetails/:id' element={<ContactDetails />} />
            <Route path='/addcontacts' element={<AddContact addContactHandler={addContactHandler} />} />
            <Route path='/contactlist' element={<ContactList Contacts={Contacts} getContactId={removeContactHandler} />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>
);
  // return (
  //     <div className='mainb'>
  //     <Router>
  //       <div>
  //       <Header/>
  //       <Routes>
  //         <Route exact path = '/main' element = {<App/>} />

  //         <Route path = '/contactdetails/:id' element = {<ContactDetails/>}/> 
  //         <Route path = '/testing' element = {<Testing/>} />
  //         <Route path = '/addcontacts' element = {<AddContact addContactHandler = {addContactHandler}/>} />
  //         <Route path = '/contactlist' element = {<ContactList Contacts = {Contacts} getContactId = {removeContactHandler}/>}  />
  //       </Routes>
  //       </div>

  //       <div className='my-buttons'>
  //       <Link className='mybutton' to = '/addcontacts'><button type="button" className='btn btn-outline-primary'>Add Contact</button></Link>
  //       <Link to = '/contactlist'><button type="button" class="btn btn-outline-success" >Contact List</button></Link>
  //       </div> 
  //     </Router>  
  // </div>
      

  // );
}

export default App;
