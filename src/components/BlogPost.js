import React from "react";

const BlogPost = ({ blog }) => {
    return (
        <div>
            <a href={blog.link} className='card'>
                <div className='thumb' style={{backgroundImage: `url(${blog.thumbnail})`}}></div>
            </a>
        </div>
    )
}

export default BlogPost