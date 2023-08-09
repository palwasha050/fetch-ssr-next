import React from 'react';

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Blog({ data }) {
  // Render data...
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
