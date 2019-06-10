import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

export default function Template({data}) {
  const project = data.markdownRemark

  return (
    <Layout> 
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
      <Link to="/work">Back to portfolio</Link>
    </Layout>
  )
}

export const projectQuery = graphql`
  query WorkProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
      }
    }
  }
`