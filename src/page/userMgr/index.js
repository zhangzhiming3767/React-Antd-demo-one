import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    Row,
    Col,
    Form,
    Input,
} from 'antd';
import TabbleOne from './demo1'
const FormItem = Form.Item

export default class TabbleAll extends React.Component {
    constructor(props) {
        super(props)
    }

    //查人员列表
    getUserList = () => {

    }

    //查询表单
    renderForm = () => {
        const { form } = this.props;
        return (
            <React.Fragment>
                <Form>
                    <Row >
                        <Col md={8}>
                            <FormItem label="用户名">
                                {form.getFieldDecorator('userName')(<Input placeholder="请输入" />)}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div style={{ width: '800px', margin: 'auto', marginTop: 50 }}>
                <TabbleOne />
                <hr />

            </div>
        )
    }
}