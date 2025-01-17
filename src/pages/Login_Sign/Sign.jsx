import { useState } from "react";
import { Link } from "react-router-dom";

import './signUp.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    pinCode: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
   <>
   <div  className="w-full h-[100vh] md:h-[80vh] md:flex md:justify-around md:items-center" >
      <div className="relative w-full h-[100vh] md:w-[70%] lg:h-[95vh] md:h-[80%]" >
      <div className="w-[150px] h-[150px] bg-red-600 absolute bottom-0 left-0 rounded-tr-full" ></div>
      <div className="p-7 pt-28" >
        <div className="w-[150px] h-[150px] bg-red-600 absolute top-0 right-0 rounded-bl-full " ></div>
      <div className="font-bold text-3xl text-red-600" >Sign Up</div>
      <div className="p-6 pt-10 pb-10 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28" >
        <input type="text" placeholder="Number" className="w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="text" placeholder="Name" className="w-full p-2 mt-10 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="text" placeholder="Email" className="w-full p-2 mt-10 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="password" placeholder="Password" className="w-full p-2 mt-10 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="text" placeholder="Pin Code" className="w-full p-2 mt-10 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
        <div className="flex justify-around">
        <button className="w-[40%] p-2 mt-6 text-white bg-red-500 rounded-md hover:bg-red-600 font-bold text-xl " >Sign Up</button>
        </div>
      </div>
      </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;