import './App.css';
import React, { ReactNode, useEffect } from 'react'
import LoginAPI from './api/login/login'

interface User {
  username: string,
  password: string
}

const App = () => {

  async function login(body: object): Promise<any> {
    console.log("发起登录")
    const res = await LoginAPI.login(body)
    console.log("登录结果", res)
  }

  async function profile(): Promise<any> {
    // for (let i = 0; i < 5; i++) { // 一次性发五次
    const res = await LoginAPI.profile()
    console.log(res)
    // }
  }

  const user: User = {
    username: "xhf",
    password: "132456"
  }
  return (
    <div>
      <span >我是登录页面,长token默认设置时间为10分钟,短token设置为10秒钟,十秒后,自动取长token去换新的短token</span><br />
      <button onClick={() => login(user)}>登录</button>
      <button onClick={() => profile()}>受保护的接口</button>
    </div>
  )
}

export default App;