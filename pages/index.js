import Head from 'next/head'
import Feed from '../components/Feed'
import Model from '../components/Model'
import Siderbar from '../components/Sidebar'
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import Widgets from '../components/Widgets';

export default function Home() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        <Siderbar/>
        <Feed/>
        <Widgets trendingResults="TEst" followResults="Test"/>
        {isOpen && <Model/> }

      </main>
     
    </div>
  )
}
