import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contacts from "../contact/contacts.jsx";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">  
      <Contacts/>
    </div>
      <Footer />
    </div>
  );
}

export default Contact;
