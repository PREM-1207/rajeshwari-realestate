import {
  ArrowUpRight,
  BedDouble,
  Home,
  MapPin,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const properties = [
  {
    id: 1,
    number: "01",
    title: "Modern Luxury Villa",
    location: "Chennai, Tamil Nadu",
    type: "Independent Villa",
    status: "AVAILABLE",
    price: "Price on Request",
    bedrooms: "4 Bedrooms",
    feature: "Private Swimming Pool",
    description:
      "A contemporary luxury villa designed for spacious family living, combining elegant architecture, modern interiors and a private outdoor lifestyle.",
  },
  {
    id: 2,
    number: "02",
    title: "Eco Green Villa",
    location: "Chennai, Tamil Nadu",
    type: "Sustainable Villa",
    status: "FEATURED",
    price: "Price on Request",
    bedrooms: "3 Bedrooms",
    feature: "Green Roof + Garden",
    description:
      "A nature-inspired residence designed around greenery, natural light and sustainable living, offering a peaceful connection between home and landscape.",
  },
  {
    id: 3,
    number: "03",
    title: "Waterfront Premium Apartments",
    location: "Chennai, Tamil Nadu",
    type: "Premium Apartment",
    status: "AVAILABLE",
    price: "Price on Request",
    bedrooms: "3 Bedrooms",
    feature: "Waterfront View",
    description:
      "A modern premium apartment concept offering stylish interiors, open views and a comfortable urban lifestyle surrounded by a beautiful waterfront setting.",
  },
];

function Properties() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const openProperty = (property) => {
    setSelectedProperty(property);
  };

  const closeProperty = () => {
    setSelectedProperty(null);
  };

  const whatsappMessage = selectedProperty
    ? `Hello Sujatha, I am interested in the ${selectedProperty.title}. Please share more details.`
    : "";

  return (
    <section className="properties-section" id="properties">

      <div className="properties-container">

        {/* HEADER */}

        <ScrollReveal>
          <div className="properties-header">

            <div>

              <div className="section-label">
                <span></span>
                FEATURED COLLECTION
              </div>

              <h2>
                Discover spaces
                <br />
                <em>worth coming home to.</em>
              </h2>

            </div>

            <div className="properties-intro">

              <p>
                A carefully selected collection of residential
                spaces designed around lifestyle, location,
                comfort and long-term value.
              </p>

              <div className="properties-count">
                <span>03</span>
                <small>FEATURED PROPERTIES</small>
              </div>

            </div>

          </div>
        </ScrollReveal>


        {/* PROPERTY SHOWCASE */}

        <div className="properties-showcase">

          {properties.map((property, index) => (

            <ScrollReveal
              key={property.id}
              delay={index * 120}
            >

              <article
                className="property-card-premium"
                onClick={() => openProperty(property)}
              >

                {/* IMAGE */}

                <div className="property-premium-image">

                  <img
                    src={`/images/property-${property.id}.jpg`}
                    alt={property.title}
                  />

                  <div className="property-premium-overlay"></div>


                  {/* NUMBER */}

                  <div className="property-number">
                    {property.number}
                  </div>


                  {/* STATUS */}

                  <div className="property-premium-status">
                    {property.status}
                  </div>


                  {/* OPEN BUTTON */}

                  <button
                    className="property-open-button"
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openProperty(property);
                    }}
                    aria-label={`View ${property.title}`}
                  >
                    <ArrowUpRight size={21} />
                  </button>

                </div>


                {/* DETAILS */}

                <div className="property-premium-details">

                  <div className="property-premium-type">
                    {property.type}
                  </div>

                  <h3>
                    {property.title}
                  </h3>

                  <div className="property-premium-location">
                    <MapPin size={14} />
                    {property.location}
                  </div>


                  <div className="property-premium-footer">

                    <div>
                      <span>STARTING FROM</span>
                      <strong>{property.price}</strong>
                    </div>

                    <span className="property-view-text">
                      View Property
                      <ArrowUpRight size={14} />
                    </span>

                  </div>

                </div>

              </article>

            </ScrollReveal>

          ))}

        </div>


        {/* BOTTOM CTA */}

        <ScrollReveal delay={220}>

          <div className="properties-bottom">

            <div>

              <span>
                LOOKING FOR SOMETHING SPECIFIC?
              </span>

              <strong>
                Tell us what your dream property looks like.
              </strong>

            </div>

            <a
              href="#contact"
              className="properties-cta"
            >
              Find My Property
              <ArrowUpRight size={17} />
            </a>

          </div>

        </ScrollReveal>

      </div>


      {/* PROPERTY MODAL */}

      {selectedProperty && (

        <div
          className="property-modal"
          onClick={closeProperty}
        >

          <div
            className="property-modal-box"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="property-modal-close"
              onClick={closeProperty}
              aria-label="Close property details"
            >
              <X size={20} />
            </button>


            <div className="property-modal-image">

              <img
                src={`/images/property-${selectedProperty.id}.jpg`}
                alt={selectedProperty.title}
              />

            </div>


            <div className="property-modal-content">

              <span className="property-modal-label">
                {selectedProperty.status}
              </span>

              <div className="property-modal-type">
                {selectedProperty.type}
              </div>

              <h3>
                {selectedProperty.title}
              </h3>

              <div className="property-modal-location">
                <MapPin size={15} />
                {selectedProperty.location}
              </div>

              <p>
                {selectedProperty.description}
              </p>


              <div className="property-features">

                <div>
                  <BedDouble size={19} />
                  <span>{selectedProperty.bedrooms}</span>
                </div>

                <div>
                  <Home size={19} />
                  <span>{selectedProperty.type}</span>
                </div>

                <div>
                  <Sparkles size={19} />
                  <span>{selectedProperty.feature}</span>
                </div>

              </div>


              <div className="property-modal-footer">

                <div>
                  <span>PRICE</span>
                  <strong>{selectedProperty.price}</strong>
                </div>

                <a
                  href={`https://wa.me/917200719143?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="property-whatsapp-button"
                >
                  <MessageCircle size={17} />
                  Enquire on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Properties;