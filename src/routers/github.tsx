/*
  Add these to your `package.json`:
    "urql": "1.10.1",
    "graphql": "15.3.0",
    "onegraph-subscription-client": "2.2.3",
    "onegraph-auth": "3.0.0"
*/

import React from 'react';
import { Table, Button, Typography } from 'antd';
import { getRespositories, auth, urqlClient, APP_ID } from '@s/github';
import { Provider } from 'urql'

const { Text, Link } = Typography;

const GithubRepoQuery = ({ username }) => {
  const [{ data, fetching, error }, reexecuteQuery] = getRespositories(
    username
  );

  if (fetching) return <pre>Loading...</pre>;

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <Text type="success">{text}</Text>,
    },
    {
      title: '项目地址',
      dataIndex: 'url',
      key: 'url',
      render: text => <Link href={text}>{text}</Link>,
    },
  ]

  const dataEl = data ? (
    <Table columns={columns} dataSource={data}></Table>
  ): null;

  const errorEl = error ? (
    <div className='error-box'>
      Error in UnnamedQuery. <br />
      {error.message && error.message.startsWith('[Network]') ? (
        <span>
          Make sure <strong>{window.location.origin}</strong> is in your CORS
          origins on the{' '}
          <a
            href={`https://www.onegraph.com/dashboard/app/${APP_ID}?add-cors-origin=${window.location.origin}`}
          >
            OneGraph dashboard for your app
          </a>
          .
        </span>
      ) : null}
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  ) : null;

  const needsLoginService = auth.findMissingAuthServices(error)[0];

  return (
    <div>
      {dataEl}
      {errorEl}
      <br />
      <Button
        type='primary'
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
              console.log(
                'The user did not grant auth to ' + needsLoginService
              );
            }
          }
        }}
      >
        {needsLoginService
          ? `Log in to ${needsLoginService}`
          : 'Run query: UnnamedQuery'}
      </Button>
    </div>
  );
};

export default function GithubRepoList() {
  return (
    <Provider value={urqlClient}>
      <GithubRepoQuery username={'linuxing3'} />
    </Provider>
  );
}
