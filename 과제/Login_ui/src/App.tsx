import { useState } from 'react'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import PostList from './pages/PostList'

export default function App() {
  const [user, setUser] = useState<string | null>(null)
  const [view, setView] = useState<'none' | 'login' | 'register'>('none')

  const handleLogin = (name: string) => {
    setUser(name)
    setView('none')
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('username')
    setUser('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-white via-gray-100 to-gray-200">
      <Header
        user={user}
        onLoginClick={() => setView('login')}
        onRegisterClick={() => setView('register')}
        onLogout={handleLogout}
      />

      <main className="flex justify-center items-start mt-24">
        {!user && view === 'login' && <Login onLogin={handleLogin} />}
        {!user && view === 'register' && <Register />}
        {!user && view === 'none' && (
          <div className="text-gray-400 text-lg italic">Select an option above.</div>
        )}
        {user && <PostList />}
      </main>
    </div>
  )
}
