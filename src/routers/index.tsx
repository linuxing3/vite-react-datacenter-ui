import React from 'react';
import { Route, Switch, routerRedux, Redirect } from 'dva/router';
import { Layout, Menu } from 'antd';
import { RouteComponentProps } from 'dva/router';
import { SubscriptionAPI } from 'dva';

import Home from './home';
import Order from './order';
import User from './user';
import Github from './github';
import Login from './login';

interface Props extends RouteComponentProps {}

const { ConnectedRouter } = routerRedux;
const { Header, Content, Footer } = Layout;

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let token = localStorage.getItem('access_token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const App = (props: Props & SubscriptionAPI) => {
  const routes = (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path='/home' render={() => <Home />}></Route>
        <Route path='/login' render={() => <Login />}></Route>
        <PrivateRoute path='/user'>
          <User />
        </PrivateRoute>
        <PrivateRoute path='/order'>
          <Order />
        </PrivateRoute>
        <PrivateRoute path='/github'>
          <Github />
        </PrivateRoute>
        <Route path='/' render={() => <Home />}></Route>
      </Switch>
    </ConnectedRouter>
  );

  return (
    <Layout>
      <Layout>
        <Header
          className='header'
          style={{ position: 'fixed', zIndex: 1, width: '100%' }}
        >
          <div className='logo' />
          <Menu theme='dark' mode='horizontal'>
            <Menu.Item key='1'>
              <a href='/home'>主页</a>
            </Menu.Item>
            <Menu.Item key='2'>
              <a href='/login'>登录</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ padding: '0 50px' }}>
          <Content style={{ padding: '0 50px', marginTop: 64, overflow: 'initial', alignItems: 'center' }}>
            {routes}
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Vite Datacenter ©2021 Created by linuxing3
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
