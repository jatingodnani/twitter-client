import Image from 'next/image'
import React from 'react'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import {FaRetweet} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai"
import { Tweet } from '@/gql/graphql';
interface Tweetprops{
    data:Tweet
}
const Feedcard: React.FC<Tweetprops> = (props) => {
    const {data}=props;
    
    return <div className='hover:bg-slate-900
    cursor-pointer transition-all border-x-0
     border p-4 border-gray-600'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-2 '>
                <Image
                    className='rounded-full'
                    width={50}
                    height={50}
                    alt="user"
                    src={data.author?.profileimgurl?data.author.profileimgurl:"/user.png"} />
            </div>
            <div className='col-span-10'>
                <h5>{data.author?.firstname}{data.author?.lastname}</h5>
                <p>{data.content}</p>
                <div className='flex justify-between mt-5 w-[80%] text-xl items-center'>
                <div>
                <BiMessageRounded/>
                </div>
                <div>
                <FaRetweet/>
                </div>
                <div>
                <AiOutlineHeart/>
                </div>
                <div>
                <BiUpload/>
                </div>
            </div>
            </div>
           
        </div>

    </div>
}
export default Feedcard