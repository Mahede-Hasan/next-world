import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    return (
       <div>
         <Link className="px-4 pt-10 pb-10" href='/'>
        <span>Home</span>
      </Link>
         <div className='px-5 pt-10 h-screen'>
            <span className='px-3'>{post.id}</span>
            <span>{post.title}</span>
            <h1 className='px-8'>{post.body}</h1>
        </div>
       </div>
    );
};

export default Post;

export async function getStaticPaths() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await res.json()
    return {
        props: {
            post: post
        }
    }
}