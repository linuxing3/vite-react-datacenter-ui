import React from 'react';
import { Link } from 'dva/router'

export default  function App() {
  return (
    <h1>
      <p>Home~</p>
      <p>
        欢迎 <Link to='/user'>login User</Link>
      </p>
      <p>
        欢迎 <Link to='/order'>Order List</Link>
      </p>
    </h1>
  );
}
