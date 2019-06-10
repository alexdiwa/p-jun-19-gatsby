import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

const WorkPage = ({data}) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(project => (
      <div key={ project.node.id }>
        <h3>{ project.node.frontmatter.title }</h3>
        <Img fluid={ project.node.frontmatter.image.childImageSharp.fluid } />
        <Link to={ project.node.frontmatter.path }>Read More</Link>
        <br />
        <br />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query WorkIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default WorkPage;