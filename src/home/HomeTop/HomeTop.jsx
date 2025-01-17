import { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function HomeTop() {
  const [bgColor, setBgColor] = useState('bg-red-700');
  const [bgColor2, setBgColor2] = useState('bg-orange-500');
  const [showOffer, setShowOffer] = useState(false);
  
  const colors = ['bg-red-700', 'bg-orange-700', 'bg-green-700', 'bg-yellow-700',];
  const colors2 = ['bg-orange-700', 'bg-pink-700', 'bg-yellow-700', 'bg-red-700',]


  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomColor2 = colors2[Math.floor(Math.random() * colors2.length)];
      setBgColor2(randomColor2);
      setBgColor(randomColor);
    }, 3000);
    
 
    setShowOffer(true);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className={`w-full h-80 rounded-bl-xl rounded-br-full p-2 ${bgColor} transition-all duration-1000 ease-in-out md:p-7 lg:rounded-br-3xl lg:rounded-bl-3xl`}>
          <div className="flex items-center justify-between w-full">
            <div className="w-[70%]">
              <div className='flex'>
                <LocationOnIcon />
                <h3 className='pl-1 font-bold'>HOTEL</h3>
              </div>
              <div className='pl-2'>
                <p>indore vijay Nagar........</p>
              </div>
            </div>
            <div className='flex justify-around w-[30%] items-center lg:w-[15%]'>
              <div className='bg-white p-2 rounded-3xl font-bold text-red-600'>Plush</div>
              <Link to={'/userpage'} ><PersonIcon /></Link>
            </div>
          </div>
          {/* search */}
          <div className='w-full rounded-2xl bg-white mt-5 lg:mt-7'>
            <input type="text" placeholder="Search for 'Pizza'" className='w-[90%] rounded-2xl p-3' />
            <SearchIcon />
          </div>
          {/* offer */}
          <div className='flex justify-between items-center mt-5 lg:mt-7'>
            <div className='w-[50%] flex flex-col flex-wrap'>
              <div>
                <h3 className='font-bold text-2xl'>Explosive Offer for You </h3>
              </div>
              <div className={` p-2 ${bgColor2} transition-all duration-1000 ease-in-out rounded-3xl font-bold flex items-center justify-around w-[100%] mt-3 lg:w-[40%] lg:mt-4 md:w-[50%] ${showOffer ? 'animate-slideIn' : ''} `}>Min. ₹150 off</div>
            </div>

            <div className='w-60% h-full'>
              <div className={` w-[100px] h-[100px] ${bgColor2} transition-all duration-1000 ease-in-out rounded-full flex items-center justify-around font-bold ${showOffer ? 'animate-slideIn2' : ''} `} >10% Off</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTop;
