import React from 'react'
import {useState} from "react";

const ReadSub = ({key, name,email,gender}) => {
  const [id, setId] = useState();

  return (
    <div className='my-4 bg-gray-300 w-[25vw] mx-auto rounded-lg flex flex-col items-start'>
        <p className='ml-20'><span className='font-bold'>Name:</span> {name}</p>
        <p className='ml-20'><span className='font-bold'>Email:</span> {email}</p>
        <p className='ml-20'><span className='font-bold'>Age:</span> {gender}</p>
        <div className='flex ml-20 my-2'>
        <div className='flex'>
        <button className='w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500' onClick={()=>[setId(key), setsh ]}>View</button>
        <button className='w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500'>Edit</button>
        <button className='w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500'>Delete</button>
        </div>
        </div>
    </div>
  )
}

export default ReadSub