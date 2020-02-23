import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="landing-text">
      Alex Diwa is a Frontend Developer based in Sydney, Australia. Currently at <a className="sprig" href="https://www.growsuper.com/" target="_blank">GROW</a>
    </section>
  </Layout>
)

export default IndexPage
