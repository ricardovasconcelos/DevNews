import Contentful, { createClient, Entry } from "contentful";
import { Document } from '@contentful/rich-text-types';

export type Post = Entry<{
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  thumbnail: Contentful.Asset;
  content: Document;
}>

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
})

export async function getPosts(): Promise<Contentful.Entry<Post>[]>{
 const { items } = await client.getEntries<Post>({
    content_type: "post",
  })

  return items
}

export async function getPost(postId: string): Promise<Contentful.Entry<Post>>{
  const post = await client.getEntry<Post>(postId)
 
   return post
 }