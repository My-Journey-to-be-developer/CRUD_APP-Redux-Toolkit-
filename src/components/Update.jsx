import React, { useState, useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import {updateUser} from "../features/UserDetailSlice"
import {useNavigate} from "react-router-dom"

const Update = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [updateData, setUpdateData] = useState();
    const navigate = useNavigate();
    const allUsers = useSelector((state)=>state.app);
    // console.log(allUsers);
    
    useEffect(()=>{
        if(id){
        const singleUser = allUsers.users.filter((elem)=> elem.id === id);
        setUpdateData(singleUser[0]);
        }
    },[])
    // console.log(updateData);

    const newData = (e)=>{
        setUpdateData ({...updateData, [e.target.name] : e.target.value});
     
    }
    // console.log(updateData);
    const handleUpdate = (e)=>{
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");

    }
    
  return (
    <>
    <h1 className="text-3xl font-bold my-3">Edit Data</h1>
    <form
      className="w-[50vw] h-[48vh] mx-auto my-5 border-2 shadow-lg rounded-lg"
      onSubmit={handleUpdate}
    >
      <div className="flex flex-col">
        <label className="mt-4">Name</label>
        <input
          className="bg-gray-200 h-8"
          type="text"
          name="name"
          autoComplete="off"
          value={updateData && updateData.name}
          onChange={newData}
        />
      </div>
      <div className="flex flex-col">
        <label className="mt-4">Email</label>
        <input
          className="bg-gray-200 h-8"
          type="email"
          name="email"
          autoComplete="off"
          value={updateData && updateData.email}
          onChange={newData}
        />
      </div>
      <div className="flex flex-col">
        <label className="mt-4">Age</label>
        <input
          className="bg-gray-200 h-8"
          type="text"
          name="age"
          autoComplete="off"
          value={updateData && updateData.age}
          onChange={newData}
        />
      </div>

      <div className="mt-4">
        <input
          className=""
          type="radio"
          name="gender"
          value="Male"
          checked ={updateData && updateData.gender === "Male"}
          onChange={newData}
       
        />
        <label className="ml-1">Male</label>
      </div>
      <div className="">
        <input
          className="mr-1"
          type="radio"
          name="gender"
          value="Female"
          checked ={updateData && updateData.gender === "Female"}
          onChange={newData}
        />
        <label>Female</label>
      </div>

      <button type="submit" className="my-4 h-[30px] w-full bg-blue-600 uto">
        Update
      </button>
    </form>
  </>
  )
}

export default Update