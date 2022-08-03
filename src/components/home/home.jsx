import './home.styles.scss'
import BlogPost from '../blogPost/blogPost';
import BlogsPage from '../blogsPage/blogsPage';
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
        setBlogs(blogData);
    }, blogData)

    const isMobileScreen = useMediaQuery({ query: '(max-width: 500px)' })
    return (
        <div >
            {!isMobileScreen ? (<Row className='row-one-home-page' gutter={[8, 8]}>
                <Col span={2}> <NavigationBar /></Col>
                <Col span={18} ><BlogsPage blogs={blogs} /></Col>
            </Row>) : (
                <div>
                    <Row className='row-two-home-page' gutter={[16, 16]}>
                        <Col span={24}><BlogsPage blogs={blogs} /></Col>
                    </Row>
                    <Row className='row-two-two-home-page' gutter={[16, 16]}>
                        <Col span={24}> <NavigationBar></NavigationBar></Col>
                    </Row>
                </div>
            )}
        </div>
    )
}

export default Home;