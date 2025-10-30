export default function PostList() {
  const posts = [
    { id: 1, title: '첫 번째 게시글' },
    { id: 2, title: '두 번째 게시글' },
    { id: 3, title: '세 번째 게시글' },
  ]

  return (
    <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">게시글 목록</h2>
      <ul className="divide-y">
        {posts.map(p => (
          <li key={p.id} className="py-3">
            <p className="font-semibold">{p.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
