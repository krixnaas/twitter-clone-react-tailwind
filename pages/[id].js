import Head from "next/head";
import Feed from "../components/Feed";
import Model from "../components/Model";
import Siderbar from "../components/Sidebar";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { modalState } from "../atoms/modalAtom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Widgets from "../components/Widgets";

function PostPage() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [post, setPost] = useState(); 
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { id } = router.query; 
  return (
    <div className="">
      <Head>
        <title>
          {post?.username} on Twitter: "{post?.text}"
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Siderbar />
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
          <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
            <div
              className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="h-5 text-white" />
            </div>
            Tweet
          </div>
          <Post id={5} post="Data" postPage/>
          {comments.length > 0 && (
            <div className="pb-72">
              {comments.map((comment) => (
                <Comment
                key={comment.id}
                id={comment.id}
                comment={comment.data()}
              />
              ))}
            </div>
          )}
          </div>
          <Widgets trendingResults="TEst" followResults="Test"/>
        {isOpen && <Model />}
      </main>
    </div>
  );
}

export default PostPage;
