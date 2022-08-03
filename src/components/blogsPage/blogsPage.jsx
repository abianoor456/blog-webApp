import './blogsPage.styles.scss'
import BlogPost from '../blogPost/blogPost'

const BlogsPage = ({ blogs }) => {
    return (
        <div className='blogs-page'>
            <p className='page-title'>Latest</p>
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

export default BlogsPage;