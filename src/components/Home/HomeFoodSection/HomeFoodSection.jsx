import StarIcon from '@mui/icons-material/Star';
import { useEffect, useRef } from 'react';

function HomeFoodSection() {

   const scrollContainerRef = useRef(null);
  
    useEffect(() => {
      const scrollInterval = setInterval(() => {
        const container = scrollContainerRef.current;
        if (container) {
          const scrollAmount = container.offsetWidth;
          const currentScroll = container.scrollLeft;
  

          if (currentScroll + scrollAmount >= container.scrollWidth) {

            container.scrollLeft = 0;
          } else {

            container.scrollLeft += scrollAmount;
          }
        }
      }, 3000); 
  
      return () => clearInterval(scrollInterval);
    }, []);

  return (
    <>
      <div className=" pl-5 pr-5 w-full h-[70vh] border-4 border-red-500 " >
        <div className='font-bold text-2xl'>Top dishes near you</div>
        <div ref={scrollContainerRef} className='flex scroll-smooth w-full h-[90%] gap-5 mt-5 overflow-x-hidden border border-solid border-green-700' >
        <div  className='min-w-[30%] h-[100%] border-4 border-blue-500 shadow-2xl' >
            <div className='w-full h-[65%] rounded-tr-xl rounded-tl-xl ' >
              <img src="https://www.pravarshaindustries.com/blog/wp-content/uploads/2023/08/Mastering_the_Art_of_Homemade_Paneer_From_Milk_to_Paneer_Pravarsha_dairy.webp" alt="" className='w-full h-full rounded-tr-xl rounded-tl-2xl ' />
            </div>
            <div className='pl-5 pr-5 border border-solid border-red-700' >
            <div className='flex items-center justify-between' >
              <div className='font-bold text-xl' >Paneer</div>
              <div className='flex gap-2' ><StarIcon className='text-orange-700' />4.5</div>
            </div>
            <div className='flex flex-wrap mt-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta!</div>
            <div className='flex items-center justify-between mt-2' >
              <div className='font-bold ' >$12</div>
              <div>
                <button className='bg-blue-500 text-white px-4 py-2 font-bold rounded-full'>Buy Now</button>
              </div>
            </div>
          </div>
          </div>

          <div className='min-w-[30%] h-[100%] border-4 border-blue-500' >
            <div className='w-full h-[65%] rounded-tr-xl rounded-tl-xl ' >
              <img src="https://www.pravarshaindustries.com/blog/wp-content/uploads/2023/08/Mastering_the_Art_of_Homemade_Paneer_From_Milk_to_Paneer_Pravarsha_dairy.webp" alt="" className='w-full h-full rounded-tr-xl rounded-tl-2xl ' />
            </div>
            <div className='pl-5 pr-5 border border-solid border-red-700' >
            <div className='flex items-center justify-between' >
              <div className='font-bold text-xl' >Paneer</div>
              <div className='flex gap-2' ><StarIcon className='text-orange-700' />4.5</div>
            </div>
            <div className='flex flex-wrap mt-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta!</div>
            <div className='flex items-center justify-between mt-2' >
              <div className='font-bold' >$12</div>
              <div>
                <button className='bg-blue-500 text-white px-4 py-2 font-bold rounded-full'>Buy Now</button>
              </div>
            </div>
          </div>
          </div>

          <div className='min-w-[30%] h-[100%] border-4 border-blue-500' >
            <div className='w-full h-[65%] rounded-tr-xl rounded-tl-xl ' >
              <img src="https://www.pravarshaindustries.com/blog/wp-content/uploads/2023/08/Mastering_the_Art_of_Homemade_Paneer_From_Milk_to_Paneer_Pravarsha_dairy.webp" alt="" className='w-full h-full rounded-tr-xl rounded-tl-2xl ' />
            </div>
            <div className='pl-5 pr-5 border border-solid border-red-700' >
            <div className='flex items-center justify-between' >
              <div className='font-bold text-xl' >Paneer</div>
              <div className='flex gap-2' ><StarIcon className='text-orange-700' />4.5</div>
            </div>
            <div className='flex flex-wrap mt-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta!</div>
            <div className='flex items-center justify-between mt-2' >
              <div className='font-bold' >$12</div>
              <div>
                <button className='bg-blue-500 text-white px-4 py-2 font-bold rounded-full'>Buy Now</button>
              </div>
            </div>
          </div>
          </div>

          <div className='min-w-[30%] h-[100%] border-4 border-blue-500' >
            <div className='w-full h-[65%] rounded-tr-xl rounded-tl-xl ' >
              <img src="https://www.pravarshaindustries.com/blog/wp-content/uploads/2023/08/Mastering_the_Art_of_Homemade_Paneer_From_Milk_to_Paneer_Pravarsha_dairy.webp" alt="" className='w-full h-full rounded-tr-xl rounded-tl-2xl ' />
            </div>
            <div className='pl-5 pr-5 border border-solid border-red-700' >
            <div className='flex items-center justify-between' >
              <div className='font-bold text-xl' >Paneer</div>
              <div className='flex gap-2' ><StarIcon className='text-orange-700' />4.5</div>
            </div>
            <div className='flex flex-wrap mt-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta!</div>
            <div className='flex items-center justify-between mt-2' >
              <div className='font-bold' >$12</div>
              <div>
                <button className='bg-blue-500 text-white px-4 py-2 font-bold rounded-full'>Buy Now</button>
              </div>
            </div>
          </div>
          </div>

          <div className='min-w-[30%] h-[100%] border-4 border-blue-500' >
            <div className='w-full h-[65%] rounded-tr-xl rounded-tl-xl ' >
              <img src="https://www.pravarshaindustries.com/blog/wp-content/uploads/2023/08/Mastering_the_Art_of_Homemade_Paneer_From_Milk_to_Paneer_Pravarsha_dairy.webp" alt="" className='w-full h-full rounded-tr-xl rounded-tl-2xl ' />
            </div>
            <div className='pl-5 pr-5 border border-solid border-red-700' >
            <div className='flex items-center justify-between' >
              <div className='font-bold text-xl' >Paneer</div>
              <div className='flex gap-2' ><StarIcon className='text-orange-700' />4.5</div>
            </div>
            <div className='flex flex-wrap mt-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta!</div>
            <div className='flex items-center justify-between mt-2' >
              <div className='font-bold' >$12</div>
              <div>
                <button className='bg-blue-500 text-white px-4 py-2 font-bold rounded-full'>Buy Now</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFoodSection;
