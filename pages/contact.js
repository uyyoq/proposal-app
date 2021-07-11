import Navbar from "../components/Navbar/navbar"
import ContactForm from "../components/Form/contactForm"
import React from "react"

const Contact = () => {
  return (
    <React.Fragment>


      <div className="w-11/12 md:w-3/4 mx-auto mt-20">
      <ContactForm />
      </div>
    </React.Fragment>
  )
}

export default Contact