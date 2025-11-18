import { useState, useEffect } from 'react'
import { AxiosError } from 'axios'

import client from '../api/client'
import type { Response, PostListItemDto } from '../api/dto'

type PostListProps = {
  username: string
}

export default function PostList({ username }: PostListProps) {
  const [posts, setPosts] = useState<PostListItemDto[]>([])

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await client.get('/post')
        const responseData = response.data as Response<{ content: PostListItemDto[] }>
        const content = responseData.data?.content
        if (content) setPosts(content)
      } catch (error) {
        const axiosError = error as AxiosError
        console.error(axiosError)
      }
    }
    if (username) sendRequest()
    else setPosts([])
  }, [username])

  return (
    <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">게시글 목록</h2>
      <ul className="divide-y">
        {posts.map(p => (
          <li key={p.id} className="py-3">
            <p className="font-semibold">{p.title}</p>
            <p className="text-sm text-gray-500">
              작성자: {p.username} | 조회수: {p.view}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
