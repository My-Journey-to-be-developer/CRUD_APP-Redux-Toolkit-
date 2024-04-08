import React, { useEffect, useState } from 'react'
import { showUser } from '../features/UserDetailSlice'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import ReadSub from './ReadSub';
import CustomModal from './CustomModal';

const Read = () => {
const dispatch = useDispatch();
const {users, loading}= useSelector((state)=>state.app);
console.log(users);
const [showPopup, setShowPopup]= useState(false);



useEffect(()=>{
dispatch(showUser());
},[])

if(loading){
    return <h2>Loading</h2>;
}
  return (
    <>
    <div>
    {showPopup && <CustomModal/>}
    <h2>All Data</h2>
    <div>
       {
         users && users.map((element)=>(
                
                    <ReadSub
                    key ={element.id}
                    id={element.id}
                    name = {element.name}
                    email = {element.email}
                    gender = {element.gender}
                    />
            
         ))
        }
        
    </div>
    </div>
    </>
  )
}

export default Read