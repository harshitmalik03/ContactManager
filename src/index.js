import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
// import Testing from './components/Testing';
// import './components/App';
// import './components/AddContact';
// import './components/ContactCard';
// import './components/ContactList';
// import ContactList from './components/ContactList';
// import AddContact from './components/AddContact';



  // <Router>
  //   <Routes>
  //   <Route path = "/testing" element = {<Testing />} />
  //   {/* <Route path = "/addcontact" component = {AddContact} />
  //   <Route path = "/contactlist" component = {ContactList} />
  //   <Route path = "/app" component = {App} /> */}

  //   </Routes>
    
  // </Router>

  ReactDOM.render(
      <React.StrictMode>
      <App />
      </React.StrictMode>,
      document.getElementById("root")
  );
// const root = ReactDOM.render(document.getElementById('root'));

// root.render(

// );
