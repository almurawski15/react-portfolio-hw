import React from "react";

function Contact() {
    return (
    <section className="contact" id="contact">
        <div className="row">
          <h2>Get in Touch</h2>
          <div className="contact__info">
            <p>
              Are you looking for a user-friendly website to
              represent your product or business? Or help with branding your company's image? Perhaps setting up your social media platforms with a revenue increasing strategy? The quickest way to reach out to
              me is via email. 
              <br />
              <i className="fas fa-phone">586-206-5936</i>
            </p>
            <a href="mailto:almurawski15@gmail.com" className="btn">Email</a>
          </div>
        </div>
      </section>
    );
}

export default Contact;