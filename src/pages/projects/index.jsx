import React from "react"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"
import Projects from '../../components/Projects'
import NavFixed from "../../components/layout/NavFixed"

function Index({data}) {
  const { allMdx: { nodes:projects } } = data;
  console.log(projects)
  return (
    <Layout>
      <NavFixed/>
      <Projects projects={projects} title="projects"/>
      <h1 className="text-3xl font-bold bg-primary-500 text-white p-4">
        Hello world!
      </h1>
      <h1>Title</h1>
      <p>Hola</p>

    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: {frontmatter: {type: {eq: "project"}}}
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

export default Index
