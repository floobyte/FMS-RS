import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function UserPage() {
  return (
    <>
    <div className="w-full h-auto border border-slid" >

        {/* banner  */}
        <div className="flex items-center justify-around">
            <div className="w-[90%] h-[30vh] lg:w-[50%] lg:h-[40vh] md:w-[80%] md:h-[25vh] bg-red-700 rounded-2xl p-3 lg:pt-10 md:pt-8">
                <div className="flex items-center justify-center" >
                    <div className="font-bold text-2xl pr-3 text-white lg:text-3xl md:text-3xl  " >Hungery Hub</div>
                    <div className="pl-2 pr-2 bg-white rounded-xl font-bold text-red-600 lg:text-2xl md:text-2xl " >Plush</div>
                </div>
                <div className="flex flex-col items-center justify-around mt-3 lg:mt-5 md:mt-5" >
                <div className="font-bold text-white text-xl lg:text-2xl md:text-2xl" >Save 50 on every order</div>
                <div className="text-white text-sm lg:text-lg lg:mt-3 md:mt-2 " >this is waht every Plush member</div>
                <div className="text-white text-sm lg:text-base lg:mt-2 md:mt-1" >saved on delivery fess..</div>
                </div>
                <div className="flex items-center justify-around mt-3 pl-10 pr-10 md:mt-8" >
                    <div className="w-full lg:w-[70%] md:w-[65%] bg-white rounded-xl pl-2 pr-2 p-1 flex items-center justify-around font-bold lg:text-xl md:text-2xl " >Try For Free</div>
                </div>
            </div>
        </div>

        {/* details  */}
        <div className="w-full p-2 lg:p-16 md:p-11" >
            <div className='' >
                <div><h1 className="font-bold text-xl" >Account</h1></div>
                <div className="p-3 lg:grid grid-cols-2 grid-rows-2 gap-10 lg:pl-10 lg:pr-10  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-9 md:pl-5 md:pr-10 " >
                    <div className="flex items-center justify-between mt-2 lg:border border-solid border-black lg:rounded-xl lg:p-4 lg:pl-7 lg:pr-7   md:border md:border-solid md:border-black md:rounded-xl md:p-4 md:pl-7 md:pr-7" >
                        <div className="font-semibold" >Name</div>
                        <di className='font-bold' >Ram</di>
                    </div>
                    <div className="flex items-center justify-between mt-2 lg:border border-solid border-black lg:rounded-xl lg:p-4 lg:pl-7 lg:pr-7   md:border md:border-solid md:border-black md:rounded-xl md:p-4 md:pl-7 md:pr-7 " >
                        <div className="font-semibold" >Email</div>
                        <di className='font-bold' >ramnaragave@gmail.com</di>
                    </div>
                    <div></div>
                </div>
            </div>

            <div>
                <div className="font-bold text-xl mt-4 md:mt-2" ><h1>Food Orders</h1></div>
                <div  className="p-3 lg:grid grid-cols-2 grid-rows-2 gap-10 lg:p-7  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 md:p-7 " >
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>Your Order</div><div><ChevronRightIcon/></div></div>
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>Favourite Order</div><div><ChevronRightIcon/></div></div>
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>Adddress Book</div><div><ChevronRightIcon/></div></div>
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>Online Ordering Help</div><div><ChevronRightIcon/></div></div>
                </div>
            </div>

            <div>
                <div className="font-bold text-xl mt-4" ><h1>More</h1></div>
                <div  className="p-3 lg:grid grid-cols-2 grid-rows-2 gap-10 lg:p-7  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 md:p-7 " >
                    <div className="flex items-center justify-between font-semibold mt-1" ><div>Choose Language</div><div><ChevronRightIcon/></div></div>
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>About</div><div><ChevronRightIcon/></div></div>
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>Send Feedback</div><div><ChevronRightIcon/></div></div>
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>Setting</div><div><ChevronRightIcon/></div></div>
                    <div className="flex items-center justify-between font-semibold mt-2" ><div>Logout</div><div><ChevronRightIcon/></div></div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default UserPage