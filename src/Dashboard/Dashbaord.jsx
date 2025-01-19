import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../app/fetchers/auth/authSlice';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: '02',
        label: <Link to="user-information">User Information</Link>,
    },
];

const Dashboard = () => {
    const dispatch = useDispatch()
    const logoutHandeler = ()=>{
        dispatch(logout())
    }
    return (
        <Layout className="h-screen">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <h2 className='text-2xl py-4 text-center text-white'>Dashboard</h2>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['01']} items={items} />
                <div  onClick={logoutHandeler} className='text-center font-bold text-white cursor-pointer animate-bounce mt-[60vh]'>Logout</div>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
