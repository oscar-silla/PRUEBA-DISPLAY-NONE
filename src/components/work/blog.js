import React from 'react'

const BlogComponent = () => {

    return (
        <div id='#blog' className='mt-84'>
            <h1 className='title-blog'>Our Blog.</h1>
            <p className='p-blog'>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar
            </p>
            <div className='flex-blog mt-3'>
                <div className='card-blog mt-3 shadow'>
                    <img
                        alt='dessert-pexels'
                        src='https://i.imgur.com/Sbqp3q0.jpg'
                        className='mb-2'
                    >
                    </img>
                    <div className='p-1'>
                        <h2>Super Blog Article</h2>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        </p>
                    </div>
                </div>

                <div className='card-blog mt-3 shadow'>
                    <img
                        alt='office-pexels'
                        src='https://i.imgur.com/bg42EQj.jpg'
                        className='mb-2'
                    >
                    </img>
                    <div className='p-1'>
                        <h2>Super Blog Article</h2>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        </p>
                    </div>
                </div>

                <div className='card-blog mt-3 shadow'>
                    <img
                        alt='food-pexels'
                        src='https://i.imgur.com/p3mVVcf.jpg'
                        className='mb-2'
                    >
                    </img>
                    <div className='p-1'>
                        <h2>Super Blog Article</h2>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BlogComponent;