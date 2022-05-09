import { useRouter } from "next/router";
import { useCallback } from "react";
import { Post as PostContentProps} from '../services/content'

interface PostProps {
  post: PostContentProps
}

export function PostCard({post}: PostProps) {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    router.push(`/post/${post.sys.id}`);
  }, [])

  return (
    <div className="w-[20rem]" onClick={handlePostClick}>
      <img src={post.fields.thumbnail.fields.file.url} alt="Post thumbnail" className="w-full h-48 mb-[1.50rem] object-cover rounded-[1rem] cursor-pointer hover:opacity-90"/>
      <h3 className="font-bold mb-[0.6rem] text-2xl">{post.fields.title}</h3>
      <span className="text-lg">{post.fields.description}</span>
    </div>
  )
}