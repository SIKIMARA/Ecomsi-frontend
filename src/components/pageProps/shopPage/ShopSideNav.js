import React from "react";
import Brand from "./shopBy/Brand";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";
import { useDispatch } from "react-redux";
import { setBrand, setColor, setPriceRange } from "../../../redux/ProductSlice";

const ShopSideNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-col gap-6">
      <button className="text-sm font-semibold text-[#767676]" onClick={
        () => {
          dispatch(setBrand(""));
          dispatch(setColor(""));
          dispatch(setPriceRange(""));
        }
      }>
        Clear all filters
      </button>
      <Color />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
