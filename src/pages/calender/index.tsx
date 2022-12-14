import { graphql } from "gatsby";
import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

const Calender = ({ data }: any) => {
  console.log("Image data", data);
  return (
    <Layout>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Calender
          </h1>
        </div>
        <div className="p-5 w-1/2 mx-auto" >
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </header>
    </Layout>
  );
};

export default Calender;

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "motivation.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
