import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing_top">
        <div className="personal_image">
          <motion.img
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
            alt="portrait"
            src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/portrait_png.png"
          />
        </div>
        <div className="landing_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-layers-intersect"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#efa649"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="8" y="4" width="12" height="12" rx="2" />
            <rect x="4" y="8" width="12" height="12" rx="2" />
          </svg>
        </div>
        <div className="name-box">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
          >
            Nolan
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            Crenshaw.
          </motion.h1>
          <div />
        </div>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
        >
          <ul>
            <li>
              <span>Skills</span>
              <div />
            </li>
            <li>
              <span>Works</span>
              <div />
            </li>
            <li>
              <span>Blog</span>
              <div />
            </li>
          </ul>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="intro-box"
        >
          <h3>- Who I Am.</h3>
          <h2>A Full-Stack Developer based in Chattanooga, TN.</h2>
          <p>
            Hire me to join your team. Or contact me to talk about your project.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="social-links"
        >
          <ul>
            <motion.li whileHover={{ scale: 1.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-linkedin"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ebebec"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-github"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ebebec"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-dribbble"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ebebec"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
                <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
              </svg>
            </motion.li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="about-me"
        >
          <motion.div whileHover={{ scale: 1.2, x: 10 }}>
            <span>My Story</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-right"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#efa649"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
            <div />
          </motion.div>
        </motion.div>
      </div>
      <div className="landing_bottom">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <div className="contact-box">
            <motion.div
              whileHover={{ scale: 1.2, x: 20 }}
              className="contact_link"
            >
              <span>Contact Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-right"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#efa649"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
              <div />
            </motion.div>
            <h2>I'm available to work.</h2>
            <p>What's your project? </p>
          </div>
          <div>
            <h2>
              Whether you need front-end or back-end work, I can help find a
              solution.
            </h2>
            <p>
              Let me build you a modern, responsive website, and/or an API to
              talk to one. I'm also ready to handle your SEO site-optimization
              and UI/UX design needs.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Landing;
