import React, { useEffect, useState } from 'react';
import BrandingShowCasesComponent from './brandingShowCases';
import IlustrationShowCasesComponent from './ilustrationShowCases';
import ProjectsShowCasesComponent from './projectsShowCases';


const GridShowCasesComponent = ({ current }) => {

    const [images, setImages] = useState({
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        img6: '',
    });
    const { img1, img2, img3, img4, img5, img6 } = images;

    useEffect(() => {
        switch (current) {
            case 'projects':
                setImages({
                    img1: 'https://i.imgur.com/1KpMDGn.jpg',
                    img2: 'https://i.imgur.com/GBZwSSj.jpg',
                    img3: 'https://i.imgur.com/74M3TwB.jpg',
                    img4: 'https://i.imgur.com/DgAf82Q.jpg',
                    img5: 'https://i.imgur.com/bm3xZnI.png',
                    img6: 'https://i.imgur.com/ZI69GMx.jpg'
                });
                break;
            case 'branding':
                setImages({
                    img1: 'https://i.imgur.com/ghvq4F3.jpg',
                    img2: 'https://i.imgur.com/3CGUs9Z.jpg',
                    img3: 'https://i.imgur.com/CaoWFkJ.png',
                    img4: 'https://i.imgur.com/14l51Xr.png',
                    img5: 'https://i.imgur.com/jIlha12.jpg',
                    img6: 'https://i.imgur.com/HEONWfh.png'
                });
                break;
            case 'ilustration':
                setImages({
                    img1: 'https://i.imgur.com/BYk0Yh5.png',
                    img2: 'https://i.imgur.com/wU0RZb1.jpg',
                    img3: 'https://i.imgur.com/tI3XZjQ.jpg',
                    img4: 'https://i.imgur.com/jzhbQk3.jpg',
                    img5: 'https://i.imgur.com/potBjUf.jpg',
                    img6: 'https://i.imgur.com/dUdcaz3.jpg'
                });
                break;
            default: 
            break;
        }
    }, [current]);

    if (current === 'projects') {
        return (
            <ProjectsShowCasesComponent
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
            />
        );
    } else if (current === 'branding') {
        return (
            <BrandingShowCasesComponent
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
            />
        );
    } else if (current === 'ilustration') {
        return (
            <IlustrationShowCasesComponent
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
            />
        )
    } else {
        return (
                <ProjectsShowCasesComponent
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    img4={img4}
                    img5={img5}
                    img6={img6}
                />
        );
    }

}

export default GridShowCasesComponent;