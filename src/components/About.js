import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const About = () => {
  const history = useHistory();
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      history.replace("#about");
    }
  }, [inView]);

  return (
    <div className="about-container" id="about">
      <div>
        <h1 ref={ref}>About Me.</h1>
        <p>
          I am Web-Developer living in Chattanooga, Tennessee. My core languages
          are JavaScript and Python, with a focus on React and Flask frameworks.
          Coding began in earnest for me when I managed to automate some daily
          Excel tasks in VBA for an employer. After that 'ah-ha' moment, I began
          learning from a variety of tutorials and Udemy courses. I made the
          leap into serious programming when I was accepted into an intense six
          month bootcamp with App Academy. Graduating didn't put an end to my
          education, but it put all the pieces into place for me to truly start
          absorbing all that the development world has to offer.
        </p>
      </div>
      {/* <h1>Life Beyond Programming.</h1>
      <ul>
        <li>
          <h1>Raft Guide</h1>
          <img
            id="rafting_pic"
            alt="rafting"
            src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/raftguiding.png"
          />
          <div>
            <h2>Raft Guide</h2>
            <p>
              White water is a huge passion of mine. I've worked in Uganda, New
              Zealand, and all over the States. Living in East TN allows me to
              pick up the random weekend trip.
            </p>
          </div>
        </li>
        <li>
          <h1>Family</h1>
          <img
            id="dad_pic"
            alt="dad portrait"
            src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/portrait_with_baby.png"
          />
          <div>
            <h2>Family</h2>
            <p>
              I would me amiss to not list my beautiful family. I've gone full
              dad these days, and I have the bad jokes and socks to prove it.
            </p>
          </div>
        </li>
        <li>
          <h1>Musician</h1>
          <div>
            <h2>Musician</h2>
            <p>
              Okay, calling myself a musician might be taking it a bit far, but
              I've played guitar since I was a kid. There's probably no better
              way to clear my head. Just don't ask me to sing.
            </p>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default About;
