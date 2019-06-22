import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import "./blog-post.scss"

export default function Template({data}) {
  const blog = data.markdownRemark

  return (
    <Layout>
      <section className="blog-post">
        <h1>{ blog.frontmatter.title }</h1>
        <h2>{ blog.frontmatter.date }</h2>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
        <Link to="/blog">Back to blogs</Link>
      </section>
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
        date(formatString: "DD MMM 'YY")
      }
    }
  }
`