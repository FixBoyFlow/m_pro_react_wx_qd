import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Switch, Route } from 'react-router-dom';
import LeftMenu from '../../components/LeftMenu';
import User from './User';
import './index.less';

const { Header, Content, Sider } = Layout;

export default class Home extends React.Component {
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <LeftMenu />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                backgroundColor: '#fff'
                            }}
                        >
                            <Switch>
                                <Route path='/home/user' component={User} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}