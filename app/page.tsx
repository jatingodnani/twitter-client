"use client"
import Image from 'next/image'
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from "react-icons/bs"
import {BiHash, BiHomeCircle, BiUser} from "react-icons/bi"
import Feedcard from '@/components/FeedCard'
import { GoogleLogin } from '@react-oauth/google'
import { useCallback } from 'react'
import toast,{Toaster} from 'react-hot-toast';
import { graphqlclient } from '@/clients/api'
import { verifygoogletokenquery } from '@/graphql/query/user'
interface Twitersidebarbutton{
 title:string
 icon:React.ReactNode
}

const SidebarMenu:Twitersidebarbutton[]=[
  {
    title:"Home",
    icon:<BiHomeCircle/>
  },
  {
    title:"Explore",
    icon:<BiHash/>
  }
  , {
    title:"Notifications",
    icon:<BsBell/>
  },
  {
    title:"Messages",
    icon:<BsEnvelope/>
  },
  {
    title:"Bookmarks",
    icon:<BsBookmark/>
  },
  {
    title:"Profile",
    icon:<BiUser/>
  }
]
export default function Home() {
  
  const handlewithLogin=useCallback(async(cred:CredentialResponse)=>{
const googleToken =cred.credential;

if(!googleToken){
  console.log("error")
 return toast.error("Not found User")
}

const {verifyGoogletoken}=await graphqlclient.request(verifygoogletokenquery,{token:googleToken})

toast.success('Successfully Signed!')
if(verifyGoogletoken){

  window.localStorage.setItem("twitter_id",verifyGoogletoken)
}

},[])
  
  return (
    <div>
      <div className='grid grid-cols-12  w-screen h-screen px-52'>
   <div className='col-span-3  pt-4 mr-2'>
    <div className="hover:bg-gray-600 h-fit w-fit p-2 rounded-full cursor-pointer transition-all" >
    <BsTwitter size={30}/>
    </div>
    <div className='mt-4 text-xl font-bold'>
      <ul>
        {
          SidebarMenu.map(item=>
          <li 
          className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-lg px-4 cursor-pointer py-4 w-fit '
          key={item.title}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
            </li>)
        }
      </ul>
      <button className='bg-[#1d9bf0] text-md p-2 mt-4 rounded-full w-full'>Tweet</button>
    </div>
   </div>
   {/* //center part */}
   <div className='col-span-5 order-r-[1px]  border border-l-[1px]  border-gray-600'>
  <Feedcard/>
  <Feedcard/>
  <Feedcard/>
  <Feedcard/>
   </div>
   
   <div className='col-span-3 p-5 '>
    <div className='p-5 bg-slate-700 rounded-lg'>
      <h1 className='my-2 text-2xl'>New to Twitter?</h1>
    <GoogleLogin onSuccess={handlewithLogin}/>
    <Toaster />
    </div>
   </div>
   </div>
    </div>
  )
}
