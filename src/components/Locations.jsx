import {
  ArrowUpRight,
  MapPin,
  Navigation,
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";

const locations = [
  {
    number: "01",
    city: "Chennai",
    state: "Tamil Nadu",
    description:
      "Residential and investment opportunities across Chennai.",
    position: "location-pin-1",
  },
  {
    number: "02",
    city: "North Chennai",
    state: "Tamil Nadu",
    description:
      "Explore emerging residential and commercial property areas.",
    position: "location-pin-2",
  },
  {
    number: "03",
    city: "Central Chennai",
    state: "Tamil Nadu",
    description:
      "Well-connected locations for modern urban living.",
    position: "location-pin-3",
  },
  {
    number: "04",
    city: "South Chennai",
    state: "Tamil Nadu",
    description:
      "Growing neighbourhoods with diverse property options.",
    position: "location-pin-4",
  },
];

function Locations() {
  return (
    <section className="locations-section" id="locations">

      <div className="locations-container">

        {/* HEADER */}
        <ScrollReveal>
          <div className="locations-header">

            <div>

              <div className="section-label locations-label">
                <span></span>
                OUR LOCATIONS
              </div>

              <h2>
                Find your place
                <br />
                <em>in the city.</em>
              </h2>

            </div>

            <p>
              We help you explore property opportunities
              across carefully selected locations in and
              around Chennai.
            </p>

          </div>
        </ScrollReveal>


        {/* MAP VISUAL */}
        <ScrollReveal delay={100}>
          <div className="locations-map">

            <div className="map-grid"></div>

            <div className="map-orbit map-orbit-one"></div>
            <div className="map-orbit map-orbit-two"></div>

            <div className="map-center">

              <div className="map-center-ring"></div>

              <Navigation
                size={22}
                strokeWidth={1.5}
              />

              <span>CHENNAI</span>

            </div>


            {/* MAP PINS */}

            {locations.map((location) => (
              <div
                key={location.number}
                className={`map-pin ${location.position}`}
              >

                <div className="map-pin-pulse"></div>

                <div className="map-pin-dot">
                  <MapPin size={15} />
                </div>

                <span>
                  {location.city}
                </span>

              </div>
            ))}


            <div className="map-label map-label-top">
              REAL ESTATE
            </div>

            <div className="map-label map-label-bottom">
              PROPERTY NETWORK
            </div>

          </div>
        </ScrollReveal>


        {/* LOCATION CARDS */}
        <div className="locations-grid">

          {locations.map((location, index) => (

            <ScrollReveal
              key={location.number}
              delay={index * 100}
            >

              <a
                href="#contact"
                className="location-card"
              >

                <div className="location-top">

                  <span className="location-number">
                    {location.number}
                  </span>

                  <div className="location-pin">
                    <MapPin size={18} />
                  </div>

                </div>


                <div className="location-content">

                  <h3>
                    {location.city}
                  </h3>

                  <span>
                    {location.state}
                  </span>

                  <p>
                    {location.description}
                  </p>

                </div>


                <div className="location-bottom">

                  <span>
                    Explore Area
                  </span>

                  <ArrowUpRight size={17} />

                </div>

              </a>

            </ScrollReveal>

          ))}

        </div>


        {/* BOTTOM CTA */}
        <ScrollReveal delay={150}>
          <div className="locations-cta">

            <div>

              <span>
                LOOKING SOMEWHERE SPECIFIC?
              </span>

              <strong>
                Tell us your preferred location.
              </strong>

            </div>

            <a href="#contact">
              Find Property
              <ArrowUpRight size={17} />
            </a>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}

export default Locations;