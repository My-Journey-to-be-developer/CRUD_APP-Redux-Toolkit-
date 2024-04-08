import React from 'react'
// import {useState} from "react";

const ReadSub = ({ name,email,gender}) => {
  // const [myid, setMyId] = useState();

  return (
    <div className='flex flex-col items-start gap-2 mb-2'>
        <p className='ml-20'><span className='font-bold'>Name:</span> {name}</p>
        <p className='ml-20'><span className='font-bold'>Email:</span> {email}</p>
        <p className='ml-20'><span className='font-bold'>Age:</span> {gender}</p>
        {/* <div className='flex ml-20 my-2'> */}
        {/* <div className='flex'>
        <button className='w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500' onClick={()=>[setMyId(id), setShowPopup(true)]}>View</button>
        <button className='w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500'>Edit</button>
        <button className='w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500'>Delete</button>
        </div> */}
        {/* </div> */}
    </div>
  )
}

export default ReadSub