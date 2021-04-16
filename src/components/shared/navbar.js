import React from 'react';
import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <div>
            <div className="site-page-header-ghost-wrapper header">
                <PageHeader
                    title={<img alt='circle-logo-png.png' className='logo' src='https://i.imgur.com/Ym92Bbq.png'></img>}
                    subTitle="Display None Studio"
                    extra={[

                        <Link to='/#work' key='1'>
                            <Button >Work</Button>
                        </Link>,
                        <Link to='/#about' key='2'>
                            <Button >About</Button>
                        </Link>,
                        <Link to='/#blog' key='3'>
                            <Button >Blog</Button>
                        </Link>,
                        <Link to='/#contact' key='4'>
                        <Button > Contact</Button>
                        </Link>
                    ]}
                >
                </PageHeader>
            </div>
        </div>
    );
}

export default NavbarComponent;