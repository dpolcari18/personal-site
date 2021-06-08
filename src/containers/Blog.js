import React, { useState, useEffect } from 'react'

// components
import BlogPost from '../components/BlogPost'

// styling
import './Blog.css'

// endpoint
const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40davidpolcari'

const Blog = () => {

     // local state
     const [blogs, setBlogs] = useState([])

     // fetch blogs from medium
    const fetchBlogs = async () => {
        const fetchReq = await fetch(URL)
        const fetchRes = await fetchReq.json()
        
        setBlogs(fetchRes.items.sort((a,b) => a.pubDate - b.pubDate).slice(0,4))
    }

    // call fetch function one time
    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div className='band'>
            {blogs.map(blog => <BlogPost blog={blog} />)}
        </div>
    )
}

export default Blog