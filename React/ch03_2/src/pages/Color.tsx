export default function CopyMe() {
  return (
    <div className="p-4 bg-sky-700">
      <p className="w-full p-4 text-3xl, text-white">Color</p>
      <div className="mb-4">
        <p className="text-white">Email address</p>
        <input type="email" className="text-gray-900 border-sky-200 border-4" />
        <p className="text-rose-500">This field is required</p>
        <p className="text-[#ffabcd]">This field is required</p>
        <p className="text-my-color">This field is required</p>
      </div>
    </div>
  )
}
