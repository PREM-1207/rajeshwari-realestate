import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  User,
  Home,
} from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const interest = formData.get("interest");
    const message = formData.get("message");

    const whatsappMessage =
      `New Property Enquiry - Rajeshwari Realestate\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || "Not provided"}\n` +
      `Property Interest: ${interest}\n` +
      `Message: ${message || "Not provided"}`;

    const whatsappURL =
      `https://wa.me/917200719143?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-background"></div>
      <div className="contact-overlay"></div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-header">

          <div className="section-label contact-label">
            <span></span>
            CONTACT US
          </div>

          <h2>
            Let's Find Your
            <br />
            <em>Perfect Property</em>
          </h2>

          <p>
            Have a question, need guidance or ready to start
            your property journey? We're here to help.
          </p>


          <div className="contact-details">

            {/* PHONE */}

            <a
              href="tel:+917200719143"
              className="contact-item"
            >
              <div className="contact-icon">
                <Phone size={21} />
              </div>

              <div className="contact-item-text">
                <span>CALL US</span>

                <strong>
                  +91 72007 19143
                </strong>

                <small>
                  Mon - Sat, 9:00 AM - 7:00 PM
                </small>
              </div>

              <ArrowUpRight
                className="contact-item-arrow"
                size={17}
              />
            </a>


            {/* EMAIL */}

            <a
              href="mailto:premkumar1207ap@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div className="contact-item-text">
                <span>EMAIL US</span>

                <strong>
                  premkumar1207ap@gmail.com
                </strong>

                <small>
                  We reply within 24 hours
                </small>
              </div>

              <ArrowUpRight
                className="contact-item-arrow"
                size={17}
              />
            </a>


            {/* LOCATION */}

            <div className="contact-item contact-item-static">

              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div className="contact-item-text">
                <span>VISIT US</span>

                <strong>
                  Chennai, Tamil Nadu
                </strong>

                <small>
                  Let's meet and discuss your needs
                </small>
              </div>

            </div>

          </div>


          <div className="contact-signature">
            <span>
              Your Dream Home
            </span>

            <strong>
              is Just a Message Away
            </strong>

            <div></div>
          </div>

        </div>


        {/* RIGHT SIDE FORM */}

        <div className="contact-form-card">

          <div className="contact-form-heading">
            <h3>
              Send Us a Message
            </h3>

            <p>
              Fill in your details and we'll get back to you soon.
            </p>
          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="form-field">

              <label>
                Full Name <span>*</span>
              </label>

              <div className="input-wrapper">

                <User size={18} />

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />

              </div>

            </div>


            {/* PHONE */}

            <div className="form-field">

              <label>
                Phone Number <span>*</span>
              </label>

              <div className="input-wrapper">

                <Phone size={18} />

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="form-field">

              <label>
                Email Address
              </label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />

              </div>

            </div>


            {/* PROPERTY INTEREST */}

            <div className="form-field">

              <label>
                Property Interest
              </label>

              <div className="input-wrapper select-wrapper">

                <Home size={18} />

                <select
                  name="interest"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                  >
                    Select an option
                  </option>

                  <option>
                    Buy a Property
                  </option>

                  <option>
                    Sell a Property
                  </option>

                  <option>
                    Rent a Property
                  </option>

                  <option>
                    Property Consultation
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="form-field">

              <label>
                Your Message
              </label>

              <div className="input-wrapper textarea-wrapper">

                <MessageCircle size={18} />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us what you're looking for..."
                ></textarea>

              </div>

            </div>


            {/* SEND BUTTON */}

            <button
              type="submit"
              className="contact-submit"
            >
              <span>
                Send Message
              </span>

              <Send size={17} />

            </button>

          </form>


          <div className="contact-or">
            <span></span>
            <small>OR</small>
            <span></span>
          </div>


          <a
            href="https://wa.me/917200719143"
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp"
          >

            <MessageCircle size={19} />

            <span>
              Chat on WhatsApp
            </span>

          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;