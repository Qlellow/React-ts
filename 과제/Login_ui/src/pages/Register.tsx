import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    nickname: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="card w-96 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 p-8 transition-all hover:shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">회원가입</h2>

      <form className="space-y-5">
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="nickname"
          placeholder="닉네임"
          value={form.nickname}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="btn w-full bg-linear-to-r from-green-500 to-emerald-500 text-white border-none hover:from-green-600 hover:to-emerald-600 transition-all">
          가입하기
        </button>
      </form>
    </div>
  )
}
