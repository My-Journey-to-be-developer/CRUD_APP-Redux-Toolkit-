import React from 'react'


const Create = () => {

  return (

        <form className="w-[50vw] h-[48vh] mx-auto my-5 border-2 shadow-lg rounded-lg">
        
        <div className='flex flex-col'>
            <label className="mt-4" for="name">Name</label>
            <input className="bg-gray-200 h-8" type="text" name='name' />
        </div>
        <div className='flex flex-col'>
        <label className="mt-4" for="email">Email</label>
            <input className="bg-gray-200 h-8" type="email" name='email' />

        </div>
        <div className='flex flex-col'>
        <label className="mt-4" for="age">Age</label>
            <input className="bg-gray-200 h-8" type="number" name='age' />
        </div>

        <div className='mt-4'>
            <input className="" type="radio" name="gender" value="Male"/>
            <label className="ml-1" for="gender">Male</label>
        </div>
        <div className=''>
        <input className="mr-1" type="radio" name="gender" value="Female"/>
            <label for="gender">Female</label>
        </div>

        <button type="submit" className="my-4 h-[30px] w-full bg-blue-600 uto">
          Submit
        </button>
     
        </form>
   
  )
}

export default Create