import './blogsPage.styles.scss'
import BlogPost from '../blogPost/blogPost'
import SearchBar from '../searchBar/searchBar'
import { SearchContext } from '../../context/search.context'
import { useContext } from 'react'

const BlogsPage = ({ blogs }) => {
    const { displaySearchBar, searchStr } = useContext(SearchContext);
    const newFilteredBlogs = blogs.filter((blog) => blog.title.toLocaleLowerCase().includes(searchStr));

    return (
        <div className='blogs-page'>
            {displaySearchBar && <SearchBar placeHolder={'search blogs'} />}
            <p className='page-title'>Latest</p>
            <div className='blogs-container'>
                {newFilteredBlogs.map((blog) => {
                    return (
                        <BlogPost blog={blog} key={blog.id} ></BlogPost>
                    )
                })}
            </div>
        </div >
    )
}

export default BlogsPage;