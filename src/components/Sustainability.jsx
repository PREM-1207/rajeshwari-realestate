import {
  ArrowUpRight,
  Leaf,
  Droplets,
  Sun,
  TreePine,
  Wind,
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";

const principles = [
  {
    icon: Leaf,
    number: "01",
    title: "Green Living",
    text: "Spaces designed to bring nature closer to everyday life.",
  },
  {
    icon: Sun,
    number: "02",
    title: "Natural Light",
    text: "Thoughtful spaces that make better use of daylight and openness.",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Responsible Design",
    text: "A focus on practical choices that respect resources and surroundings.",
  },
];

function Sustainability() {
  return (
    <section className="sustainability-section" id="sustainability">

      <div className="sustainability-glow"></div>

      <div className="sustainability-container">

        {/* HEADER */}

        <ScrollReveal>

          <div className="sustainability-header">

            <div className="section-label">
              <span></span>
              SUSTAINABLE LIVING
            </div>

            <h2>
              A home that
              <br />
              <em>breathes with nature.</em>
            </h2>

            <p>
              We believe beautiful spaces can exist in harmony
              with the environment. Our approach considers
              greenery, natural light, open spaces and thoughtful
              design.
            </p>

          </div>

        </ScrollReveal>


        {/* MAIN VISUAL */}

        <div className="sustainability-main">

          {/* ECO ORB */}

          <ScrollReveal>

            <div className="eco-visual">

              <div className="eco-orbit eco-orbit-one"></div>
              <div className="eco-orbit eco-orbit-two"></div>
              <div className="eco-orbit eco-orbit-three"></div>

              <div className="eco-core">

                <Leaf size={58} strokeWidth={1} />

                <span>
                  LIVE
                </span>

                <strong>
                  GREEN
                </strong>

              </div>


              <div className="eco-floating eco-leaf">
                <Leaf size={20} />
              </div>

              <div className="eco-floating eco-sun">
                <Sun size={19} />
              </div>

              <div className="eco-floating eco-tree">
                <TreePine size={19} />
              </div>

              <div className="eco-floating eco-wind">
                <Wind size={19} />
              </div>

            </div>

          </ScrollReveal>


          {/* PRINCIPLES */}

          <ScrollReveal delay={150}>

            <div className="sustainability-principles">

              <div className="sustainability-principles-heading">
                <span>OUR APPROACH</span>
                <small>DESIGNED WITH PURPOSE</small>
              </div>


              {principles.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="sustainability-card"
                    key={item.number}
                  >

                    <div className="sustainability-card-number">
                      {item.number}
                    </div>

                    <div className="sustainability-card-icon">
                      <Icon size={22} />
                    </div>

                    <div className="sustainability-card-content">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>

                    <ArrowUpRight
                      className="sustainability-card-arrow"
                      size={18}
                    />

                  </div>
                );

              })}

            </div>

          </ScrollReveal>

        </div>


        {/* BOTTOM STATEMENT */}

        <ScrollReveal delay={200}>

          <div className="sustainability-bottom">

            <div className="sustainability-line"></div>

            <p>
              <span>RAJESHWARI REALESTATE</span>
              Creating spaces where modern living and nature
              can exist together.
            </p>

            <div className="sustainability-line"></div>

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
}

export default Sustainability;