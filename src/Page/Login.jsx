import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useLoginMutation } from '../app/fetchers/auth/authApi';
import jwtDecodedUtils from '../utils/JwtDecode';
import { useDispatch } from 'react-redux';
import { setUsers } from '../app/fetchers/auth/authSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';

const Login = () => {
  const [error, setError] = useState('');
  const [loginData,{isLoading}]=useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
 const from = location.state?.from || '/';

  const onFinish = async(values) => {
    try{
      const res = await loginData(values).unwrap()
      if(res.success){
        const user = jwtDecodedUtils(res?.data?.token) 
        dispatch(setUsers({user:user,token:res?.data?.token}))
        navigate('/profile')
        navigate(from, { replace: true });
        toast.success(res?.message)
      }else{
        console.log(res)
      }
    }catch(error){
      console.log(error?.data?.message)
      toast.error(error?.data?.message) 
    }
    setError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <Form
        layout='vertical'
          name="login"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" className="w-full" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="w-full" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              {isLoading ? "Loading ..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
        <div className='my-4'>If you have no account please <Link to="/register">Register</Link> </div>
      </div>
    <Toaster richColors position="bottom-right" />
    </div>
  );
};

export default Login;
