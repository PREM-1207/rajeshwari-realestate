import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

function Footer() {
  const openWhatsApp = () => {
    const message =
      "Hello Sujatha, I am interested in a property. Please share more details.";

    window.open(
      `https://wa.me/917200719143?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="luxury-footer">

      <div className="luxury-footer-container">

        {/* =====================================================
            FOOTER TOP
        ===================================================== */}

        <div className="footer-top">

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            className="footer-logo-circle"
            aria-label="Rajeshwari Realestate"
          >
            <img
              src="/images/rajeshwari-logo.png"
              alt="Rajeshwari Realestate"
            />
          </a>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="footer-description">
            Helping you discover the right property with
            personal guidance, thoughtful service and
            long-term value.
          </p>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="footer-divider" />


        {/* =====================================================
            FOOTER COLUMNS
        ===================================================== */}

        <div className="footer-columns">

          {/* EXPLORE */}

          <div className="footer-column">

            <h4>
              EXPLORE
            </h4>

            <a href="#home">
              Home
            </a>

            <a href="#properties">
              Properties
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#about">
              About
            </a>

            <a href="#locations">
              Locations
            </a>

          </div>


          {/* SERVICES */}

          <div className="footer-column">

            <h4>
              SERVICES
            </h4>

            <a href="#properties">
              Property Search
            </a>

            <a href="#services">
              Property Sales
            </a>

            <a href="#services">
              Documentation
            </a>

            <a href="#services">
              Rental Assistance
            </a>

          </div>


          {/* CONTACT */}

          <div className="footer-column">

            <h4>
              CONTACT
            </h4>

            <a href="tel:7200719143">
              <Phone size={14} />
              +91 72007 19143
            </a>

            <a href="mailto:premkumar1207@gmail.com">
              <Mail size={14} />
              premkumar1207ap@gmail.com
            </a>

            <button
              type="button"
              onClick={openWhatsApp}
              className="footer-whatsapp"
            >
              <MessageCircle size={14} />
              WhatsApp
            </button>

            <span className="footer-location">
              <MapPin size={14} />
              Chennai, Tamil Nadu
            </span>

          </div>


          {/* LET'S CONNECT */}

          <div className="footer-column footer-connect">

            <h4>
              LET'S CONNECT
            </h4>

            <p>
              Have a property requirement?
              Let's start a conversation.
            </p>

            <a
              href="#contact"
              className="footer-contact-button"
            >
              GET IN TOUCH
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Rajeshwari Realestate.
            All rights reserved.
          </span>

          <span>
            Chennai, Tamil Nadu
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;