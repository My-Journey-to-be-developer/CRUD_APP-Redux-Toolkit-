import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/UserDetailSlice";
import {useNavigate} from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
const navigate = useNavigate();
  const getUserData = (e) => {
    
    setUsers({ ...users, [e.target.name]: e.target.value });
    // console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <>
      <h1 className="text-3xl font-bold my-3">Fill The Data</h1>
      <form
        className="w-[50vw] h-[48vh] mx-auto my-5 border-2 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="mt-4">Name</label>
          <input
            className="bg-gray-200 h-8"
            type="text"
            name="name"
            autoComplete="off"
            onChange={getUserData}
          />
        </div>
        <div className="flex flex-col">
          <label className="mt-4">Email</label>
          <input
            className="bg-gray-200 h-8"
            type="email"
            name="email"
            autoComplete="off"
            onChange={getUserData}
          />
        </div>
        <div className="flex flex-col">
          <label className="mt-4">Age</label>
          <input
            className="bg-gray-200 h-8"
            type="text"
            name="age"
            autoComplete="off"
            onChange={getUserData}
          />
        </div>

        <div className="mt-4">
          <input
            className=""
            type="radio"
            name="gender"
            value="Male"
            onChange={getUserData}
          />
          <label className="ml-1">Male</label>
        </div>
        <div className="">
          <input
            className="mr-1"
            type="radio"
            name="gender"
            value="Female"
            onChange={getUserData}
          />
          <label>Female</label>
        </div>

        <button type="submit" className="my-4 h-[30px] w-full bg-blue-600 uto">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
