import React from "react";
import { Link } from "dva/router";
import { getOrderList } from "@s/order";

export default function OrderList() {

  let data: any[];
  getOrderList({
    current: 0,
    pageSize: 5
  }, "POST").then(value => {
    console.log(value.data);
    data = data;
  });

  return (
    <h1>
      <p>Order~</p>
      <p>
        欢迎 <Link to='/'>Home</Link>
      </p>
      <p>
        欢迎 <Link to='/user'>User</Link>
      </p>
    </h1>
  );
}
