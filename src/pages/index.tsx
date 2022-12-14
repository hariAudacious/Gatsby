import { graphql } from "gatsby";
import * as React from "react";
import Dashboard from "./dashboard";

interface dataProps {
  data: any;
}
const IndexPage: React.FC<dataProps> = ({ data }) => {
  const { title, description } = data?.site.siteMetadata;
  return (
    <>
      <Dashboard title={title} description={description} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query SideInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
