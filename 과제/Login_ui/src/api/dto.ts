export type Response<T> = {
  success: boolean | null
  message: string | null
  data: T | null
}

export type registerUserDto = {
  username: string
  nickname: string
  password: string
  email: string
}

export type LoginDto = {
  username: string
  password: string
}

export type LoginResponseDto = {
  accessToken: string
  refreshToken: string
}

export type PostListItemDto = {
  title: string
}

export type PostDto = {
  title: string
  body: string
}
