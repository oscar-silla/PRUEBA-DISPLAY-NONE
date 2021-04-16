import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer>
            <div className='flex-center'>
                <p className='white'>Designed by Óscar Silla &copy;</p>
                <Link to='#presentation'>
                    <Button className='btn-up'>
                        Go Up
                    </Button>
                </Link>
            </div>
        </footer>
    );
}

export default FooterComponent;