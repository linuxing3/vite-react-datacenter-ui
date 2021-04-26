import React from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';

const OrderList = ({ fetch, list }) => {
  const queryOption = {
    current: 0,
    pageSize: 5
  };
  
const columns = [
  {
    title: '会员姓名',
    dataIndex: 'member_username',
    key: 'member_username',
  },
  {
    title: '接受者姓名',
    dataIndex: 'receiver_name',
    key: 'receiver_name',
  },
  {
    title: '接受者城市',
    dataIndex: 'receiver_city',
    key: 'receiver_city',
  }
]

  const listEl = list ? (
    <Table columns={columns} dataSource={list}></Table>
  ): null;

  return (
    <h1>
      <p>订单~</p>
      <Button type='primary' onClick={() => fetch(queryOption)}>
        获取订单
      </Button>
      {listEl}
    </h1>
  );
};

function ms(state) {
  return state.order;
}

function mp(dispatch) {
  return {
    fetch(option) {
      dispatch({ type: 'order/fetch', payload: option });
    }
  };
}
export default connect(ms, mp)(OrderList);
