import React from "react";

function About() {
    return (
    <section className="about" id="about">

        <div className="row">
          <h2>About Me</h2>
          <div className="about__content">
            <div className="about__text">
              <p>
                Full-Stack Developer with a strong understanding of industry trends and content management. Having 6+ years of experience as a marketing and management professional, I have a passion for front-end and UI/UX design with the ability to understand both programming and aesthetics to execute the entire web development process.
              </p>
              <a href="./public/assets/MURAWSKI_2021.pdf" target="_blank" className="btn">My Resume
              </a>
            </div>
            <div className="about__photo-container">
              <img className="about__photo" src="./assets/headshot.jpg" alt="Al Murawski" />
            </div>
          </div>
        </div>

      </section>
    );
}

export default About;