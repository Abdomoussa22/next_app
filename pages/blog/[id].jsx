import React from 'react'
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return { props: { post: data } };
};
const posts = ({post}) => {
  return (
    <div className='container'>
      <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
    </div>
  )
}

export default posts