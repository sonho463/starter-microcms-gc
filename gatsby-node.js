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

  const blogPostsPerPage = 4 // １ページあたりの記事数

  const blogPosts = Object.keys(blogresult.data.allMicrocmsPosts.edges).length // 記事総数
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage) // 記事一覧ページの数

  Array.from({ length: blogPages }).forEach((_, i) => {
    // blogPosts.forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}/`,
      component: path.resolve("./src/templates/index-template.jsx"),
			context: {
				skip: blogPostsPerPage*i,
				limit: blogPostsPerPage,
				currentPage: i+1, //最初のページNO
				isFirst: i+1 === 1, // 最初のページかどうか
				isLast: i+1 === blogPages, //最後のページかどうか
			}
    })
  })
}
