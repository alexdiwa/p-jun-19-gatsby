import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

export default function Template({data}) {
  const blog = data.markdownRemark

  return (
    <Layout> 
      <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      <Link to="/blog">Back to blogs</Link>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
      }
    }
  }
`