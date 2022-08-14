import './home.styles.scss'
import BlogsPage from '../blogsPage/blogsPage';
import NavigationBar from '../navgigationBar/navigationBar';
import { Row, Col, Button } from 'antd';
import "antd/dist/antd.css";
import { useMediaQuery } from 'react-responsive'
import { useContext } from 'react'
import { BlogContext } from '../../context/blog.context'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from 'aws-amplify-react';
import { useState } from 'react';

const Home = () => {
    const { blogs } = useContext(BlogContext);

    const isMobileScreen = useMediaQuery({ query: '(max-width: 500px)' });


    return (
        <div >
            {!isMobileScreen ? (
                <Row className='row-one-home-page' gutter={[8, 8]}>
                    <Col span={2}> <NavigationBar /></Col>
                    <Col span={18} ><BlogsPage blogs={blogs} /></Col>
                </Row>
            ) : (
                <div>
                    <Row className='row-two-home-page' gutter={[16, 16]}>
                        <Col span={24}><BlogsPage blogs={blogs} /></Col>
                    </Row>
                    <Row className='row-two-two-home-page' gutter={[16, 16]}>
                        <Col span={24}> <NavigationBar></NavigationBar></Col>
                    </Row>
                </div>
            )}
            <NavigationBar></NavigationBar>
        </div>
    )
}

export default Home;