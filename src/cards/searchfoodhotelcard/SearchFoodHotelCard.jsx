import StarIcon from "@mui/icons-material/Star";

function SearchFoodHotelCard() {
  return (
    <>
     <div className="foodhotelsearch-show-cards-div">
            <div className="foodhotel-show-img-div">
              <img
                src="https://images7.alphacoders.com/596/596343.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* if hotel  */}
            <div className="p-4 " style={{width: '60%'}}>
              <h3 className="text-sm font-bold mb-2">Pizza Hub</h3> 
              <div className="flex w-full items-center justify-between" >
                <p className="text-md font-bold">Restaurant</p>
                <div className="flex items-center justify-center">
                  <StarIcon style={{ color: "#FFD700", fontSize: "20px" }} />
                  <p className="font-bold pl-1 " >4.5</p>
                </div>
              </div>
              <div className="bg-green-700 text-white rounded-lg text-center mt-3 w-20">
                <p className="font-bold" >Open</p>
              </div>
            </div>


        {/* if dis  */}
            {/* <div className="p-4" style={{width: '60%'}}>
              <h3 className="text-sm font-bold mb-2">Pizza Hub</h3> 
              <div className="flex w-full items-center justify-between" >
                <p className="text-md font-bold">Dis</p>
                <div className="flex items-center justify-center">
                  <p className="font-bold pl-1 " >₹ 400</p>
                </div>
              </div>
              <div className="bg-blue-800 text-white rounded-lg text-center mt-3 w-16">
                <p className="font-bold" >Add</p>
              </div>
            </div> */}


          </div>


{/* ye lagana hai logic ke sath jab data fecth karenge tab  */}

{/* ager hotel close raha tab  */}
     {/* <div className="bg-black text-white rounded-lg text-center mt-3 w-20">
                <p className="font-bold" >Close</p>
              </div> */}


    </>
  )
}

export default SearchFoodHotelCard