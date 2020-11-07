import Navbar from "../components/Navbar/navbar"
import ContactForm from "../components/Form/contactForm"

const Contact = () => {
  return (
    <div>
      <div className="flex w-full items-center my-0 mx-auto" >
        <Navbar />
      </div>

      <div className="w-11/12 md:w-3/4 mx-auto mt-20">
      <ContactForm />
      </div>


    </div>
  )
}

export default Contact