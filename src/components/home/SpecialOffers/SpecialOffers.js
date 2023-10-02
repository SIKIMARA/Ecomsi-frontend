import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";
import { useState } from "react";
import { useEffect } from "react";

const SpecialOffers = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/products/SpecialOffers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setProducts(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
},[]);
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {
          products.map((item) => (
            <Product
            _id={item._id}
            img={item.img}
            productName={item.productName}
            price={item.price}
            color={item.color}
            badge={true}
            des={item.des}
          />))
        }
      </div>
    </div>
  );
};

export default SpecialOffers;
