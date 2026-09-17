import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* TOP LABEL */}
        <ScrollReveal>
          <div className="about-top-label">
            <span></span>
            ABOUT RAJESHWARI REALESTATE
            <span></span>
          </div>
        </ScrollReveal>


        <div className="about-main">

          {/* IMAGE SIDE */}
          <ScrollReveal>

            <div className="about-visual">

              <div className="about-image-frame">

                <div className="about-image">

                  <img
                    src="/images/mother-family.jpg"
                    alt="Sujatha Siva Kumar"
                  />

                </div>

                <div className="about-gold-corner"></div>

              </div>


              {/* FLOATING BADGE */}
              <div className="about-badge">

                <Sparkles size={19} />

                <div>
                  <strong>PROPERTY</strong>
                  <span>WITH PURPOSE</span>
                </div>

              </div>


              {/* DECORATIVE NUMBER */}
              <div className="about-number">
                01
              </div>

            </div>

          </ScrollReveal>


          {/* CONTENT SIDE */}
          <ScrollReveal delay={120}>

            <div className="about-content">

              <div className="section-label">
                <span></span>
                TRUST • VALUE • GUIDANCE
              </div>


              <h2>
                More than
                <br />
                <em>just property.</em>
              </h2>


              <p className="about-lead">
                Rajeshwari Realestate is built around a simple
                belief — finding the right property should feel
                personal, transparent and reassuring.
              </p>


              <p className="about-description">
                With Sujatha Siva Kumar guiding every
                conversation, we focus on understanding what
                you are looking for and helping you move toward
                the right property with clarity and confidence.
              </p>


              {/* TRUST POINTS */}

              <div className="about-points">

                <div className="about-point">

                  <div className="about-point-icon">
                    <Check size={16} />
                  </div>

                  <div>
                    <strong>Personal Guidance</strong>
                    <span>
                      Property support based on your needs.
                    </span>
                  </div>

                </div>


                <div className="about-point">

                  <div className="about-point-icon">
                    <Check size={16} />
                  </div>

                  <div>
                    <strong>Transparent Communication</strong>
                    <span>
                      Clear conversations throughout your journey.
                    </span>
                  </div>

                </div>


                <div className="about-point">

                  <div className="about-point-icon">
                    <Check size={16} />
                  </div>

                  <div>
                    <strong>Long-Term Value</strong>
                    <span>
                      Helping you think beyond the transaction.
                    </span>
                  </div>

                </div>

              </div>


              <a
                href="#contact"
                className="about-button"
              >
                Talk to Sujatha
                <ArrowUpRight size={17} />
              </a>

            </div>

          </ScrollReveal>

        </div>


        {/* BOTTOM TRUST CARDS */}

        <ScrollReveal delay={180}>

          <div className="about-stats">

            <div className="about-stat">

              <div className="about-stat-icon">
                <ShieldCheck size={22} />
              </div>

              <div>
                <strong>TRUST</strong>
                <span>
                  Built through honest guidance
                </span>
              </div>

            </div>


            <div className="about-stat">

              <div className="about-stat-icon">
                <Users size={22} />
              </div>

              <div>
                <strong>PERSONAL</strong>
                <span>
                  Every requirement matters
                </span>
              </div>

            </div>


            <div className="about-stat">

              <div className="about-stat-icon">
                <Sparkles size={22} />
              </div>

              <div>
                <strong>VALUE</strong>
                <span>
                  Property choices with purpose
                </span>
              </div>

            </div>

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
}

export default About;