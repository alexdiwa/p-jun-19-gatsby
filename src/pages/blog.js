import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import "./blog.scss"

const BlogPage = ({data}) => (
  <Layout>
    <section className="blog">
      {data.allMarkdownRemark.edges.map(blog => (
        <div key={ blog.node.id }>
          <h2>{ blog.node.frontmatter.title }</h2>
          <h3>{ blog.node.frontmatter.date }</h3>
          <h3>{ blog.node.frontmatter.description }</h3>
          <Link to={ blog.node.frontmatter.path }>Read more</Link>
          <br />
          <br />
        </div>
      ))}
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {frontmatter: {posttype: {eq: "blog"}}}
      ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMM 'YY")
            description
          }
        }
      }
    }
  }
`

export default BlogPage;