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
        <h2>All Data</h2>
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
