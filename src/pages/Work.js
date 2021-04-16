import React from 'react'
import AboutUsComponent from '../components/work/about-us'
import BlogComponent from '../components/work/blog'
import BrandComponent from '../components/work/brand'
import ContactUsComponent from '../components/work/contact-us'
import PresentationComponent from '../components/work/presentation'
import ShowCaseComponent from '../components/work/showcase'

const WorkPageComponent = () => {

    return (
        <div>
            <PresentationComponent />
            <ShowCaseComponent />
            <BrandComponent />
            <AboutUsComponent />
            <BlogComponent />
            <ContactUsComponent />
        </div>
    );
}

export default WorkPageComponent;
