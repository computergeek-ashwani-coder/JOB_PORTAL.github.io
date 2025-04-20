import React from 'react';
import Navbar from '../components_lite/Navbar';
import ashwani from './Ashwani.jpg';
import lucky from './Lucky.jpg';     // Make sure this image exists in the same folder
import krish from './Krish.jpg';     // Make sure this image exists in the same folder

const Creator = () => {
  const creators = [
    {
      name: "Ashwani Ranjan",
      title: "Full Stack Developer",
      regNo: "202222700100",
      quote: "Turning ideas into interactive and meaningful digital experiences.",
      img: ashwani,
      link: "https://www.instagram.com/ashwaniranjan999/",
    },
    {
      name: "Lucky Raj",
      title: "Backend Specialist",
      regNo: "202222700101",
      quote: "Efficient systems are built on elegant code and robust logic.",
      img: lucky,
      link: "https://www.instagram.com/", // Add real link if available
    },
    {
      name: "Krish Raj",
      title: "UI/UX Designer",
      regNo: "202222700102",
      quote: "Design is intelligence made visible.",
      img: krish,
      link: "https://www.instagram.com/", // Add real link if available
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="flex flex-wrap justify-center gap-8 items-center min-h-screen bg-gray-100 px-4 py-10">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={creator.img}
              alt={creator.name}
              className="w-40 h-40 object-cover mx-auto rounded-full shadow-md border-4 border-indigo-500"
            />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{creator.name}</h3>
            <p className="text-indigo-600 font-semibold">{creator.title}</p>
            <p className="text-sm text-gray-500 mb-2">Registration No: {creator.regNo}</p>
            <p className="text-gray-600 text-sm mt-2 italic">“{creator.quote}”</p>
            <a
              href={creator.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
            >
              Visit Portfolio
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creator;
