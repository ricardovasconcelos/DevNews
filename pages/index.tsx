import Head from "next/head";
import router from "next/router";
import { useCallback } from "react";
import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCast";
import { getPosts } from "../services/content";
import { Post as PostContentProps} from '../services/content'

interface PostProps {
  posts: PostContentProps[]
}

export default function Home({posts: originalPosts}: PostProps) {

  const [highlightPosts, ...posts] = originalPosts;

  const handleHighlightPostClick = useCallback(() => {
    router.push(`/post/${highlightPosts.sys.id}`);
  }, [])


  return (
    <div>
      <Head>
        <title>News | Devs News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-4/5 m-auto flex flex md:flex-nowrap flex-wrap-reverse bg-white mt-[-42px] rounded-tl-[1.875rem] min-h-[21.5rem] p-6 md:p-14 justify-around cursor-pointer" onClick={handleHighlightPostClick}>
        <div className="w-[38.75rem] max-h-80 md:pr-10">
          <h2 className="font-bold text-[#232323] text-2xl my-[0.625rem]">
           {highlightPosts.fields.title}
          </h2>
          <p className="text-lg">
            {highlightPosts.fields.description}
          </p>
        </div>
        <div className="w-[35.625rem] max-h-80">
          <img
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-[1.25rem] hover:opacity-90"
            src={highlightPosts.fields.thumbnail.fields.file.url}
          />
        </div>

      </div>
        <div className="max-w-[80%] m-auto flex gap-10 flex-wrap justify-center">
            {posts.map(post => (
              <PostCard key={post.sys.id} post={post}/>
            ))}
        </div>
    </div>
  );
}

Home.getLayout = function getLayout(pages) {
  return <Layout title="News">{pages}</Layout>;
};

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  }
}