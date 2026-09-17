import {
  ArrowUpRight,
  Search,
  Handshake,
  FileText,
  KeyRound,
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Property Search",
    text: "Tell us what you are looking for and we will help you discover suitable property options.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Property Sales",
    text: "Professional guidance throughout the property buying and selling process.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Documentation",
    text: "Support with the essential documentation and coordination required for your property journey.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Rental Assistance",
    text: "Find practical rental options based on your preferred location, budget and requirements.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* HEADER */}
        <ScrollReveal>
          <div className="services-header">

            <div>

              <div className="section-label services-label">
                <span></span>
                WHAT WE DO
              </div>

              <h2>
                Property guidance,
                <br />
                <em>made personal.</em>
              </h2>

            </div>

            <div className="services-intro">

              <p>
                From finding the right property to completing
                the journey, Rajeshwari Realestate provides
                straightforward and personal assistance.
              </p>

              <a href="#contact" className="services-talk-link">
                Talk to us
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>
        </ScrollReveal>


        {/* SERVICES */}
        <div className="services-list">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.number}
                delay={index * 100}
              >

                <article className="service-row">

                  {/* NUMBER */}
                  <div className="service-number">
                    {service.number}
                  </div>


                  {/* ICON */}
                  <div className="service-icon">

                    <Icon size={25} strokeWidth={1.6} />

                    <div className="service-icon-glow"></div>

                  </div>


                  {/* CONTENT */}
                  <div className="service-content">

                    <span className="service-mini-label">
                      SERVICE {service.number}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.text}
                    </p>

                  </div>


                  {/* ARROW */}
                  <a
                    href="#contact"
                    className="service-arrow"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowUpRight size={21} />
                  </a>

                </article>

              </ScrollReveal>
            );

          })}

        </div>


        {/* BOTTOM MESSAGE */}
        <ScrollReveal delay={200}>
          <div className="services-bottom">

            <div className="services-bottom-line"></div>

            <p>
              Looking for something specific?
              <span> Let's find it together.</span>
            </p>

            <a href="#contact" className="services-bottom-button">
              Start Your Search
              <ArrowUpRight size={17} />
            </a>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}

export default Services;