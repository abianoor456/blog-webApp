import './home.styles.scss'
import BlogPost from '../blogPost/blogPost';
import { blogData } from '../../blog-data';
import { useState } from 'react';
import { useEffect } from 'react';
import NavigationBar from '../navgigationBar/navigationBar';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import { useMediaQuery } from 'react-responsive'


const Home = () => {
    const [blogs, setBlogs] = useState(blogData);
    useEffect(() => {
        console.log('useEffect called')
        setBlogs(blogData);
    }, blogData)

    const isMobileScreen = useMediaQuery({ query: '(max-width: 500px)' })
    console.log(isMobileScreen);
    return (
        <div >
            {!isMobileScreen ? (<Row className='row-one-home-page' gutter={[8, 8]}>
                <Col span={2}> <NavigationBar></NavigationBar></Col>
                <Col span={18} >
                    <div className='blogs-page'>
                        <p className='page-title'>Latest</p>
                        <div className='blogs-container'>
                            {blogs.map((blog) => {
                                return (
                                    <BlogPost blog={blog} ></BlogPost>
                                )
                            })}
                        </div>
                    </div ></Col>
            </Row>) : (
                <div>
                    <Row className='row-two-home-page' gutter={[16, 16]}>
                        <Col span={24} >
                            <div className='blogs-page'>
                                <p className='page-title'>Latest</p>
                                <div className='blogs-container'>
                                    {blogs.map((blog) => {
                                        return (
                                            <BlogPost blog={blog} ></BlogPost>
                                        )
                                    })}
                                </div>
                            </div ></Col>
                    </Row>
                    <Row className='row-two-two-home-page' gutter={[16, 16]}>
                        <Col span={24} >
                            <NavigationBar></NavigationBar>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}

export default Home;