import Image from 'next/image'
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from "react-icons/bs"
import {BiHash, BiHomeCircle, BiUser} from "react-icons/bi"
import Feedcard from '@/components/FeedCard'
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
   
   <div className='col-span-3'></div>
   </div>
    </div>
  )
}
