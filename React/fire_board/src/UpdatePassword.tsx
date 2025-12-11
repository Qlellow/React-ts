import { useState } from 'react';
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';

export default function UpdatePassword() {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChangePassword = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user || !user.email) {
      setMessage('로그인이 필요합니다.');
      return;
    }
    setMessage('');

    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      // 재인증
      await reauthenticateWithCredential(user, credential);
      // 재인증 성공 시 -> 비밀번호 업데이트 실행
      await updatePassword(user, newPassword);

      setMessage('비밀번호가 성공적으로 변경되었습니다.');
      setCurrentPassword('');
      setNewPassword('');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        setMessage('비밀번호가 일치하지 않습니다.');
      } else if (error.code === 'auth/requires-recent-login') {
        // 로그인 5분 경과
        setMessage('재로그인이 필요합니다.');
      } else {
        setMessage(`에러: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h4>비밀번호 변경</h4>
      <input
        type="password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
        placeholder="현재 비밀번호"
      />
      <br />
      <input
        type="password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        placeholder="새 비밀번호"
      />
      <br />
      <button onClick={handleChangePassword}>변경하기</button>
      {message && <p>{message}</p>}
    </div>
  );
}
