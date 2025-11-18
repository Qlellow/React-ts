import { useState } from 'react'

import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import PostList from './pages/PostList'

export default function App() {
  const [username, setUsername] = useState('')
  const [view, setView] = useState<'main' | 'login' | 'register'>('main')

  const handleLogin = (name: string) => {
    setUsername(name)
    setView('main')
  }

  const handleLogout = () => {
    localStorage.clear()
    setUsername('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-white via-gray-100 to-gray-200">
      <Header
        user={username}
        onLoginClick={() => setView('login')}
        onRegisterClick={() => setView('register')}
        onLogout={handleLogout}
      />

      <main className="flex justify-center items-start mt-24">
        {!username && view === 'login' && <Login onLogin={handleLogin} />}
        {!username && view === 'register' && <Register setView={setView} />}
        {!username && view === 'main' ? (
          <div className="text-gray-400 text-lg italic">Select an option above.</div>
        ) : (
          username && <PostList username={username} />
        )}
      </main>
    </div>
  )
}
