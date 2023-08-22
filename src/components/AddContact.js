import React from "react";
import { Navigate } from 'react-router-dom';

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    image: null,
    isContactAdded: false,
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  add = (e) => {
    e.preventDefault();

    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }

    // Add logic to save the contact
    const contact = { name: this.state.name, email: this.state.email, image: this.state.image };
    this.props.addContactHandler(contact);

    // Set the state to trigger navigation
    this.setState({ name: "", email: "", image: null, isContactAdded: true });
  }

  render() {
    if (this.state.isContactAdded) {
      // Redirect to the Contact List page after adding the contact
      return <Navigate to="/contactlist" />;
    }

    return (
      <div className="ui main addcontact">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={this.handleImageChange}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;



