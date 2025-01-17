// import React from 'react'
import SearchFoodHotelCard from "../../cards/searchfoodhotelcard/SearchFoodHotelCard";
import "./FoodHotelSearch.css";
import {restdata} from "../../../src/json/Resturants"
import { useState } from "react";


function FoodHotelSearch() {
  const [menus, setMenus] = useState(
    restdata.flatMap((restaurant) => restaurant.restaurant.menu) 
  );
  return (
    <>
      <div className="foodhotelsearch-main-div">
        <div className="w-[90%] h-[60px] flex items-center justify-between rounded-[10px] border border-solid border-black md:w-[70%]">
          <input
            type="text"
            placeholder="Search Hotel and Dises"
            className="w-full h-full pl-9 border border-solid  border-black rounded-lg p-5 "
          />
        </div>
        <div className="foodhotelsearch-show-cards-main-div p-1 grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-2 lg:grid-cols-3 ">
          {menus.map((menu, index) => (
            <SearchFoodHotelCard key={index} menu={menu} />
          ))}
         {/* <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
         <SearchFoodHotelCard/>
          <SearchFoodHotelCard/>
         <SearchFoodHotelCard/> */}
        </div>
      </div>
    </>
  );
}

export default FoodHotelSearch;
