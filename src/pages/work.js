import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import "./work.scss"

const WorkPage = ({data}) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(project => (
      
      <section key={ project.node.id } className="portfolio">
        <div className="project">
          <h2>{ project.node.frontmatter.title }</h2>
          <h3>{ project.node.frontmatter.date }</h3>
          <div className="description">
            { project.node.frontmatter.description }
          </div>
          <div className="tech-stack">
            { project.node.frontmatter.stack }
          </div>
          <div className="site-links">
          <ul>
            <li>{ project.node.frontmatter.path && <Link to={ project.node.frontmatter.path }>View Details</Link> }</li>
          </ul>
          </div>
          <div className="preview-image">
            <div className="laptop">
              <div className="bar">
                <div className="sm-circle"></div>
                <div className="sm-circle"></div>
                <div className="sm-circle"></div>
              </div>
              <Img className="screen" fluid={ project.node.frontmatter.image.childImageSharp.fluid } />
            </div>
          </div>
        </div>
      </section>
      
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query WorkIndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {frontmatter: {posttype: {eq: "project"}}}
      ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMM 'YY")
            description
            stack
            image {
              childImageSharp {
                fluid(maxWidth: 700, quality: 100) {
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