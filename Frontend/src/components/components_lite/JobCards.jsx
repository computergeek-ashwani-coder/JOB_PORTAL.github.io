import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="group transition-all duration-300 transform hover:scale-[1.02] hover:shadow-blue-200 hover:border-blue-300 p-6 bg-white border border-gray-200 rounded-2xl shadow-md cursor-pointer hover:shadow-xl"
    >
      {/* Header */}
      <div className="mb-2">
        <p className="text-sm text-gray-500">India</p>
        <h1 className="text-xl font-semibold text-gray-800">{job.name}</h1>
      </div>

      {/* Title & Description */}
      <div className="my-2">
        <h2 className="text-lg font-bold text-gray-700">{job.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 mt-4">
        <Badge
          className="text-blue-700 bg-blue-100 hover:bg-blue-200 font-medium px-3 py-1 rounded-full transition"
          variant="ghost"
        >
          {job.position} Open Positions
        </Badge>
        <Badge
          className="text-orange-700 bg-orange-100 hover:bg-orange-200 font-medium px-3 py-1 rounded-full transition"
          variant="ghost"
        >
          {job.salary} LPA
        </Badge>
        <Badge
          className="text-purple-700 bg-purple-100 hover:bg-purple-200 font-medium px-3 py-1 rounded-full transition"
          variant="ghost"
        >
          {job.location}
        </Badge>
        <Badge
          className="text-gray-800 bg-gray-100 hover:bg-gray-200 font-medium px-3 py-1 rounded-full transition"
          variant="ghost"
        >
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
