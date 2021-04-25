import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Button } from 'antd';

const User = ({ login, mobile }) => {
  const loginInfo = {
    type: 1,
    password: '20090909',
    mobile: '13901229638'
  };
  return (
    <h1>
      <p>User~</p>
      <p>Mobile:{mobile ? mobile : '---'}</p>
      <Button type="primary" onClick={() => login(loginInfo)}>Login</Button>
      <p>
        欢迎 <Link to='/'>Home</Link>
      </p>
      <p>
        欢迎 <Link to='/order'>Order List</Link>
      </p>
    </h1>
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
export default connect(ms, mp)(User);
