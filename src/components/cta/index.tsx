// CTA.tsx
import React from "react";

const CTA: React.FC = () => {
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
      >
        Contact
      </a>
    </section>
  );
};

export default CTA;
