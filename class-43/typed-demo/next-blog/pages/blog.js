
// because this is names `getServerSideProps` next knows that this funciton should run server side, vs client side.
export async function getServerSideProps(context) {
  console.log(context);

  let data = {
    name: 'Jacob',
  };

  // whatever this returns on the `props` property should be present as props on the component.
  return {
    props: { data }, // will be passed to the page component as props
  };
}

// since this is a default export, it's going to be used as the component.
export default function BlogPage(props) {

  console.log(props);

  return (
    <h1>Hello World</h1>
  );
}
