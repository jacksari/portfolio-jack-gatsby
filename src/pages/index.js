import * as React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import Projects from '../components/Projects'
import Services from '../components/Services'
import Experience from "../components/home/Experience"
import Technologies from "../components/home/Technologies"
import HeaderHome from "../components/home/HeaderHome"

const IndexPage = ({data}) => {
  const { allMdx: { nodes:projects } } = data;
  return (
    <Layout>
      <HeaderHome/>
      <Services/>
      <Experience/>
      <Technologies/>
      <Projects title="recently projects" projects={projects}/>
      <h1 className="text-3xl font-bold bg-primary-500 text-white p-4">
        Hello world!
      </h1>

    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: {frontmatter: {type: {eq: "project"}, feature: {eq: true}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          category
          demo
          git
          slug
          technologies
          title
          date
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default IndexPage
