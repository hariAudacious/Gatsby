import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer: React.FC = () => {
  const query = useStaticQuery(graphql`
    query footerInfo {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  const { copyright } = query.site.siteMetadata;

  return <div className="text-center mt-5">{copyright}</div>;
};

export default Footer;
