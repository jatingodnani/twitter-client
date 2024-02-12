"use client"
import Image from 'next/image'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs"
import { BiHash, BiHomeCircle, BiImageAlt, BiUser } from "react-icons/bi"
import Feedcard from '@/components/FeedCard'
import { GoogleLogin } from '@react-oauth/google'
import { useCallback, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { graphqlclient } from '@/clients/api'
import { verifygoogletokenquery } from '@/graphql/query/user'
import useCurrentuser from '@/hooks/customhooks'
import { QueryClient, useQueries, useQueryClient } from '@tanstack/react-query'
import { useCreattweet, useGetallTweet } from '@/hooks/customtweethook'

interface Twitersidebarbutton {
  title: string
  icon: React.ReactNode
}

const SidebarMenu: Twitersidebarbutton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHash />
  }
  , {
    title: "Notifications",
    icon: <BsBell />
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />
  },
  {
    title: "Profile",
    icon: <BiUser />
  }
]
export default function Home() {
  const { user } = useCurrentuser();
  const queryclient = useQueryClient();
  const { tweets = [] } = useGetallTweet();
  const {mutate}=useCreattweet()
  const [content,setcontent]=useState("");
  const handletweet=useCallback(()=>{
    if(content){
      mutate({
        content
      })
    }

  },[content,mutate])
  function handleimages() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*")
    input.click()
  }
  const handlewithLogin = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;

    if (!googleToken) {
      console.log("error")
      return toast.error("Not found User")
    }

    const { verifyGoogletoken } = await graphqlclient.request(verifygoogletokenquery, { token: googleToken })

    toast.success('Successfully Signed!')
    if (verifyGoogletoken) {

      window.localStorage.setItem("twitter_id", verifyGoogletoken)
      await queryclient.invalidateQueries(["current-user"])
    }

  }, [])

  return (
    <div>
      <div className='grid grid-cols-12  w-screen h-screen px-52'>
        <div className='col-span-3  pt-4 mr-2 relative'>
          <div className="hover:bg-gray-600 h-fit w-fit p-2 rounded-full cursor-pointer transition-all" >
            <BsTwitter size={30} />
          </div>
          <div className='mt-4 text-xl font-bold'>
            <ul>
              {
                SidebarMenu.map(item =>
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
          {


            user &&
            <div className='absolute bottom-2 rounded-xl flex gap-4 items-center bg-slate-800 px-3 py-2'>
              {
                user && user.profileimgurl && <Image className='rounded-full' alt='not' src={user.profileimgurl} height={50} width={50} />
              }
              <div>
                <h3 className='text-[14px]'>{user.firstname} {user.lastname}</h3>
              </div>
            </div>
          }


        </div>
        {/* //center part */}
        <div className='col-span-5 order-r-[1px]  border border-l-[1px]  border-gray-600'>
          <div className='hover:bg-slate-900 
    cursor-pointer transition-all border-x-0
     border p-4 border-gray-600'>
            <div className='grid grid-cols-12 gap-3'>
              <div className='col-span-2'>
                {
                  user?.profileimgurl &&
                  <div className='col-span-2 '>
                    <Image
                      className='rounded-full'
                      width={50}
                      height={50}
                      alt="user"
                      src={user?.profileimgurl} />
                  </div>
                }
              </div>
              <div className='col-span-10'>
                <textarea 
                placeholder='Whats Happening?'
                value={content}
                onChange={e=>setcontent(e.target.value)}
               className='w-full  bg-transparent text-xl border-b border-slate-700 px-3' rows={4}></textarea>
                <div className='mt-3 flex justify-between items-center'>
                  <BiImageAlt onClick={handleimages} size={20} />
                  <button
                  onClick={handletweet}
                  className='bg-[#1d9bf0] text-sm font-semibold px-4 py-2 rounded-full  items-center'>Tweet</button>
                </div>
              </div>
            </div>

          </div>
          {
            tweets?.map(tweet => tweet ? <Feedcard
              key={tweet?.id}
              data={tweet}
            /> : null)
          }

        </div>
        {
          !user &&
          <div className='col-span-3 p-5 '>
            <div className='p-5 bg-slate-700 rounded-lg'>
              <h1 className='my-2 text-2xl'>New to Twitter?</h1>
              <GoogleLogin onSuccess={handlewithLogin} />

            </div>
          </div>
        }

      </div>
    </div>
  )
}
