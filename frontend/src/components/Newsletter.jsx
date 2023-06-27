import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function Newsletter() {
  return ( 
    <div className='flex justify-center items-center h-[350px]
    w-[100%] flex-col bg-[#c4a4f9]'>

      <h1 className='text-[50px] font-bold'>NEWSLETTER</h1>

      <h2 className='text-[30px] mt-2 '>
        Always get in touch with us
      </h2>

      <div className='flex mt-[3rem] items-center 
      justify-between min-w-[30rem] min-h-[2rem] bg-white
      border-[#cccccc] rounded-[5px] overflow-hidden'>

        <input type="text" 
        placeholder="email" 
        className ="border-none pl-[20px] flex-[7] outline-none"
         id="" />

        <button className='bg-[#4caf50] flex-1 h-[100%]'>
            <SendIcon className="text-white" />
        </button>
      </div>
    </div>
  )
}

export default Newsletter
