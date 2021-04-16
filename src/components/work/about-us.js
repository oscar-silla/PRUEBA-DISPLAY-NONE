import React from 'react';

const AboutUsComponent = () => {
    return (
        <div id='#about' className='mt-84'>
            <h1 className='title-about'>About Us.</h1>
            <div className='p-about'>
                <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar
                </p>
            </div>
            <div className='flex-about'>
                <div className='zoom-out-man mt-3 man'>
                    <img
                        alt='señor-console.log'
                        src='https://i.imgur.com/59tYJ4s.jpg'
                        className=' '>
                    </img>
                </div>
                <div className='zoom-out-women mt-3 women'>
                    <img
                        alt='señora-internet'
                        src='https://i.imgur.com/WekP5cB.jpg'
                        className=''>
                    </img>
                </div>
                <div className='little-about mt-3'>
                    <h2 className='subtitle'>Little About Us</h2>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar
                </div>
            </div>
        </div>
    )
}

export default AboutUsComponent;