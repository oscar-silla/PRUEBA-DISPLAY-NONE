import React from 'react';

const ProjectsShowCasesComponent = ({ img1, img2, img3, img4, img5, img6 }) => {
    return (
        <div className='flex-center mt-3 fadeIn'>
            <div className='flex-grid'>
                <div className='mt-3 width-img-brand'>
                    <div className='zoom shadow'>
                        <img className='img1'
                            alt='pedacitos-de-limon'
                            src={img1}>
                        </img>
                    </div>
                    <div className='zoom shadow mt-3'>
                        <img className='img2  shadow'
                            alt='cinemacar'
                            src={img2}>
                        </img>
                    </div>
                </div>
                <div className='width-img-brand mt-3 ml-3 mr-3'>
                    <div className='zoom shadow'>
                        <img className='img3'
                            alt='bar-congo-valencia'
                            src={img3}>
                        </img>
                    </div>
                    <div className='zoom mt-3 shadow'>
                        <img className='img4'
                            alt='volteteta-bali-restaurant'
                            src={img4}
                        >
                        </img>
                    </div>
                </div>
                <div className='mt-3 width-img-brand'>
                    <div className='zoom shadow'>
                        <img className='img5'
                            alt='aperitivos-tosfrit'
                            src={img5}>
                        </img>
                    </div>
                    <div className='zoom mt-3 shadow'>
                        <img className='img6 shadow'
                            alt='decotec'
                            src={img6}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsShowCasesComponent;
