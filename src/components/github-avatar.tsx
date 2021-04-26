import React from 'react';
import { getUserInfo, auth, urqlClient, APP_ID } from '@s/github';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Provider } from 'urql';


function GithubAvatar({ username }) {
  const [{ data, fetching, error }, reexecuteQuery] = getUserInfo(username);
  
  const needsLoginService = auth.findMissingAuthServices(error)[0];

  if (fetching)
    return (
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    );

  const dataEl = data ? (
    <Avatar src={data.Github.user.AvatarUrl} />
  ) : (
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  );

  return (
    <div
      onClick={async () => {
        if (!needsLoginService) {
          reexecuteQuery({ requestPolicy: 'cache-and-network' });
        } else {
          await auth.login(needsLoginService);
          const loginSuccess = await auth.isLoggedIn(needsLoginService);
          if (loginSuccess) {
            console.log('Successfully logged into ' + needsLoginService);
            reexecuteQuery({ requestPolicy: 'cache-and-network' });
          } else {
            console.log('The user did not grant auth to ' + needsLoginService);
          }
        }
      }}
    >
      {dataEl}
    </div>
  );
}

export default function GithubUserAvatar() {
  return (
    <Provider value={urqlClient}>
      <GithubAvatar username={'linuxing3'} />
    </Provider>
  );
}
