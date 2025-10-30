import { useState } from 'react'
import { AxiosError } from 'axios'

import client from '../api/client'
import type { RegisterUserDto } from '../api/dto'

type Props = {
  setView: (view: 'login' | 'register' | 'none') => void
}

export default function Register({ setView }: Props) {
  const [user, setUser] = useState({
    username: '',
    password: '',
    nickname: '',
    email: '',
  })

  const register = async () => {
    // prettier-ignore
    if (user.username == '' || user.password == '' || user.nickname == '' || user.email == '') return

    try {
      const response = await client.post<RegisterUserDto>('/auth/register', user)
      console.log(response.data)
      alert(`${user.username}님, 회원가입이 완료되었습니다! 로그인 해주세요.`)
      setView('login')
    } catch (error) {
      alert(`${user.username}님, 회원가입에 실패했습니다. 나중에 다시 시도해주세요.`)
      const axiosError = error as AxiosError
      console.error(axiosError)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className="card w-96 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 p-8 transition-all hover:shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">회원가입</h2>

      <div className="space-y-5">
        <input
          name="username"
          placeholder="아이디"
          value={user.username}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={user.password}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="nickname"
          placeholder="닉네임"
          value={user.nickname}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={user.email}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={register}
          className="btn w-full bg-linear-to-r from-green-500 to-emerald-500 text-white border-none hover:from-green-600 hover:to-emerald-600 transition-all">
          가입하기
        </button>
      </div>
    </div>
  )
}
