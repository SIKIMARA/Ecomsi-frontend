import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About ECOMSI</h1>
          <p className="text-gray-700 mb-4">
            At ECOMSI, we take pride in offering a diverse range of premium products from the world's best brands. Our journey started with a mission to provide an exceptional online shopping experience that combines quality, affordability, and convenience.
          </p>

          <h2 className="text-2xl font-bold mb-2">Our Commitment to Excellence</h2>
          <p className="text-gray-700 mb-4">
            We are dedicated to delivering excellence in every product we offer. ECOMSI's selection showcases meticulously curated items, all sourced from renowned brands celebrated for their commitment to quality. Each product in our catalog undergoes rigorous quality checks to meet our high standards.
          </p>

          <h2 className="text-2xl font-bold mb-2">A Seamless Shopping Experience</h2>
          <p className="text-gray-700 mb-4">
            Shopping with ECOMSI is designed to be effortless and enjoyable. Our user-friendly website is your gateway to a vast selection of products. Explore detailed descriptions, discover the latest trends, and find the perfect items that match your style and preferences.
          </p>

          <h2 className="text-2xl font-bold mb-2">Customer Satisfaction is Our Priority</h2>
          <p className="text-gray-700 mb-4">
            Your satisfaction is our driving force. ECOMSI's customer support team is always here to assist you, whether you have questions or need assistance. Your feedback matters, and we continuously strive to enhance your shopping experience.
          </p>

          <h2 className="text-2xl font-bold mb-2">Join Us on Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Thank you for choosing ECOMSI as your trusted eCommerce destination. We invite you to explore our website, uncover exciting products, and become a part of our ever-growing community of satisfied shoppers.
          </p>

          <p className="text-gray-700 mb-4">
            To get in touch with us or for any inquiries, please visit our <p onClick={()=>navigate("/contact")} className="text-blue-500 cursor-pointer hover:underline">Contact Us</p> page. We eagerly anticipate serving you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
