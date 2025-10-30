//
//

//
//
//
//
//
//
//
//
//
//
//
//
//

import { useState } from 'react'

import client from '../api/client'
import { AxiosError } from 'axios'
import type { LoginDto, LoginResponseDto, Response } from '../api/dto'

type Props = {
  onLogin: (username: string) => void
}

export default function Login({ onLogin }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    if (username == '' || password == '') return
    try {
      const loginDto: LoginDto = { username, password }
      const response = await client.post('/auth/login', loginDto)
      const responseData = response.data as Response<LoginResponseDto>
      if (responseData.data) {
        localStorage.setItem('accessToken', responseData.data.accessToken)
        localStorage.setItem('username', username)
        onLogin(username)
        alert(`${username}님, 환영합니다!`)
      }
    } catch (error) {
      alert(`${username}님, 로그인에 실패했습니다. 나중에 다시 시도해주세요.`)
      const axiosError = error as AxiosError
      console.error(axiosError)
    }
  }

  return (
    <div className="card w-96 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 p-8 transition-all hover:shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">로그인</h2>

      <div className="space-y-5">
        <input
          name="username"
          placeholder="아이디"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={login}
          className="btn w-full bg-linear-to-r from-blue-500 to-indigo-500 text-white border-none hover:from-blue-600 hover:to-indigo-600 transition-all">
          로그인하기
        </button>
      </div>
    </div>
  )
}
