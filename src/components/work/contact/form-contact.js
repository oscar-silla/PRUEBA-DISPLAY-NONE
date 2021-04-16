import React, { useState } from 'react'
import { Form, Input, Button, Modal } from 'antd';
import { CheckCircleTwoTone  } from '@ant-design/icons';

const layout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 1 },
};


const FormContactComponent = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        console.log('hola')
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        showModal();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <label>*Username:</label>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <label>*Email:</label>
                <Form.Item
                    name="password"
                    rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <label>*Message:</label>
                <Form.Item
                    name={['user', 'introduction']}
                    rules={[{ required: true, message: 'Please input a message!' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Modal title="Info Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={
                <Button type='primary' onClick={handleOk}>
                    Ok
                </Button>
            }>
                <h2>
                    The message has been sent! <CheckCircleTwoTone twoToneColor="#52c41a" />
                </h2>
            </Modal>
        </div>
    );
}

export default FormContactComponent;
