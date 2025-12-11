import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePasswordReset = async () => {
    setMessage('');
    setError('');
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);

      setMessage('비밀번호 재설정 이메일을 보냈습니다. 받은 편지함을 확인해 주세요.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // 3. 에러 처리
      if (err.code === 'auth/user-not-found') {
        setError('등록되지 않은 이메일입니다.');
      } else if (err.code === 'auth/invalid-email') {
        setError('유효하지 않은 이메일 형식입니다.');
      } else {
        setError('에러가 발생했습니다: ' + err.message);
      }
    }
  };

  return (
    <div>
      <h4>비밀번호 찾기</h4>
      <input
        type="email"
        value={email}
        placeholder="가입한 이메일 주소"
        required
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>재설정 이메일 받기</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
export default ResetPassword;
