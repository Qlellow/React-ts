import type { AxiosError } from "axios";
import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { useState } from "react";
import client from "../api/client";
import type { LoginDto, LoginResponseDto, Response } from "../api/dto";

type DivProps = DetailedHTMLProps<
HTMLAttributes<HTMLDivElement>,
HTMLDivElement
>
export type LoginFormProps = DivProps & {
  handleCancel:()=>void,
  handleLogin:(username:string)=>void
}

export const LoginForm:FC<LoginFormProps> = ({handleCancel, handleLogin})=>{
  const [username, setUsernmae] = useState('');
  const [password, setPassword] = useState('');

  const login = async ()=>{
    if(username=='' || password=='')
      return;

    try{
      const loginDto:LoginDto = {username, password};
      const response = await client.post('/auth/login', loginDto);
      const responseData = response.data as Response<LoginResponseDto>
      if(responseData.data){
        localStorage.setItem('accessToken', responseData.data.accessToken);
        localStorage.setItem('username', username);
        handleLogin(username)
        handleCancel();
      }
    }catch(error){
      const axiosError = error as AxiosError;
      console.error(axiosError);
    }
  }
  return (
    <div>
      <input placeholder="username" onChange={e=>setUsernmae(e.target.value)}/>
      <input placeholder="password" type="password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={handleCancel}>취소</button>
      <button onClick={login}>로그인</button>
    </div>
  )
}