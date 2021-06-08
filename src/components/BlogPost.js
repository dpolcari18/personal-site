import React from "react";

const BlogPost = ({ blog }) => {
    return (
       <a className='blog-card' href={blog.link} title={`Click to read ${blog.title}`} target='_blank' rel='noreferrer' style={{backgroundImage: `url(${blog.thumbnail})`}}>
           <div className='inner'>
                <h2 className='title'>{blog.title}</h2>
                <time className='subtitle'>{blog.pubDate}</time>
           </div>
       </a>
    )
}

export default BlogPost