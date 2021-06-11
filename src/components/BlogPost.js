import React from "react";

const BlogPost = ({ blog }) => {

    const transformDate = (date) => {
        let slicedDate = date.slice(0,10)
        let year = slicedDate.slice(0,4)
        let month = slicedDate.slice(5,7)
        let day = slicedDate.slice(8,10)


        return month + '.' + day + '.' + year
    }

    return (
       <a className='blog-card' href={blog.link} title={`Click to read ${blog.title}`} target='_blank' rel='noreferrer' style={{backgroundImage: `url(${blog.thumbnail})`}}>
           <div className='inner'>
                <h2 className='title'>{blog.title}</h2>
                <time className='subtitle'>{transformDate(blog.pubDate)}</time>
           </div>
       </a>
    )
}

export default BlogPost