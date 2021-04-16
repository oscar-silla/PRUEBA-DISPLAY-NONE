import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import GridShowCasesComponent from './showcases/gridShowCases';

const ShowCaseComponent = () => {

    const [state, setState] = useState({ current: 'projects' });
    const { current } = state;

    const handleClick = e => {
        setState({ current: e.key });
    };

    return (
        <div id='#work'>
            <div className='showcase'>
                <h1>WORK SHOWCASE</h1>
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="projects" icon={<MailOutlined />}>
                        Projects
                    </Menu.Item>
                    <Menu.Item key="branding" icon={<AppstoreOutlined />}>
                        Branding
                    </Menu.Item>
                    <Menu.Item key='ilustration'>
                        Ilustration
                    </Menu.Item>
                </Menu>
                <div>
                    <GridShowCasesComponent current={current}></GridShowCasesComponent>
                </div>
            </div>
        </div>
    )
}

export default ShowCaseComponent;