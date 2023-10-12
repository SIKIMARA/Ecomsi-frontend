import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
import { Rating } from "@material-tailwind/react";
import Review from "./Review";

const ProductDetails = () => {
  const user=localStorage.getItem("user")
  const email=localStorage.getItem("email")
  const id=localStorage.getItem("id")
  // get actual date
  const date = new Date().toLocaleDateString();
  const [rated, setRated] = React.useState(4);
  
  const reviews=[
    
    {
      id:2,
      user_name:"John Doe",
      user_email:"Doe@eùail.com",
      date:"12/12/2021",
      comment:"Lorem ipsum dolor sit amet consect test test",
      rating:2
    },{
      id:3,
      user_name:"John Doe",
      user_email:"Doe@eùail.com",
      date:"12/12/2021",
      comment:"Lorem ipsum dolor sit amet consect test test",
      rating:4
    },
    
  ]
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo]);

  const [review,setReview]=useState(
    {
      user_name:user,
      user_email:email,
      date:date,
      comment:"",
      rating:rated,
      user_id:id,
      product:{
        id:productInfo._id
      }
    }
  )

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">
            <ProductsOnSale />
          </div>
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center  mt-5 mb-20">
          <h2 className="text-5xl font-bold ">Reviews</h2>
          {
            user ? (
              <div class="mb-6 w-full">
                <div class="flex flex-col mb-4">
                  <label class="mb-2 font-bold text-lg text-gray-900 dark:text-gray-200" for="rating">
                      Rating :
                  </label>
                  <Rating value={rated} onChange={(value) => setRated(value)} />
              </div>
              <div class="py-2 px-4 mb-4 bg-white w-full rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <textarea id="comment" rows="6"
                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..." required 
                      onClick={(e)=>setReview({...review,comment:e.target.value})}
                      ></textarea>
              </div>
              <button type="submit"
                  onClick={()=>  console.log(productInfo._id)}
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                  Post comment
              </button>
          </div>
            ) : 
            <p className="text-xl font-semibold">Please <a href="/signin" className="text-primeColor">Sign in</a> to leave a review.</p>
          }
          {
            reviews==[] ?
            <p className="text-xl font-semibold">No reviews yet</p>
            :
            <div className="w-full flex items-start flex-wrap">
            {
              reviews.map((reviews)=>(
                <Review reviews={reviews} key={reviews.id} />
              ))
            }
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
