import { useState, useEffect } from "react";
import Form from "./form";
import "./users.css";
import { useNavigate } from "react-router-dom";
//import Contact  from "./contact";
//import EditForm from "./editform";

function Users() {
  const [contacts, setContacts] = useState([]);

  // New state to check if we are working on editing a contact
  //const [editedContact, setEditedContact] = useState(null);

  //A function to do the get request and set the state contacts
  const loadContacts = () => {
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
        console.log("originalcontacts", contacts);
      });
  };

  useEffect(() => {
    loadContacts();
    console.log("testcontacts", contacts);
  }, []);

  // //A function to delete a contact
  // const deleteContact = (contact) =>{
  //   return fetch(`http://localhost:8080/api/contacts/${contact.id}`, {
  //       method: "DELETE"
  //   }).then((response) =>{
  //       //console.log(response);
  //       if(response.ok){
  //           loadContacts();
  //       }
  //   })
  // };

  // //A function to Edit a contact - PUT method
  // const updateContact = (existingContact) =>{
  //     return fetch(`http://localhost:8080/api/contacts/${existingContact.id}`, {
  //         method: 'PUT',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify(existingContact)
  //       }).then((response) => {
  //           return response.json()
  //       }).then((data) => {
  //         console.log("From put request ", data);
  //         setContacts(data);
  //         setEditedContact(null);
  //     });

  // }

  //A function to handle the post request
  //   const newContact = {
  //     name: contacts.name, email: contacts.email, phonenumber: contacts.phone_number
  // }
  //anything with parentheses, big arrow, and bracket, is a new parameter you CANNOT PASS ANYTHING into an anonymous function
  const postContact = async (newContact) => {
    console.log("new contact", newContact);
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    });
    const data = await response.json();
    // .then((response) => {
    //   console.log("RES", response);
    //   return response.json();
    // })
    // .then((data) => {
    //   console.log("From the post ", data); // this is all the contacts
    //   setContacts(data);
    // });
  };

  console.log("contactshere", contacts[0]);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/blogposts"; 
    navigate(path);
  }
  return (
    <div className="contacts">
      <div className="users1">
        {contacts.map((contact, index) => {
          return (
            <div className="users" key={index}>
              {/* each thing inside map is an object */}
              <div className="name">
              <span style={{ fontWeight: 'bold' }}>Name: </span>{contact.name} 
              </div>
              <div>
              <span style={{ fontWeight: 'bold' }}>Email: </span>{contact.email}
              </div>
              <button onClick={routeChange}>Blog Posts</button>
            </div>
          );
        })}
      </div>
      <Form
        saveContact={postContact}
        setContacts={(contacts) => {
          setContacts(contacts);
        }}
      />
    </div>
  );
}

export default Users;

// import React from "react";
// import { useEffect, useState } from "react";

// const Users = () => {
//     const [name, setName] = useState("");
//     const [id, setId] = useState("");
//     const [email, setEmail] = useState("");

// const newUser = { id: id, name: name, email: email };
// fetch("http://localhost:8080/api/users", {
//     method: "POST",
//     body: JSON.stringify(newUser),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
// };

// export default Users;
