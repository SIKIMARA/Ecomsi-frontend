import React from "react";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../../../redux/ProductSlice";

const Price = () => {
  const minPrice = useSelector((state) => state.productReducer.minPrice);
  const maxPrice = useSelector((state) => state.productReducer.maxPrice);
  const dispatch = useDispatch();
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              onClick={
                () => {
                  dispatch(setPriceRange({
                    min: item.priceOne,
                    max: item.priceTwo,
                  }));
                  
                }
              }
              key={item._id}
              className={`border-b-[1px]  pb-2 flex cursor-pointer
              ${
                item.priceOne === minPrice && item.priceTwo === maxPrice ? "text-black font-bold text-sm border-primeColor" : ""
              }
              items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300`}
            >
              ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
