const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
      allMicrocmsPosts(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            id
            link
          }
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
  }

  blogresult.data.allMicrocmsPosts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/posts/${node.link}`,
      component: path.resolve(`./src/templates/post-template.jsx`),
			context: {
				id: node.id,
			},
    })
  })
}
