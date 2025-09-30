import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "@/constants/index";
import { logEvent, analytics } from "@/lib/firebase";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleSocialClick = (name: string, url: string) => {
    if (analytics) {
      logEvent(analytics, "social_click", {
        category: "engagement",
        label: name,
        url: url,
      });
    }
  };

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

            return isExternal ? (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="inline-block"
                onClick={() => handleSocialClick(link.name, link.link)}
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.link}
                aria-label={link.name}
                onClick={() => handleSocialClick(link.name, link.link)}
              >
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
