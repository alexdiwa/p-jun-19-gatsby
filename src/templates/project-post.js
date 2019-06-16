import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import "./project-post.scss"

export default function Template({data}) {
  const project = data.markdownRemark

  return (
    <Layout> 
      <div className="project-title">
        { project.frontmatter.title } - { project.frontmatter.date }
      </div>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
      <div className="back-link">
        <Link to="/work">Back to portfolio</Link>
      </div>
    </Layout>
  )
}

export const projectPostQuery = graphql`
  query ProjectPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        date(formatString: "MMM 'YY")
      }
    }
  }
`