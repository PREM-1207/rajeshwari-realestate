import {
  ArrowRight,
  Building2,
  Check,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  House,
} from "lucide-react";

function Hero() {
  const openWhatsApp = () => {
    const message =
      "Hello Sujatha, I am interested in a property. Please share more details.";

    window.open(
      `https://wa.me/917200719143?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="luxury-hero" id="home">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="luxury-hero-bg">
        <img
          src="/images/hero-villa.jpg"
          alt="Luxury villa"
        />
      </div>

      <div className="luxury-hero-overlay" />

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="luxury-navbar">

        <a href="#home" className="luxury-logo">
          <img
            src="/images/rajeshwari-logo.png"
            alt="Rajeshwari Realestate"
          />
        </a>

        <nav className="luxury-nav-links">
          <a href="#home" className="active">
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

          <a href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="tel:7200719143"
          className="luxury-contact-button"
        >
          <Phone size={18} strokeWidth={2.3} />
          <span>Contact</span>
        </a>

      </header>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}
      <div className="luxury-hero-content">

        {/* LEFT CONTENT */}
        <div className="luxury-left">

          <div className="luxury-eyebrow">
            <span className="eyebrow-line" />
            <span>PREMIUM REAL ESTATE SOLUTIONS</span>
            <span className="eyebrow-line right" />
          </div>

          <h1>
            Your Dream Home
            <br />
            <em>is Closer Than You Think.</em>
          </h1>

          <p className="luxury-description">
            Helping you find the perfect property with trust,
            <br className="desktop-break" />
            transparency and personalized service.
          </p>

          <div className="luxury-actions">

            <a
              href="#properties"
              className="luxury-primary-button"
            >
              <span>Explore Properties</span>
              <ArrowRight size={22} />
            </a>

          </div>

          {/* =================================================
              FEATURE ICONS
          ================================================= */}
          <div className="luxury-features">

            <div className="luxury-feature">
              <div className="feature-icon">
                <House size={34} strokeWidth={1.7} />
              </div>

              <div className="feature-text">
                <strong>Residential</strong>
                <span>Properties</span>
              </div>
            </div>

            <div className="feature-divider" />

            <div className="luxury-feature">
              <div className="feature-icon">
                <Building2 size={34} strokeWidth={1.7} />
              </div>

              <div className="feature-text">
                <strong>Commercial</strong>
                <span>Properties</span>
              </div>
            </div>

            <div className="feature-divider" />

            <div className="luxury-feature">
              <div className="feature-icon">
                <Leaf size={35} strokeWidth={1.7} />
              </div>

              <div className="feature-text">
                <strong>Sustainable</strong>
                <span>Living</span>
              </div>
            </div>

            <div className="feature-divider" />

            <div className="luxury-feature">
              <div className="feature-icon">
                <ShieldCheck size={35} strokeWidth={1.7} />
              </div>

              <div className="feature-text">
                <strong>Trusted</strong>
                <span>Expertise</span>
              </div>
            </div>

          </div>

        </div>

        {/* =====================================================
            RIGHT PROFILE CARD
        ===================================================== */}
        <aside className="consultant-card">

          {/* PHOTO */}
          <div className="consultant-photo">

            <img
              src="/images/sujatha.jpg"
              alt="Sujatha Siva Kumar"
            />

          </div>

          {/* CARD INFORMATION */}
          <div className="consultant-info">

            <div className="consultant-label">
              REAL ESTATE CONSULTANT
            </div>

            <h2>
              Sujatha Siva Kumar
            </h2>

            <div className="consultant-small-line" />

            <p className="consultant-tagline">
              Your trusted property partner
            </p>

            {/* PHONE */}
            <a
              href="tel:7200719143"
              className="consultant-contact"
            >
              <span className="consultant-contact-icon">
                <Phone size={21} />
              </span>

              <span>
                +91 72007 19143
              </span>
            </a>

            {/* WHATSAPP */}
            <button
              type="button"
              onClick={openWhatsApp}
              className="consultant-contact consultant-whatsapp"
            >
              <span className="consultant-contact-icon">
                <MessageCircle size={22} />
              </span>

              <span>
                Chat on WhatsApp
              </span>
            </button>

            {/* EMAIL */}
            <a
              href="mailto:premkumar1207@gmail.com"
              className="consultant-contact"
            >
              <span className="consultant-contact-icon">
                <Mail size={21} />
              </span>

              <span>
                premkumar1207@gmail.com
              </span>
            </a>

            {/* LOCATION */}
            <div className="consultant-contact">
              <span className="consultant-contact-icon">
                <MapPin size={21} />
              </span>

              <span>
                Chennai, Tamil Nadu
              </span>
            </div>

            {/* BOTTOM SIGNATURE */}
            <div className="consultant-signature">
              <span>
                Let's find your perfect property
              </span>

              <div />
            </div>

          </div>

        </aside>

      </div>

    </section>
  );
}

export default Hero;