import './blogPost.styles.scss'

const BlogPost = ({ blog }) => {
    const { id, title, date, body, imageUrl } = blog;
    console.log(id);
    return (
        <div className='blog-card'>
            <span className='date'>{date}</span>
            <span className='blog-title'>{title}</span>
            <span className='blog-body'>{body}</span>
        </div>
    )

}

export default BlogPost;