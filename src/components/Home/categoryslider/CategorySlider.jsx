import './CategorySlider.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeCategoryCard from '../../../cards/homecategorycard/HomeCategoryCard';
// import HomeCategoryCard from '../../cards/homecategorycard/HomeCategoryCard';
// import HomeCategoryCard from '../../../cards/homecategorycard/HomeCategoryCard';

function CategorySlider() {
    const [category, setCategory] = ([]);

    const box = document.querySelector('.gggg');

    const btnpresssprev = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
    }
    const btnpressnext = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log("ho ra hai")
    }

  return (
    <>
    <div className=' h-40 md:h-60 lg:h-72'>
        <div className='w-full h-9  flex justify-between p-1 '>
            <p className='font-bold pl-3' >What's are you looking ?</p>
            <div className='flex'>
                <div><ChevronLeftIcon onClick={btnpresssprev} /></div>
                <div><ChevronRightIcon onClick={btnpressnext} /></div>
            </div>
        </div>
     <div className=" gggg h-32 md:mt-2 md:h-48 lg:h-64 flex gap-3 lg:gap-6 overflow-x-hidden scroll-smooth ">
      <HomeCategoryCard/>
      <HomeCategoryCard/>
      <HomeCategoryCard/>
      <HomeCategoryCard/>
      <HomeCategoryCard/>
      <HomeCategoryCard/>
      <HomeCategoryCard/>
      <HomeCategoryCard/>
      <HomeCategoryCard/>
     </div>
    </div>
    </>
  )
}

export default CategorySlider