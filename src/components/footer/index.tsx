// Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

import { socialLinks } from "@/constants/index";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © {year} <strong>Utsav Rai</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => {
            const isExternal = /^https?:\/\//i.test(link.link);

            // External: use <a>; Internal route: use <Link>
            return isExternal ? (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="inline-block"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ) : (
              <Link key={link.name} to={link.link} aria-label={link.name}>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-6 h-6 object-contain"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
