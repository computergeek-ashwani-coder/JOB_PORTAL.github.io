import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import { FaCode, FaDatabase, FaRobot, FaPaintBrush, FaShieldAlt } from "react-icons/fa";

const categoriesWithIcons = [
  { name: "Frontend Developer", icon: <FaCode /> },
  { name: "Backend Developer", icon: <FaDatabase /> },
  { name: "Full Stack Developer", icon: <FaCode /> },
  { name: "Mern Developer", icon: <FaCode /> },
  { name: "Data Scientist", icon: <FaDatabase /> },
  { name: "DevOps Engineer", icon: <FaShieldAlt /> },
  { name: "Machine Learning Engineer", icon: <FaRobot /> },
  { name: "Artificial Intelligence Engineer", icon: <FaRobot /> },
  { name: "Cybersecurity Engineer", icon: <FaShieldAlt /> },
  { name: "Product Manager", icon: <FaCode /> },
  { name: "UX/UI Designer", icon: <FaPaintBrush /> },
  { name: "Graphics Engineer", icon: <FaPaintBrush /> },
  { name: "Graphics Designer", icon: <FaPaintBrush /> },
  { name: "Video Editor", icon: <FaPaintBrush /> },
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="py-12 bg-gradient-to-r from-purple-100 via-white to-blue-100">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-blue-700">Categories</h1>
        <p className="text-gray-600 text-sm mt-2">Explore our extensive job market.</p>
      </div>

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {categoriesWithIcons.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-2">
              <div
                onClick={() => searchjobHandler(category.name)}
                className="group bg-white p-6 rounded-xl shadow-md border hover:shadow-lg hover:shadow-blue-200 cursor-pointer transition-all duration-300 hover:scale-[1.03] text-center"
              >
                <div className="text-3xl text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div className="font-semibold text-gray-800">{category.name}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
