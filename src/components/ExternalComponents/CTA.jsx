import React from "react";
import config from "../../config.json";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={config.MyPdf}
        download="Example-PDF-document"
        className="btn"
      >
        Download CV
      </a>
      <a href={"#contact"} className="btn btn-primary">
        Say, Hello...
      </a>
    </div>
  );
};

export default CTA;
