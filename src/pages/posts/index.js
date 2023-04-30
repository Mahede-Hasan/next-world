import Link from 'next/link';
import React from 'react';

const Posts = ({posts}) => {
    
    return (
        <div>
            <h1 className='text-[30px] pl-5 py-5'>User Post</h1>
            {
                posts.map(post=>{
                    return(
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`}>
                            <span className='px-3'>{post.id}</span>
                            <span>{post.title}</span>
                            <h1 className='px-8'>{post.body}</h1>
                            <hr className='h-0.5 bg-black mb-4' />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Posts;

export async function getStaticProps(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    return{
        props : {
            posts : posts
        }
    }
}