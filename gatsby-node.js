const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve('src/templates/project-post.js');
  const blogTemplate = path.resolve('src/templates/blog-post.js');


  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              posttype
              path
              title
              date
              description
              stack
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(edge => {
      if (edge.node.frontmatter.posttype === 'project') {
        createPage({
          path: edge.node.frontmatter.path,
          component: projectTemplate,
          context: {}
        });
      }   
      else {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogTemplate,
            context: {
          },
        })
      }
    })    
  })
}