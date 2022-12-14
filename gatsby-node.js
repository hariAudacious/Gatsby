exports.createPages = async ({actions, graphql }) => {
  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    console.log("node",node);
    actions.createPage({
      path: '/project/'+ node.frontmatter.slug,
      component: require.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}