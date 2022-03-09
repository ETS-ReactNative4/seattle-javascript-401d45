const path = require(`path`);

// this runs once at the start and builds however many pages using whatever template we want.
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/pages/blog.js`);

  // CMS enters here.
  let content = [
    {
      title: 'My First Post',
      slug: 'my-first-post',
      content: 'I love blogging',
    },
    {
      title: 'My second Post',
      slug: 'my-second-post',
      content: 'I still love blogging',
    },
  ];

  content.forEach(article => {
    createPage({
      path: article.slug,
      component: blogPostTemplate,
      context: article,
    });
  });
};
