import './addPost.styles.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './addPost.styles.scss'
import { blogData } from '../../blog-data'
import { useContext } from 'react'
import { BlogContext } from '../../context/blog.context'
import { useState } from 'react';

const AddPost = ({ modalIsOpen, closeModal, customStyles }) => {

    const defaultFormFields = {
        title: '',
        body: ''
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { setBlogs } = useContext(BlogContext);
    const appElement = document.getElementById('root');

    const { title, body } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    Modal.setAppElement(appElement);

    const addBlog = (e) => {
        e.preventDefault();
        blogData.push({
            "id": 7,
            "date": "29 May",
            "title": title,
            "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            "body": body
        });
        const newArr = [...blogData];
        setBlogs(newArr);
        closeModal();
    }

    return (

        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal">

            <h1 className='add-post-title'>Add Post</h1>
            <form className='add-post-container'>
                <label className='blog-input-label'>Enter Blog title</label>
                <input name='title' onChange={handleChange} className='blog-input title' type='text'></input>

                <label className='blog-input-label'>Enter Blog body</label>
                <input name='body' onChange={handleChange} className='blog-input body' type='text'></input>

                <div className='add-post-btns-container'>
                    <button className='blog-btn-upload-btn'>Upload picture</button>

                    <button type='submit' className='blog-btn-submit-btn' onClick={e => addBlog(e)}>Submit</button>
                </div>
            </form>
        </Modal>


    )

}


export default AddPost;
