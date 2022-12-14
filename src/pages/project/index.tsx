import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

const Project = ({ data }: any) => {
  console.log(data);

  const projects = data.projects.nodes;
  const email = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Projects
          </h1>
          <div className="border-4 border-gray-500 mt-2"></div>
          <div className="text-center">
            {projects.map((project: any) => (
              <Link
                to={`/project/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div className="border-b-2 border-gray-500 ">
                  <div className="w-36 mx-auto mt-5">
                    <Img
                      fluid={project.frontmatter.thumb.childImageSharp.fluid}
                    />
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-sky-500">
                    Title- {project.frontmatter.title}{" "}
                  </h1>
                  <p> ( {project.frontmatter.stack} )</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <p className="text-center">
        Contact me:- <b>{email}</b>
      </p>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query MyProjects {
    projects: allMarkdownRemark(filter: {}) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              fluid(maxWidth: 125, maxHeight: 125) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
