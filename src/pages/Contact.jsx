import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-desk">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-wrapper">
        {/* Postcard: Email */}
        <div className="contact-card tilt-left">
          <h3>📧 Email</h3>
          <p>info@hopthemiles.com</p>
        </div>

        {/* Postcard: Phone */}
        <div className="contact-card tilt-right">
          <h3>📞 Phone</h3>
          <p>+91 99********</p>
        </div>

        {/* Postcard: Address */}
        <div className="contact-card tilt-left">
          <h3>📍 Address</h3>
          <p>Gurgaon, India</p>
        </div>

        {/* Sticky Note Form */}
        <form className="sticky-note">
          <h3>📮 Send a Message</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send ✈️</button>
        </form>
      </div>
    </section>
  );
}
