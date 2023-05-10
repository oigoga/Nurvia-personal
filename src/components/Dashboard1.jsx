import Navbar from "../components/Navbar";
import { Backer, Senior, Sort } from "../assets/General/assets";
import { Tx, Pic } from "../assets/Dashboard/assets";
import { useState } from "react";
import { holdingdata } from "./data";
const Dashboard1 = () => {
  const [holdings, setHoldings] = useState(false);

  const viewHoldings = () => {
    setHoldings((prev) => !prev);
  };
  return (
    <>
      <div className="w-5/6 font-Open-sans ">
        <Navbar />
        <div className="mt-10">
          <div className="flex justify-between">
            <h4 className="font-bold text-2xl">Portfolio Summary</h4>
            <p>See All</p>
          </div>
          <div className="w-full flex mt-3">
            <div className="w-1/2 bg-navy mr-3 rounded-md px-3 py-4">
              <h5 className="text-grey mb-2 font-semibold">Backer Positions</h5>
              <p className="font-bold text-xl my-2 ">$53,863.9</p>
              <div className="bg-green3 bg-opacity-20 p-1 mt-2 rounded-md w-1/6 text-center text-green4">
                2.5%
              </div>
            </div>
            <div className="w-1/2 bg-navy ml-3 rounded-md px-3 py-4">
              <h5 className="text-grey font-semibold">Senior Pool Position</h5>
              <p className="font-bold text-xl mt-2 ">$282.36</p>
              <div className="bg-green3 bg-opacity-20 p-1 mt-2 rounded-md w-1/6 text-center text-green4">
                0.8%
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between mb-2">
            <h4 className="font-bold text-2xl">Overview</h4>
            <p>See All</p>
          </div>
          <div className="w-full bg-navy rounded-lg px-10 py-8">
            {holdings ? (
              <>
                <div className="w-full flex justify-between ">
                  <div className="border border-violet rounded-md flex ">
                    <button
                      className={`${
                        holdings
                          ? " px-4 py-2 text-violet outline-none border-0 "
                          : "border border-white rounded-md outline-none"
                      }  `}
                      onClick={viewHoldings}
                    >
                      My Activity
                    </button>
                    <button
                      className={`${
                        holdings
                          ? "border border-white rounded-md"
                          : "border-0  text-violet outline-none "
                      } px-4 py-2 `}
                      onClick={viewHoldings}
                    >
                      Holdings
                    </button>
                  </div>
                  <div className="border border-violet rounded-md">
                    <button className="px-3 py-2">Monthly</button>
                    <button className=" px-3 py-2">Weekly</button>
                    <button className="border border-white rounded-lg px-3 py-2">
                      Today
                    </button>
                  </div>
                </div>
                <div className="my-5">
                  <div className="w-full p-3 flex justify-between bg-bg-color rounded-md rounded-b-none border-b-2 border-green2">
                    <div className="w-1/4 flex items-center">
                      Junior Pool{" "}
                      <img src={Sort} alt="" className="h-3  w-2 ml-1 " />
                    </div>
                    <div className="w-1/5 flex justify-center items-center">
                      Status{" "}
                      <img src={Sort} alt="" className="h-3  w-2 ml-1 " />
                    </div>
                    <div className="w-1/5 flex justify-center items-center">
                      Amount{" "}
                      <img src={Sort} alt="" className="h-3  w-2 ml-1 " />
                    </div>
                    <div className="w-1/4 flex justify-center items-center">
                      Date <img src={Sort} alt="" className="h-3  w-2 ml-1 " />
                    </div>
                    <div className="w-1/6 justify-center flex items-center">
                      Tx <img src={Sort} alt="" className="h-3  w-2 ml-1 " />
                    </div>
                  </div>
                 <div className="my-4">
                 {holdingdata.map((item) => (
                    <div key={item.id} className="my-3  flex justify-between">
                      <div className="flex w-1/4 items-center">
                        <img src={Pic} alt="" />
                        <div className="ml-2">
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-grey text-sm">{item.desc}</p>
                        </div>
                      </div>
                      <div className="w-1/5 flex justify-center items-center">
                        <p>{item.status}</p>
                      </div>
                      <div className="w-1/5 flex justify-center items-center">
                        <p>{item.amount}</p>
                      </div>
                      <div className="w-1/4 flex justify-center items-center">
                        <p>{item.date}</p>
                      </div>
                      <div className="w-1/6 flex justify-center items-center">
                        <img src={Tx} alt="" />
                      </div>
                    </div>
                  ))}
                 </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full flex justify-between ">
                  <div className="border border-violet rounded-md flex ">
                    <button
                      className="border border-white rounded-lg px-4 py-2"
                      onClick={viewHoldings}
                    >
                      My Activity
                    </button>
                    <button
                      className={`${
                        holdings ? "border border-white rounded-md" : "border-0"
                      } px-4 py-2 text-violet outline-none `}
                      onClick={viewHoldings}
                    >
                      Holdings
                    </button>
                  </div>
                  <div className="border border-violet rounded-md">
                    <button className="px-3 py-2">Monthly</button>
                    <button className=" px-3 py-2">Weekly</button>
                    <button className="border border-white rounded-lg px-3 py-2">
                      Today
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center my-8">
                      <img src={Backer} alt="" />
                      <p className="text-lg ml-8">Backer Positions</p>
                    </div>
                    <p>06:24:45 AM</p>
                    <p>+$5,553</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={Senior} alt="" />
                      <p className="text-lg ml-8">Senior Pool Position</p>
                    </div>
                    <p className="-ml-12">06:24:45 AM</p>
                    <p className="">-$912</p>
                  </div>
                  <div></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
