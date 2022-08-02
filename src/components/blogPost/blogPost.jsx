import './blogPost.styles.scss'

const BlogPost = ({ blog }) => {
    const { id, title, date, body, imageUrl } = blog;
    return (
        <div className='blog-card'>
            <span className='date'>{date}</span>
            <p className='blog-title'>{title}</p>
            <img src={imageUrl} alt={`${id}`}></img>
            <span className='blog-body'>{body}</span>
        </div>
    )

}

export default BlogPost;