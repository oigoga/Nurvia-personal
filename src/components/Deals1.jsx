import Navbar from "./Navbar";
import { Sort, Down } from "../assets/General/assets";
import { Nurvia, Dots, Filter } from "../assets/Deal/assets";
import { dealdata } from "./deals";
// import { useState } from "react";
const Deals1 = () => {
  // const [filter, setFilter] = useState(false);

  // const viewFilter = () => {
  //   setFilter((prev) => !prev);
  // };
  return (
    <div className="w-5/6 font-Open-sans h-full">
      <Navbar />
      <div className="my-[3%]">
        <div>
          <h5 className="text-3xl my-1 font-semibold">Senior Pool</h5>
          <p className="text-md mt-1 text-grey">
            The simple, lower risk, lower return option. Capital is
            Automatically Diversified across Borrower Pools
          </p>
          <div className=" bg-green flex justify-between rounded-lg rounded-b-none py-4 px-5 mt-3">
            <div className="flex items-center w-1/4">
              <p className="font-semibold">Pools</p>
              <img src={Sort} alt="" className="h-3 w-3 ml-1" />
            </div>
            <div className="flex items-center w-1/6">
              <p className="font-semibold">Est. APY</p>
              <img src={Sort} alt="" className="h-3 w-3 ml-1" />
            </div>
            <div className="flex items-center w-1/6">
              <p className="font-semibold">Pool Limit</p>
              <img src={Sort} alt="" className="h-3 w-3 ml-1" />
            </div>
            <div className="flex  items-center w-1/4">
              <p className="font-semibold">Status</p>
              <img src={Sort} alt="" className="h-3 w-3 ml-1" />
            </div>
          </div>
          <div className=" bg-navy flex justify-between rounded-lg rounded-b-none py-2 px-5 mt-3">
            <div className="flex items-center w-1/4">
              <img src={Nurvia} alt="" className="  " />
              <p className="ml-1">Nurvia Senior Pool</p>
            </div>
            <div className="flex items-center w-1/6">
              <p className="font-semibold">15.00% BUSD</p>
            </div>
            <div className="flex items-center w-1/6">
              <p className="font-semibold">Unlimited</p>
            </div>
            <div className="w-1/4 flex justify-between items-center">
              <div className="flex w-5/6 bg-gradient-to-r from-violet2 to-transparent h-7 rounded-xl rounded-r-none justify-center  items-center ">
                <p className="font-semibold">Open</p>
              </div>
              <img src={Dots} alt="" className="h-7" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <h5 className="text-3xl my-1 font-semibold">Deals</h5>
            <button className="" ><div className="flex w-1/8 h-2/3 border py-2 px-3 items-center rounded-md">
              <img src={Filter} alt="" className="h-6 mx-1 w-6" />
              <p className="mx-2">Filter by</p>
              <img src={Down} alt="" className="" />
            </div></button>
          </div>
          <p className="text-md mt-1 text-grey">
            Investing in the Senior liquidity pool means you automatically have
            exposure to all senior tranches of all deals.
          </p>
          <div className=" bg-green flex justify-between rounded-lg rounded-b-none py-4 px-5 mt-3">
            <div className="flex items-center w-1/4">
              <p className="font-semibold">Pools</p>
              <img src={Sort} alt="" className="h-3 w-3 ml-1" />
            </div>
            <div className="flex items-center w-1/6">
              <p className="font-semibold">Est. APY</p>
              <img src={Sort} alt="" className="h-3 w-3 ml-1" />
            </div>
            <div className="flex items-center w-1/6">
              <p className="font-semibold">Region</p>
              <img src={Sort} alt="" className="h-3 w-3 ml-1" />
            </div>
            <div className="flex justify-between  items-center w-1/3">
              <div className="flex items-center">
                <p className="font-semibold">Asset</p>
                <img src={Sort} alt="" className="h-3 w-3 ml-1" />
              </div>
              <div className="flex items-center">
                <p className="font-semibold">Status</p>
                <img src={Sort} alt="" className="h-3 w-3 ml-1" />
              </div>
            </div>
          </div>
          <div className=" bg-navy flex flex-col justify-between rounded-lg rounded-t-none py-2 px-5 ">
            {dealdata.map((deal) => (
              <>
                <div className="flex justify-between py-3 my-1">
                  <div className="flex items-start w-1/4">
                    <img src={deal.image} alt="" className=" mr-1 " />
                    <div className="ml-1 w-2/3">
                    <p className="font-semibold">{deal.title}</p>
                    <p className="text-grey text-xs">{deal.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center w-1/6">
                    <p className="font-semibold">{deal.est}</p>
                    <p className="text-grey text-xs">{deal.estdata}</p>
                  </div>
                  <div className="flex items-center w-1/6">
                    <p className="font-semibold">{deal.region}</p>
                  </div>
                  <div className="w-1/3 flex justify-between items-center">
                    <div className="flex justify-between w-full bg-gradient-to-r from-violet2 to-transparent h-7 rounded-xl rounded-r-none   items-center ">
                      <div className="h-full rounded-xl text-center bg-green5 w-2/3 text-xs flex justify-center items-center">
                        {deal.asset}
                      </div>
                      <div className="w-1/2 text-center">{deal.assetdesc}</div>
                      <img src={Dots} alt="" className="h-7" />
                      {/* <div>{deal.status}</div> */}
                    </div>
                    
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals1;
