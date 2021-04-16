import React from 'react'
import FormContactComponent from './contact/form-contact'
import { FacebookOutlined, TwitterOutlined, DribbbleOutlined } from '@ant-design/icons';

const ContactUsComponent = () => {
    return (
        <div id='#contact' className='mt-84'>
            <h1 className='title-contact'>Contact Us.</h1>
            <p className='p-contact'>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar
            </p>
            <div className='flex-contact'>
                <div className='width-form'>
                    <h2 className='subtitle'>Send Us Message.</h2>
                    <FormContactComponent />
                </div>
                <div className='border contact-image'>
                    <img
                        alt='pexels-enterprise'
                        src='https://i.imgur.com/cVcAUGd.jpg'
                        className=''
                    >
                    </img>
                </div>
            </div>
            <div className='flex-center mt-3'>
                <FacebookOutlined className='facebook' />
                <TwitterOutlined className='twitter' />
                <DribbbleOutlined className='dribble' />
            </div>
        </div>
    );
}

export default ContactUsComponent;