import './ReesturantCard.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { restdata } from '../../../../src/json/Resturants';
import { useState, useEffect } from 'react';

function ResturantCard() {
  const [restaurants, setRestaurants] = useState([...restdata]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current restaurant for mobile auto-switch
  const box = document.querySelector('.ggggg');

  // Function to go to the previous card
  const btnpresssprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }

  // Function to go to the next card
  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 768) { 
        setCurrentIndex((prevIndex) => (prevIndex + 1) % restaurants.length);
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [restaurants.length]);

  return (
    <>
      <div className="resturantcard-main-main-div border border-solid border-green-800">
        <div className="returantcard-top-div pl-4 pr-2">
          <div><h3 className='font-bold'>Discover best restaurants on Dineout</h3></div>
          <div className="returantcard-slider-icons">
            <ChevronLeftIcon onClick={btnpresssprev} />
            <ChevronRightIcon onClick={btnpressnext} />
          </div>
        </div>

        {/* Cards  */}
        <div className="ggggg flex w-full scroll-smooth gap-5 lg:gap-8 h-[100%] pl-4 pr-4 border border-solid border-red-700 overflow-x-hidden">
          {/* Mobile: Display single card, Desktop: Display multiple cards */}
          {window.innerWidth <= 768 ? (
            // Mobile view: Display only one card at a time and auto-switch
            restaurants.slice(currentIndex, currentIndex + 1).map((res) => {
              return (
                <div key={res.restaurant.id} className='min-w-full lg:min-w-[30%] h-[98%] rounded-tr-2xl rounded-tl-2xl shadow-2xl'>
                  {/* img */}
                  <div className='w-full h-[70%] relative'>
                    <img src={res.restaurant.images1} alt={res.restaurant.name} className='w-full h-full rounded-tr-2xl rounded-tl-2xl' />
                    {res.restaurant.open ? (
                      <div className='pl-3 pr-3 p-2 bg-[#04b224] font-semibold flex items-center justify-around absolute top-2 left-2 rounded-2xl'>Open</div>
                    ) : (
                      <div className='pl-3 pr-3 p-2 bg-red-700 font-semibold flex items-center justify-around absolute top-2 left-2 rounded-2xl'>Closed</div>
                    )}
                    <div className='absolute top-2 right-2'>
                      <FavoriteIcon className='text-red-700' />
                    </div>
                  </div>
                  {/* Content */}
                  <div className='w-full h-[30%] mt-2'>
                    <div className='flex items-center justify-between pl-2 pr-4'>
                      <div><h3 className='text-zinc-800 text-2xl font-bold'>{res.restaurant.name}</h3></div>
                      <div className='flex font-bold items-center bg-blue-600 pl-2 pr-1 rounded-sm text-sm'>
                        <h1 className='font-bold'>{res.restaurant.rating}</h1><StarIcon />
                      </div>
                    </div>
                    <div className='pl-2 pt-1 text-gray-600'>
                      <p>25-30 min . 2km</p>
                    </div>
                    <div className='pt-1 pl-2'>
                      <h1 className='font-semibold text-green-600 text-xl'>60% off upto ₹250</h1>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            // Desktop view: Display multiple cards
            restaurants.map((res) => {
              return (
                <div key={res.restaurant.id} className='min-w-full lg:min-w-[30%] h-[98%] rounded-tr-2xl rounded-tl-2xl shadow-2xl'>
                  {/* img */}
                  <div className='w-full h-[70%] relative'>
                    <img src={res.restaurant.images1} alt={res.restaurant.name} className='w-full h-full rounded-tr-2xl rounded-tl-2xl' />
                    {res.restaurant.open ? (
                      <div className='pl-3 pr-3 p-2 bg-[#04b224] font-semibold flex items-center justify-around absolute top-2 left-2 rounded-2xl'>Open</div>
                    ) : (
                      <div className='pl-3 pr-3 p-2 bg-red-700 font-semibold flex items-center justify-around absolute top-2 left-2 rounded-2xl'>Closed</div>
                    )}
                    <div className='absolute top-2 right-2'>
                      <FavoriteIcon className='text-red-700' />
                    </div>
                  </div>
                  {/* Content */}
                  <div className='w-full h-[30%] mt-2'>
                    <div className='flex items-center justify-between pl-2 pr-4'>
                      <div><h3 className='text-zinc-800 text-2xl font-bold'>{res.restaurant.name}</h3></div>
                      <div className='flex font-bold items-center bg-blue-600 pl-2 pr-1 rounded-sm text-sm'>
                        <h1 className='font-bold'>{res.restaurant.rating}</h1><StarIcon />
                      </div>
                    </div>
                    <div className='pl-2 pt-1 text-gray-600'>
                      <p>25-30 min . 2km</p>
                    </div>
                    <div className='pt-1 pl-2'>
                      <h1 className='font-semibold text-green-600 text-xl'>60% off upto ₹250</h1>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default ResturantCard;
