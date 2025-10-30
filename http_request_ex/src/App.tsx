import { useState, useEffect } from 'react'
import './App.css'

import Main from './components/Main';
import {LoginForm} from './components/LoginForm';
import {RegisterForm} from './components/RegisterForm';

function App() {
  const [screen, setScreen] = useState<string>("main");
  const [username, setUsername] = useState("");

  useEffect(()=>{
    const storedUsername = localStorage.getItem('username');
    if(storedUsername) setUsername(storedUsername)
    else setUsername('');
  }, []);

  const handleCancel = ()=>{setScreen("main");}
  const handleLogin = (username:string)=>{ setUsername(username); }
  const handleLogout = ()=>{
    localStorage.clear();
    setUsername('');
  }

  return (
    <div className='flex flex-col p-4'>
      <nav className='m-3'>
        <ul className='flex gap-x-4'>
          <li onClick={()=> setScreen("main")}>Home</li>
          {username == ''?
            <>
              <li onClick={()=> setScreen("register")}>회원가입</li>
              <li onClick={()=> setScreen("login")}>로그인</li>
            </>
          :
            <li onClick={handleLogout}>{username}님 로그아웃</li>
          }

          <li></li>
        </ul>
      </nav>
    {screen == 'main'?
      <Main username={username}/>
    :null}
    {screen == 'register'?
      <RegisterForm handleCancel={handleCancel}/>
    :null}
    {screen == 'login'?
      <LoginForm handleCancel={handleCancel} handleLogin={handleLogin}/>
    :null}
    </div>
  )
}

export default App
