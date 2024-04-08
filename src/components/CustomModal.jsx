import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import {useSelector} from "react-redux"

const CustomModal = ({id, showPopup, setShowPopup}) => {
    const allUser = useSelector((state)=>state.app.users);
    const singleUser = allUser.filter((ele)=>(ele.id === id));
    // console.log(singleUser);

  return (
    <div className="bg-black opacity-80 fixed top-0 bottom-0 right-0 left-0 z-99 flex items-center justify-center">
      <div className="bg-white w-[300px] h-[300px] rounded-lg shadow">
        <div className="flex justify-end mt-2 mr-2 ">
          <IoCloseCircle 
          onClick={()=>setShowPopup(false)}
          className="text-2xl hover:scale-110 transition-all duration-300" />
        </div>
        <div className="flex flex-col items-start ml-20 gap-3 mt-10">
        <h2><span className="font-bold">Name:</span> {singleUser[0].name}</h2>
        <h2><span className="font-bold">Email:</span> {singleUser[0].email}</h2>
        <h2><span className="font-bold">Age:</span> {singleUser[0].age}</h2>
        <h2><span className="font-bold">Gender:</span>{singleUser[0].gender}</h2>
        
        
        
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
