

function Login() {
  return (
    <>
    <div  className="w-full h-[100vh] md:h-[80vh] md:flex md:justify-around md:items-center" >
      <div className="relative w-full h-[100vh] md:w-[70%] lg:h-[80vh] md:h-[80%]" >
      <div className="w-[150px] h-[150px] bg-red-600 absolute bottom-0 left-0 rounded-tr-full" ></div>
      <div className="p-7 pt-36" >
        <div className="w-[150px] h-[150px] bg-red-600 absolute top-0 right-0 rounded-bl-full " ></div>
      <div className="font-bold text-3xl text-red-600" >Sign In</div>
      <div className="p-6 pt-10 pb-10 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28" >
        <input type="text" placeholder="Email" className="w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="password" placeholder="Password" className="w-full p-2 mt-10 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
        <div className=" flex items-center justify-end text-red-700 mt-4 pr-3 " >Forgete Password ?</div>
        <div className="flex justify-around">
        <button className="w-[40%] p-2 mt-6 text-white bg-red-500 rounded-md hover:bg-red-600 font-bold text-xl " >Login</button>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-col items-center justify-around font-bold text-2xl " ><h1>New Member ? </h1><div className="text-red-600 font-bold text-xl" >Sign Up</div></div>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Login