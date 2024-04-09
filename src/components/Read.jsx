import React, { useEffect, useState } from "react";
import { showUser,deleteUser } from "../features/UserDetailSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ReadSub from "./ReadSub";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, search } = useSelector((state) => state.app);
  // console.log(users);
  // console.log(typeof(search)); //string
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [radioData, setRadioData] = useState("")

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <div>
        {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
        <h2 className="font-bold">All Data</h2>
        <div className="flex items-center justify-center mx-auto">
        <div className="">
          <input
            className=""
            type="radio"
            name="gender"
            checked={radioData===""}
            onChange={(e)=>setRadioData("")}
          />
          <label className="ml-1">All</label>
        </div>
        <div className="ml-2">
          <input
            className=""
            type="radio"
            name="gender"
            value="Male"
            checked={radioData==="Male"}
            onChange={(e)=>setRadioData(e.target.value)}
          />
          <label className="ml-1">Male</label>
        </div>
        <div className="ml-2">
          <input
            className="mr-1"
            type="radio"
            name="gender"
            value="Female"
            checked={radioData==="Female"}
            onChange={(e)=>setRadioData(e.target.value)}
        />
          <label>Female</label>
        </div>
        </div>
        <div>
          {users &&
            users.
            filter((ele)=>{
                if(search.length===0){
                  return ele;
                }else{
                  return ele.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
                }
            })

            .filter((ele)=>{
              if (radioData === "Male"){
                return ele.gender ===radioData;
              }else if (radioData === "Female"){
                return ele.gender ===radioData;
              }else return ele;
            })
            
              .map((element) => (
              <>
                <div key={element.id} className="my-4 bg-gray-300 w-[25vw] mx-auto rounded-lg flex flex-col items-start">
                  <ReadSub
                    // key={element.id}
                    // id={element.id}
                    name={element.name}
                    email={element.email}
                    gender={element.gender}
                  />
                  <div className="flex items-center justify-center ml-20 mb-2">
                    <button
                      className="w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500"
                      onClick={() => [setId(element.id), setShowPopup(true)]}
                    >
                      View
                    </button>
                    <Link to={`/edit/${element.id}`}
                    className="w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500">
                      Edit
                    </Link>
                    <button 
                    onClick={()=>dispatch(deleteUser(element.id))}
                    className="w-[60px] bg-gray-500 mr-4 rounded-md text-slate-200 hover:text-blue-500">
                      Delete
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Read;
