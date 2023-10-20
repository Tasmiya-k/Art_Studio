export default function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <div className="contact-form-ele">
          <label className="label">Name</label>
          <input type="text" name="name" className="name" />
        </div>

        <div className="contact-form-ele">
          <label className="label">Email</label>
          <input type="email" name="email" className="email" />
        </div>

        <div className="contact-form-ele">
          <label className="label">Your Message</label>
          <input type="text" name="desc" className="desc" />
        </div>

        <div className="contact-submit-div">
          <button className="contact-submit">SEND</button>
        </div>
      </form>
    </div>
  );
}
