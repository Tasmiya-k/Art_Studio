import ContactInfo from "../components/Contact-info";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-main">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
