import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer-container">
      <HashLink id="footer_return" smooth to="#landing">
        <motion.svg
          whileHover={{ scale: 1.2, x: -4, y: -4 }}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-up-circle"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ebebec"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="8" y2="12" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="16" y1="12" x2="12" y2="8" />
        </motion.svg>
      </HashLink>
      <div className="credits">
        <span>
          Social icons sourced from
          <a href="https://tablericons.com/">Tabler Icons</a>
        </span>
        <span>
          Technology icons sourced from
          <a href="https://icons8.com/">Icon8</a>
        </span>
        <span>
          SVG art sourced from
          <a href="https://undraw.co/illustrations">Undraw</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
