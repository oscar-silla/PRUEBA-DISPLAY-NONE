import { Divider } from 'antd';
import React from 'react';

const BrandComponent = () => {
    return (
        <div>
            <Divider />
            <div className='flex-brand'>
                <img 
                    alt='diseño-logo-fotografia' 
                    src='https://i.imgur.com/QLBk1Wx.jpg' 
                    className='brand-image zoom-out'>
                </img>
                <img 
                    alt='logo-minimalista-infinito' 
                    src='https://i.imgur.com/0ALZFqm.png' 
                    className='brand-infinite zoom-out'>
                </img>
                <img 
                    alt='bee-logo' 
                    src='https://i.imgur.com/30oouc7.jpg' 
                    className='brand-bee zoom-out'>
                </img>
                <img 
                    alt='sew-perfect-logo' 
                    src='https://i.imgur.com/OwgmMny.jpg' 
                    className='brand-perfect zoom-out'>
                </img>
                <img 
                    alt='logo-casa-minimalista' 
                    src='https://i.imgur.com/L4z9QUT.png' 
                    className='brand-house zoom-out'>
                </img>
                <img 
                    alt='eye-mark-logo' 
                    src='https://i.imgur.com/G8AmAGi.jpg' 
                    className='brand-eye zoom-out'>
                </img>
            </div>
        </div>
    )
}

export default BrandComponent;