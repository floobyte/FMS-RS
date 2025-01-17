import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HomeOfferSlider() {
  // Reference to the scroll container
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = container.offsetWidth;
        const currentScroll = container.scrollLeft;

        // Check if we are at the end, and reset scroll to the beginning for seamless loop
        if (currentScroll + scrollAmount >= container.scrollWidth) {
          // Reset scroll position to the start
          container.scrollLeft = 0;
        } else {
          // Smooth scroll to the next image (by the width of the container)
          container.scrollLeft += scrollAmount;
        }
      }
    }, 3000); // Scroll every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className='lg:pl-4 lg:pr-4 pl-3 pr-3'>
      <div
        ref={scrollContainerRef}
        className="h-36 md:h-64 lg:h-72 lg:gap-5 lg:p-7 md:pl-2 mt-3 p-2 pl-3 pr-3 gap-5 items-center px-2 overflow-x-auto flex scroll-smooth"
      >
        {/* Image cards with responsive widths */}
        <Link to="/offermainpage" className="min-w-[100%] md:min-w-[100%] lg:min-w-[50%] h-full rounded-lg">
          <img
            src="https://cdn.create.vista.com/downloads/e5f14664-8b6c-4b14-8c80-96165fe13d7c_1024.jpeg"
            alt="Offer 1"
            className="w-full h-full rounded-lg "
          />
        </Link>
        <Link to="/offermainpage" className="min-w-[100%] md:min-w-[100%] lg:min-w-[50%] h-full rounded-lg">
          <img
            src="https://cdn.create.vista.com/downloads/1a263842-1619-4fbe-9d52-ad29b6d4615b_1024.jpeg"
            alt="Offer 2"
            className="w-full h-full rounded-lg"
          />
        </Link>
        <Link to="/offermainpage" className="min-w-[100%] md:min-w-[100%] lg:min-w-[50%] h-full rounded-lg">
          <img
            src="https://cdn.create.vista.com/downloads/50a4bba2-e922-4315-a1ad-8b0b0d3cd4c1_1024.jpeg"
            alt="Offer 3"
            className="w-full h-full rounded-lg"
          />
        </Link>
        <Link to="/offermainpage" className="min-w-[100%] md:min-w-[100%] lg:min-w-[50%] h-full rounded-lg">
          <img
            src="https://cdn.grabon.in/gograbon/images/category/1546252575451.png"
            alt="Offer 4"
            className="w-full h-full rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
}

export default HomeOfferSlider;
