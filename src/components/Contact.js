import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import ContactForm from "./forms/ContactForm";

const Contact = () => {
  const history = useHistory();
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      history.replace("#contact");
    }
  }, [inView]);

  return (
    <div className="contact-container" id="contact" ref={ref}>
      <section>
        <div className="contact_infobox">
          <h2>Schedule a meeting.</h2>
          <p>I'm available for hire!</p>
          <br />
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
            Did you experience any bugs or rendering problems? Was this site
            optimized for your browser or device? Please share any thoughts you
            might have.
          </p>
        </div>
        <div className="section-divider" />
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
