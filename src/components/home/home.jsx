import './home.styles.scss'
import BlogPost from '../blogPost/blogPost';
import { blogData } from '../../blog-data';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState(blogData);
    useEffect(() => {
        console.log('useEffect called')
        setBlogs(blogData);
    }, blogData)

    console.log(blogs)
    return (
        <div className='blogs-page'>
            <span className='page-title'>Latest</span>
            <div className='blogs-container'>
                {blogs.map((blog) => {
                    return (
                        <BlogPost blog={blog} ></BlogPost>
                    )
                })}
            </div>
        </div >
    )
}

export default Home;