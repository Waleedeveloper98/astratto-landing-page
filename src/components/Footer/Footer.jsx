import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="footer-box px-4 md:px-10 mb-10">
      <div className="border rounded-2xl border-zinc-400 shadow">
      <FooterTop />
      <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
