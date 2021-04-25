import React from "react";
import dva from "dva";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import App from "./routers";
import model from "./model";
import "./assets/init/normalize.css";
import "./assets/less/index.less";
import { createHashHistory } from "history";

//@ts-ignore
let test = dva.default || dva;
const app = test({
  history: createHashHistory(),
});


app.use({})

app.model(model);

app.router((obj: any) => (
  <ConfigProvider locale={zhCN}>
    <App
      history={obj.history}
      match={obj.match}
      location={obj.location}
      getState={obj.app._store.getState}
      dispatch={obj.app._store.dispatch}
    />
  </ConfigProvider>
));

app.start("#root");
