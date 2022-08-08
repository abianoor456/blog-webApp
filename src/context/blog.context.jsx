import { createContext, useState, useEffect } from "react";
import { blogData } from '../blog-data';


const BlogContext = createContext({
    blogs: [],
    setBlogs: () => { }
});

const BlogProvider = ({ children }) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(blogData)
    }, setBlogs);

    const value = { blogs, setBlogs };

    return (
        <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    )
}

export {
    BlogContext,
    BlogProvider
}
