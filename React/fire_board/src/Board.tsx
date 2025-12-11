import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp, // createdAt 필드의 타입
} from 'firebase/firestore';
import { type User } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

import { db, auth } from './firebase';

interface Post {
  id: string;
  text: string;
  userId: string;
  createdAt?: Timestamp; // Firestore의 Timestamp 타입
}

interface BoardProps {
  user: User; // App로부터 User 객체를 받음
}

const Board = ({ user }: BoardProps) => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<string>('');

  useEffect(() => {
    const postsCollection = collection(db, 'posts');
    const q = query(postsCollection, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      const postsData = snapshot.docs.map(
        doc =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Post)
      );
      setPosts(postsData);
    });
    return () => unsubscribe();
  }, []);

  const handleAddPost = async () => {
    if (newPost.trim() === '') return;

    try {
      await addDoc(collection(db, 'posts'), {
        text: newPost,
        createdAt: serverTimestamp(),
        userId: user.uid,
      });
      setNewPost('');
    } catch (err) {
      if (err instanceof Error) {
        console.error('실패:', err);
      }
    }
  };

  const handleDeletePost = async (postId: string, userId: string) => {
    if (user.uid !== userId) {
      alert('본인이 작성한 글만 삭제할 수 있습니다.');
      return;
    }

    try {
      await deleteDoc(doc(db, 'posts', postId));
    } catch (err) {
      if (err instanceof Error) {
        console.error('실패:', err);
      }
    }
  };

  return (
    <div>
      <div>
        {t('greeting', { email: user.email })}
        <button onClick={() => auth.signOut()}>{t('logout')}</button>
      </div>
      <h4>새 글 작성</h4>
      <input
        type="text"
        value={newPost}
        placeholder="내용을 입력하세요"
        onChange={e => setNewPost(e.target.value)}
      />
      <button onClick={handleAddPost}>등록</button>
      <hr />
      <h4>게시글 목록</h4>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.text}
            (작성시간: {post.createdAt?.toDate().toLocaleString()})
            {user.uid === post.userId && (
              <button onClick={() => handleDeletePost(post.id, post.userId)}>삭제</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Board;
