import React from "react";
import { logEvent, analytics } from "@/lib/firebase";

const CTA: React.FC = () => {
  const handleContactClick = () => {
    if (analytics) {
      logEvent(analytics, "cta_click", {
        category: "engagement",
        label: "Contact Button",
        url: "mailto:utsav@utsavrai.com",
      });
    }
  };

  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>

      <a
        href="mailto:utsav@utsavrai.com"
        className="btn"
        aria-label="Email Utsav to discuss a project"
        onClick={handleContactClick}
      >
        Contact
      </a>
    </section>
  );
};

export default CTA;
