import * as React from "react"

const BlogPage = (props) => {
  console.log(props);
  const { pageContext } = props;
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <p>{pageContext.content}</p>
    </div>
  )
};

export default BlogPage;
