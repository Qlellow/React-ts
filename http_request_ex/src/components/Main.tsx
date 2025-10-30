import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

import client from "../api/client"
import { useEffect, useState } from "react"
import type { Response, PostListItemDto } from "../api/dto"
import type { AxiosError } from "axios";

type DivProps = DetailedHTMLProps<
HTMLAttributes<HTMLDivElement>,
HTMLDivElement
>
export type MainProps = DivProps & {
  username:string
}

const Main:FC<MainProps> = ({username, ...props})=>{
  const [posts, setPosts] = useState<PostListItemDto[]>([]);

  useEffect(()=>{
    const sendRequest = async()=>{
      try{
        const response = await client.get('/post');
        const responseData = response.data as Response<PostListItemDto[]>
        if(responseData.data)
          setPosts(responseData.data)
      }catch(error){
        const axiosError = error as AxiosError;
        console.error(axiosError);
      }
    }
    if(username)
      sendRequest();
    else
      setPosts([]);
  }, [username])
  return (
    <div {...props}>
      {posts.map((p, i)=>(
        <p key={i}>{p.title}</p>
      ))}
    </div>
  )
}

export default Main;