import React from 'react';
import { Card, Layout } from 'antd';
import LoginForm from '@c/login-form';
import { connect } from 'dva';

const Login = ({login}) => {

  return (
    <Layout style={{alignItems: 'center'}}>
      <h1 style={{textAlign: 'center'}}>Login~</h1>
      <Card style={{width: 400}}>
        <LoginForm login={login}/>
      </Card>
    </Layout>
  );
};

function ms(state) {
  return state.user;
}

function mp(dispatch) {
  return {
    login(loginInfo) {
      dispatch({ type: 'user/login', payload: loginInfo });
    }
  };
}

export default connect(ms, mp)(Login);
