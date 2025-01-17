
import ResturantCard from "../components/AllCard/ResturantCard/ResturantCard"
import CategorySlider from "../components/Home/categoryslider/CategorySlider"
import HomeFoodSection from "../components/Home/HomeFoodSection/HomeFoodSection"
import HomeFilter from "./HomeFilter/HomeFilter"
import HomeOfferSlider from "./HomeOfferSlider/HomeOfferSlider"
import HomeTop from "./HomeTop/HomeTop"


function Home() {
  return (
   <>
    <HomeTop/>
    <HomeOfferSlider/>
    <CategorySlider/>
    <HomeFilter/>
    <ResturantCard/>
    <HomeFoodSection/>
   </>
  )
}

export default Home