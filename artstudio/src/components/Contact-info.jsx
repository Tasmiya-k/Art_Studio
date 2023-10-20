export default function () {
  return (
    <div className="contact-info">
      <div className="contact-info-list">
        <img src="/LOCATION.jpg" alt="location-icon" className="location-img" />
        <p className="location-title">Mumbai, Maharashtra</p>
      </div>
      <div className="contact-info-list">
        <img
          src="/phone-call.png"
          alt="phone-call-icon"
          className="phone-img"
        />
        <p className="phone-title">+91-904803849304</p>
      </div>
      <div className="contact-info-list">
        <img src="/envolope.jpg" alt="envelope-icon" className="envolope-img" />
        <a href="mailto:tkart@gmail.com" className="email-title-link">
          <p className="email-title">tkart@gmail.com</p>
        </a>
      </div>

      <hr></hr>
      <div>
        <a href="https://www.instagram.com/artistic_krytion/">
          <img src="/insta-icon.jpg" alt="insta-icon" className="insta-icon" />
        </a>
        <img
          src="/twitter-logo.png"
          alt="twitter-icon"
          className="insta-icon"
        />
        <a href="https://www.youtube.com/@artistickrytion7090">
          <img
            src="/youtube-icon.jpg"
            alt="youtube-icon"
            className="insta-icon"
          />
        </a>
        <img
          src="/facebook-icon.png"
          alt="facebook-icon"
          className="insta-icon"
        />
      </div>
    </div>
  );
}
