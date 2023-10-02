import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { setBrand } from "../../../../redux/ProductSlice";

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const brand= useSelector((state) => state.productReducer.brand);
  const dispatch = useDispatch();
  const brands = [
    {
      _id: 9006,
      title: "KidsStyle",
    },
    {
      _id: 9007,
      title: "HomeDecor",
    },
    {
      _id: 9008,
      title: "SoundWave",
    },
    {
      _id: 9009,
      title: "SunShade",
    },
    {
      _id: 9010,
      title: "Urban Styles",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] cursor-pointer">
            {brands.map((item) => (
              <li
                onClick={() => dispatch(setBrand(item.title))}
                key={item._id}
                className={`border-b-[1px] pb-2
                ${
                  item.title === brand ? "text-black font-bold text-sm border-primeColor" : ""
                }
                flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
