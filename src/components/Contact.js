import React from "react";

import ContactForm from "./forms/ContactForm";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <section>
        <ContactForm />
        <div className="section-divider" />
        <div className="contact_infobox">
          <h2>Schedule a meeting.</h2>
          <p>I'm available for hire!</p>
          <p>
            Please feel free to contact me if you think I might be a good fit
            with your company. Or perhaps you would like to procure my services
            as an independent contractor.
          </p>
          <p>I am at your disposal.</p>
          <div />
          <h2>Let me know what you think.</h2>
          <p>
            I'm working hard to show what I can offer. Do you like what you see?
            Did you experience any bugs or rendering problems? Was this site not
            optimized for your browser or device? Please give me a heads up!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
