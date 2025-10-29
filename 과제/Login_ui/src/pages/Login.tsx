import { useState } from 'react'

// mock 데이터
const mockUsers = [
  { username: 'test', password: '1234' },
  { username: 'admin', password: 'admin' },
]

type Props = {
  onLogin: (username: string) => void
}

export default function Login({ onLogin }: Props) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const user = mockUsers.find(
      u => u.username === form.username && u.password === form.password
    )

    if (user) {
      onLogin(user.username)
      alert(`로그인 성공! 환영합니다, ${user.username}님.`)
    } else {
      alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.')
    }
  }

  return (
    <div className="card w-96 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 p-8 transition-all hover:shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">로그인</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="btn w-full bg-linear-to-r from-blue-500 to-indigo-500 text-white border-none hover:from-blue-600 hover:to-indigo-600 transition-all">
          로그인하기
        </button>
      </form>
    </div>
  )
}
