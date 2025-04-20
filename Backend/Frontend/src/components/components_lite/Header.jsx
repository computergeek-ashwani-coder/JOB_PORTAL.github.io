import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="header-container">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="flex flex-col gap-6">

          {/* Centered Tagline */}
          <div className="flex justify-center">
            <div className="tagline-badge">
              <PiBuildingOfficeBold className="icon" />
              <span>No.1 Job Hunt Website</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="main-heading">
            Search, Apply & <br />
            Get Your <span className="highlighted-text">Dream Job</span>
          </h2>

          {/* Subtitle */}
          <p className="subtitle">
            Start your hunt for the best, life-changing career opportunities <br />
            from here in your selected areas conveniently and get hired quickly.
          </p>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="search-input"
            />
            <Button
              onClick={searchjobHandler}
              className="search-button"
            >
              <Search className="search-icon" />
            </Button>
          </div>
        </div>
      </div>

      {/* Internal CSS for Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .header-container {
            background: linear-gradient(to right, #ffffff, #f1e5ff, #d9c4ff);
            padding: 4rem 0;
            animation: fadeIn 1.5s ease-out;
          }

          .tagline-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            color: #ff2d6e;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 999px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            font-size: 1rem;
            animation: fadeIn 1s ease-out;
          }

          .icon {
            color: #9c4dff;
            font-size: 1.5rem;
            margin-right: 0.5rem;
          }

          .main-heading {
            font-size: 3rem;
            font-weight: 800;
            color: #2d2d2d;
            line-height: 1.2;
            animation: fadeIn 2s ease-out;
          }

          .highlighted-text {
            color: #6a38c2;
          }

          .subtitle {
            font-size: 1.2rem;
            color: #636363;
            animation: fadeIn 2.5s ease-out;
            line-height: 1.6;
          }

          .search-bar {
            display: flex;
            max-width: 40rem;
            margin: 2rem auto 0;
            border-radius: 50px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            padding-left: 1rem;
            align-items: center;
            animation: fadeIn 3s ease-out;
          }

          .search-input {
            width: 100%;
            padding: 0.75rem;
            font-size: 1rem;
            border: none;
            border-radius: 50px;
            outline: none;
            color: #444;
            background-color: transparent;
          }

          .search-button {
            border-radius: 50px;
            background-color: #6a38c2;
            color: white;
            border: none;
            padding: 0.75rem 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .search-button:hover {
            background-color: #5a2aa6;
          }

          .search-icon {
            font-size: 1.2rem;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
