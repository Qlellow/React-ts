import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { useState } from "react";

import { type RegisterUserDto } from "../api/dto";
import client from "../api/client";
import type { AxiosError } from "axios";

type DivProps = DetailedHTMLProps<
HTMLAttributes<HTMLDivElement>,
HTMLDivElement
>
export type RegisterFormProps = DivProps & {
  handleCancel:()=>void
}

export const RegisterForm:FC<RegisterFormProps> = ({handleCancel})=>{
  const [user, setUser] = useState<RegisterUserDto>({
    username:'',
    nickname:'',
    password:'',
    email:''
  });

  const sendRequest = async()=>{
    if(user.username == '' || user.nickname == '' || user.password == '' || user.email == '')
      return;

    try{
      const response = await client.post<RegisterUserDto>('/auth/register', user);
      console.log(response.data);
      alert(`${user.username}/${user.nickname} 으로 가입했습니다.`)
      // 메인 화면으로 돌아가기
      handleCancel();
    }catch(error){
      const axiosError = error as AxiosError;
      console.error(axiosError);
    }
  }
  return (
    <div>
      <input onChange={e=>setUser({...user, username:e.target.value})} placeholder="username"/>
      <input onChange={e=>setUser({...user, nickname:e.target.value})} placeholder="nickname"/>
      <input onChange={e=>setUser({...user, password:e.target.value})} placeholder="password" type="password"/>
      <input onChange={e=>setUser({...user, email:e.target.value})} placeholder="email"/>
      <button onClick={handleCancel}>취소</button>
      <button onClick={sendRequest}>회원가입</button>
    </div>
  )
}