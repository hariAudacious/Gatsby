import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "/home/atm/Desktop/my-gatsby-site/src/images/motivation.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  // console.log("data", query);

  return (
    <div>
      <h1>Hello gatsby-image</h1>

      {/* <Img fixed={data?.file.childImageSharp.fixed} /> */}
    </div>
  );
};
export default Image;
