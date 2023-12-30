import Image from 'next/image'
import React from 'react'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import {FaRetweet} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai"
const Feedcard: React.FC = () => {
    return <div className='hover:bg-slate-900 
    cursor-pointer transition-all border-x-0
     border p-4 border-gray-600'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-2 '>
                <Image
                    className='rounded-xl'
                    width={70}
                    height={70}
                    alt="user"
                    src={"/user.png"} />
            </div>
            <div className='col-span-10'>
                <h5>Jatin</h5>
                <p>If eligible, you can receive a share of ads revenue just by posting on X. You must be subscribed to X Premium.</p>
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