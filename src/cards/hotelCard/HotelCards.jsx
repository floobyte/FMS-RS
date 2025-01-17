import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';


function HotelCards() {
  return (
    <>
     <div className="resturantcard-main-card-div">
          <div className="returantcard-img-div relative ">
            <img src="https://i0.wp.com/imageio.forbes.com/specials-images/imageserve/62fe3a28c22bf8624fce7c7a/0x0.jpg?format=jpg&width=1200" alt="" />
            <div className=' absolute top-3 left-0 bg-green-500 p-2 lg:bg-red-600 text-green-700 md:bg-green-600 ' >Close</div>
          </div>
          <div className="returantcard-content-main-div">
           <div className='flex justify-between font-medium mb-1'><h6>Indore</h6><LocationOnIcon style={{width: '15px'}}/></div>
           <div className='font-medium mb-2 flex justify-between'><h5>Rajdhani Biryani</h5><StarIcon style={{width: '15px'}} /></div>
           <div className="bg-green-600 flex justify-center items-center rounded mb-3">
           <p className='font-semibold'>Flat 30% off on pre-booking</p>
           </div>
           <div className="bg-green-300 flex justify-center items-center rounded">
           <p className='font-semibold'>Up to 10% off bank offer</p>
           </div>
          </div>
     </div>
    </>
  )
}

export default HotelCards