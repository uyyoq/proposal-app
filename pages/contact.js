import Navbar from "../components/Navbar/navbar"
import ContactForm from "../components/Form/ContactForm/contactForm"

const Contact = () => {
  return (
    <div>
      <div className="flex items-center my-0 mx-auto pt-16">
        <Navbar />
      </div>
      <div className="w-3/4 mx-auto">
        <ContactForm />
      </div>

    </div>
  )
}

export default Contact