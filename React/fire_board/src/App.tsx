import { useState, useEffect } from 'react';
import { auth } from './firebase'; // 로컬 설정파일에서 auth 가져오기
import { onAuthStateChanged, type User } from 'firebase/auth';

import './App.css';

function App() {
  const [user, setUser] = useState<User | null>(null); // 사용자 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

  useEffect(() => {
    // onAuthStateChanged: auth 상태 구독, 상태가 바뀌면 호출된다.(로그인, 로그아웃)
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser); // 사용자가 있으면 user 객체, 없으면 null
      setLoading(false); // 로딩 완료
    });
    // unmount될 때 데이터 감지를 멈춤
    return () => unsubscribe();
  });

  if (loading) {
    return <div>Loading...</div>; // 로딩 중
  }

  return (
    <div className="App">
      {!user ? <div>로그인 컴포넌트</div> : <div>게시글 목록 컴포넌트</div>}
    </div>
  );
}

export default App;
