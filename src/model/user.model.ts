/** Created by guangqiang on 2017/12/17. */

import * as userService from '@s/user'
import { UserInfo } from '@/utills/api/types'

export default {
  namespace: 'user',
  state: {
    userInfo: {
      auid:          0,
      uid:           0,
      beid:          0,
      ptyid:         0,
      username:      '',
      mobile:        '',
      nickname:      '',
      openid:        '',
      avator:        '',
      access_token:  '',
      access_expire: 0,
      refresh_after: 0
    }
  },
  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, ...data }
    }
  },
  effects: {
    *login({ payload: value }, { call, put, select }) {
      // 模拟网络请求
      console.log("Login...")
      const userResp = yield call(userService.loginUser, value, 'POST')
      console.log(userResp)
      // let userInfo: UserInfo = yield select(state => state.data)
      yield put({ type: 'save', payload: { data: userResp.data }})
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  }
}