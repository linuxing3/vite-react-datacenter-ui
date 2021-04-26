import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button, Card, Layout, Divider  } from 'antd';

const User = ({ logout, mobile }) => {
  const loginInfo = {
    type: 1,
    password: '20090909',
    mobile: '13901229638'
  };
  return (
    <Layout>
      <h1 style={{textAlign: 'center'}}>User~</h1>
      <Card>
        <Button>
          <Link to='/order'>订单列表</Link>
        </Button>
        <Button>
          <Link to='/github'>GitHub仓库</Link>
        </Button>
        <Divider />
        <Layout style={{ alignItems: 'center'}}>
          <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Card.Meta title="" description={mobile ? 'Mobile: ' + mobile : 'Mobile: ---'}></Card.Meta>
            <br></br>
            <Button onClick={() => logout(loginInfo)}>Logout</Button> 
          </Card>
        </Layout>
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
    },
    logout(loginInfo) {
      dispatch({ type: 'user/logout', payload: loginInfo });
    }
  };
}

export default connect(ms, mp)(User);
