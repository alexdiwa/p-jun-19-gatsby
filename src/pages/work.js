import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

const WorkPage = ({data}) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(project => (
      <div key={ project.node.id }>
        <h2>{ project.node.frontmatter.title }</h2>
        <h3>{ project.node.frontmatter.date }</h3>
        <h3>{ project.node.frontmatter.description }</h3>
        <h3>{ project.node.frontmatter.stack }</h3>
        <Img fluid={ project.node.frontmatter.image.childImageSharp.fluid } />
        { project.node.frontmatter.path && <Link to={ project.node.frontmatter.path }>Screenshots</Link> }
        <br />
        <br />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query WorkIndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields:[frontmatter___date]}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMM 'YY")
            description
            stack
            link
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