import Navbar from "../components/Navbar/navbar"
import ContactForm from "../components/Form/ContactForm/contactForm"

const Contact = () => {
  return (
    <div>
      <div className="flex items-center my-0 mx-auto pt-16 items-start">
        <Navbar />
      </div>
      <div>
        <ContactForm />
      </div>

    </div>
  )
}

export default Contact