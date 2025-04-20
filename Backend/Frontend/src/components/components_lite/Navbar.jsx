import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res?.data?.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#fef4fc] via-[#f7f1fe] to-[#fefcff] shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-16">
        <div>
          <h1 className="text-2xl font-bold tracking-wide logo-animation">
            <span className="text-[#6B3AC2]">Job</span>
            <span className="text-[#FA4F09]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-6 text-gray-800 font-medium text-sm">
            {user?.role === "Recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies" className="hover:text-[#6B3AC2] transition">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/admin/jobs" className="hover:text-[#6B3AC2] transition">
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Home" className="hover:text-[#6B3AC2] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Browse" className="hover:text-[#6B3AC2] transition">
                    Browse
                  </Link>
                </li>
                <li>
                  <Link to="/Jobs" className="hover:text-[#6B3AC2] transition">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/Creator" className="hover:text-[#6B3AC2] transition">
                    Creators
                  </Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="hover:border-[#6B3AC2] hover:text-[#6B3AC2] transition-all"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-[#FA4F09] hover:bg-[#d94308] transition-all">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-[#6B3AC2] hover:ring-[#FA4F09] transition duration-200">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="User Avatar" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 shadow-lg rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="ring-2 ring-[#6B3AC2]">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="User Avatar" />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-800">{user?.fullname}</h3>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-gray-700">
                  {user?.role === "Student" && (
                    <div className="flex items-center gap-2 hover:text-[#6B3AC2] transition cursor-pointer">
                      <User2 />
                      <Link to="/Profile">
                        <Button variant="link" className="p-0 text-sm">
                          Profile
                        </Button>
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center gap-2 hover:text-red-600 transition cursor-pointer">
                    <LogOut />
                    <Button
                      onClick={logoutHandler}
                      variant="link"
                      className="p-0 text-sm"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      {/* Internal CSS for Logo Animation */}
      <style>
        {`
          @keyframes bounceInFade {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(-20px);
            }
            60% {
              opacity: 1;
              transform: scale(1.05) translateY(5px);
            }
            100% {
              transform: scale(1) translateY(0);
            }
          }

          .logo-animation {
            animation: bounceInFade 1.2s ease-out;
            transition: transform 0.3s;
          }

          .logo-animation:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
