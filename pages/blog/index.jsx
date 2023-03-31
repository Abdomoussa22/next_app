import Link from "next/link";
import React from "react";
import styles from "../../styles/blog.module.css";

export const getStaticProps = async () => {
try {
const res = await fetch(
"https://jsonplaceholder.typicode.com/posts?_limit=9"
);
const data = await res.json();
return {
props: {
posts: data,
},
};
} catch (error) {
console.log(error);
return {
props: {
posts: [],
},
};
}
};

const Blog = ({ posts }) => {
return (
<div className={styles.blog_sec}>
<div className="container">
<div className="row">
<h1>Blog</h1>
<hr />
</div>
<div className="row">
{posts.map((post) => (
<div key={post.id} className="col-12 col-md-4 h-100 mb-3">
<div className="card">
<img
               src={`https://source.unsplash.com/720x400/?${post.id}`}
               className="card-img-top"
               alt="image"
             />
<div className={`${styles.card_body} card-body`}>
<h5 className="card-title mb-4">{post.title}</h5>
<p className="card-text">{post.body}</p>
<Link href={`/blog/${post.id}`} className="btn btn-primary ">
Read More
</Link>
</div>
</div>
</div>
))}
</div>
</div>
</div>
);
};

export default Blog;
