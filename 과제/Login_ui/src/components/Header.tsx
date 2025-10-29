type Props = {
  user: string | null
  onLoginClick: () => void
  onSignupClick: () => void
  onLogout: () => void
}

export default function Header({ user, onLoginClick, onSignupClick, onLogout }: Props) {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
      <h1 className="text-2xl font-bold">게시판</h1>
      <div>
        {!user ? (
          <div className="space-x-4">
            <button
              onClick={onLoginClick}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
              로그인
            </button>
            <button
              onClick={onSignupClick}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
              회원가입
            </button>
          </div>
        ) : (
          <button
            onClick={onLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
            로그아웃
          </button>
        )}
      </div>
    </div>
  )
}
