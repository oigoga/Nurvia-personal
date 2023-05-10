/* eslint-disable react/prop-types */
import {
  Logo,
  Dashboard,
  Earn,
  Borrow,
  Deal,
  Swap,
  Help,
} from "../assets/General/assets";
import { Dashboard1 } from "../assets/Dashboard/assets";
import { Earn1 } from "../assets/Earn/assets";
import { Borrow1 } from "../assets/Borrow/assets";
import { Deal1 } from "../assets/Deal/assets";
import { Swap1 } from "../assets/Swap/assets";
import { NavLink } from "react-router-dom";

const Sidebar = ({ page }) => {
  return (
    <>
      {page === "dashboard" && (
        <div className="flex flex-col  items-center w-1/6">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="font-semibold mt-4">
            <NavLink to="/">
            <div className="flex my-2 bg-gradient-to-r from-navy to-transparent  rounded-md p-3">
              <img src={Dashboard1} alt="" className="h-1/3 mt-1" />
              <p className="ml-5 font-bold">Dashboard</p>
            </div>
            </NavLink>
            <NavLink to="/earn">
              <div className="flex my-2 p-3 text-green2 ">
                <img src={Earn} alt="" className="h-1/3 mt-1" />
                <p className="ml-5">Earn</p>
              </div>
            </NavLink>
            <NavLink to="/deals">
              <div className="flex my-2 p-3  text-green2">
                <img src={Deal} alt="" />
                <p className="ml-4">Deals</p>
              </div>
            </NavLink>
            <NavLink to="/borrow">
              <div className="flex my-2 p-3  text-green2">
                <img src={Borrow} alt="" />
                <p className="ml-4">Borrow</p>
              </div>
            </NavLink>
            <NavLink to="/swap">
              <div className="flex my-2 p-3  text-green2">
                <img src={Swap} alt="" />
                <p className="ml-4">Swap</p>
              </div>
            </NavLink>
          </div>
          <hr className="text-green2 w-3/4 flex justify-center mt-5" />

          <div className="font-semibold mt-8 -ml-12">
            <div className="flex text-green2">
              <img src={Help} alt="" />
              <p className="ml-4">Help</p>
            </div>
          </div>
        </div>
      )}
      {page === "earn" && (
        <div className="flex flex-col  items-center w-1/6">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="font-semibold mt-4">
           <NavLink to="/">
           <div className="flex my-2 text-green2 p-3">
              <img src={Dashboard} alt="" className="h-1/3 mt-1" />
              <p className="ml-5 font-bold">Dashboard</p>
            </div>
           </NavLink>
            <NavLink to="/earn">
            <div className="flex my-2 bg-gradient-to-r from-navy to-transparent  rounded-md p-3">
              <img src={Earn1} alt="" className="h-1/3 mt-1" />
              <p className="ml-5">Earn</p>
            </div>
            </NavLink>
          <NavLink to="/deals">
          <div className="flex my-2 p-3  text-green2">
              <img src={Deal} alt="" />
              <p className="ml-4">Deals</p>
            </div>
          </NavLink>
            <NavLink to="/borrow">
            <div className="flex my-2 p-3  text-green2">
              <img src={Borrow} alt="" />
              <p className="ml-4">Borrow</p>
            </div>
            </NavLink>
            <NavLink to="/swap">
            <div className="flex my-2 p-3  text-green2">
              <img src={Swap} alt="" />
              <p className="ml-4">Swap</p>
            </div>
            </NavLink>
          </div>
          <hr className="text-green2 w-3/4 flex justify-center mt-5" />

          <div className="font-semibold mt-8 -ml-12">
            <div className="flex text-green2">
              <img src={Help} alt="" />
              <p className="ml-4">Help</p>
            </div>
          </div>
        </div>
      )}
      {page === "deals" && (
        <div className="flex flex-col  items-center w-1/6">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="font-semibold mt-4">
           <NavLink to="/">
           <div className="flex my-2 text-green2 p-3">
              <img src={Dashboard} alt="" className="h-1/3 mt-1" />
              <p className="ml-5 font-bold">Dashboard</p>
            </div>
           </NavLink>
            <NavLink to="/earn">
            <div className="flex my-2 p-3 text-green2">
              <img src={Earn} alt="" className="h-1/3 mt-1" />
              <p className="ml-5">Earn</p>
            </div>
            </NavLink>
            <NavLink to="/deals">
            <div className="flex my-2 bg-gradient-to-r from-navy to-transparent  rounded-md p-3">
              <img src={Deal1} alt="" />
              <p className="ml-4">Deals</p>
            </div>
            </NavLink>
            <NavLink to="/borrow">
            <div className="flex my-2 p-3  text-green2">
              <img src={Borrow} alt="" />
              <p className="ml-4">Borrow</p>
            </div>
            </NavLink>
            <NavLink to="/swap">
            <div className="flex my-2 p-3  text-green2">
              <img src={Swap} alt="" />
              <p className="ml-4">Swap</p>
            </div>
            </NavLink>
          </div>
          <hr className="text-green2 w-3/4 flex justify-center mt-5" />

          <div className="font-semibold mt-8 -ml-12">
            <div className="flex text-green2">
              <img src={Help} alt="" />
              <p className="ml-4">Help</p>
            </div>
          </div>
        </div>
      )}
      {page === "borrow" && (
        <div className="flex flex-col  items-center w-1/6">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="font-semibold mt-4">
           <NavLink to="/">
           <div className="flex my-2 text-green2 p-3">
              <img src={Dashboard} alt="" className="h-1/3 mt-1" />
              <p className="ml-5 font-bold">Dashboard</p>
            </div>
           </NavLink>
            <NavLink to="/earn">
            <div className="flex my-2 p-3 text-green2">
              <img src={Earn} alt="" className="h-1/3 mt-1" />
              <p className="ml-5">Earn</p>
            </div>
            </NavLink>
            <NavLink to="/deals">
            <div className="flex my-2 p-3 text-green2">
              <img src={Deal} alt="" />
              <p className="ml-4">Deals</p>
            </div>
            </NavLink>
            <NavLink to="/borrow">
            <div className="flex my-2 bg-gradient-to-r from-navy to-transparent  rounded-md p-3">
              <img src={Borrow1} alt="" />
              <p className="ml-4">Borrow</p>
            </div>
            </NavLink>
           <NavLink to="/swap">
           <div className="flex my-2 p-3  text-green2">
              <img src={Swap} alt="" />
              <p className="ml-4">Swap</p>
            </div>
           </NavLink>
          </div>
          <hr className="text-green2 w-3/4 flex justify-center mt-5" />

          <div className="font-semibold mt-8 -ml-12">
            <div className="flex text-green2">
              <img src={Help} alt="" />
              <p className="ml-4">Help</p>
            </div>
          </div>
        </div>
      )}
      {page === "swap" && (
        <div className="flex flex-col  items-center w-1/6">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="font-semibold mt-4">
            <NavLink to="/">
            <div className="flex my-2 text-green2 p-3">
              <img src={Dashboard} alt="" className="h-1/3 mt-1" />
              <p className="ml-5 font-bold">Dashboard</p>
            </div>
            </NavLink>
            <NavLink to="/earn">
            <div className="flex my-2 p-3 text-green2">
              <img src={Earn} alt="" className="h-1/3 mt-1" />
              <p className="ml-5">Earn</p>
            </div>
            </NavLink>
            <NavLink to="/deals">
            <div className="flex my-2 p-3 text-green2">
              <img src={Deal} alt="" />
              <p className="ml-4">Deals</p>
            </div>
            </NavLink>
            <NavLink to="/borrow">
            <div className="flex my-2 p-3 text-green2 ">
              <img src={Borrow} alt="" />
              <p className="ml-4">Borrow</p>
            </div>
            </NavLink>
            <NavLink to="/swap">
            <div className="flex my-2 bg-gradient-to-r from-navy to-transparent  rounded-md p-3">
              <img src={Swap1} alt="" />
              <p className="ml-4">Swap</p>
            </div>
            </NavLink>
          </div>
          <hr className="text-green2 w-3/4 flex justify-center mt-5" />

          <div className="font-semibold mt-8 -ml-12">
            <div className="flex text-green2">
              <img src={Help} alt="" />
              <p className="ml-4">Help</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
