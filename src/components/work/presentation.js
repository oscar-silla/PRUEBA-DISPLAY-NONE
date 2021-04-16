import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const PresentationComponent = () => {
    return (
        <div id='#presentation'>
            <div className='flex'>
                <div className='presentation'>
                    <h1>
                        Hello!!!<br />
                        We Are Creative<br />
                        Digital Agency.
                    </h1>
                    <p>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar..
                    </p>
                    <Link to='#contact'>
                        <Button className='btn-sendMessage'>
                            Send Message
                        </Button>
                    </Link>
                </div>
                <div className='catsaurus'>
                    <img alt='' className='img-catsaurus' src='https://i.imgur.com/me1mrfT.gif' />
                </div>
            </div>
        </div>
    );
}

export default PresentationComponent;