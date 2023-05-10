import Navbar from "./Navbar";
import {
  Kzna,
  Polygon,
  BNB,
  Down,
  PZSH,
  Swapicon,
  Success,
} from "../assets/Swap/assets";
import { useState } from "react";
const Swap1 = () => {
  const [swapped, setSwapped] = useState(false);

  const viewSwapped = () => {
    setSwapped((prev) => !prev);
  };
  return (
    <>
      <div className="w-5/6 font-Open-sans h-full">
        <Navbar />
        <div className="my-[4%]">
          <h3 className="font-semibold text-3xl ml-4">Swap</h3>
          {swapped ? (
            <>
              <div className="flex justify-center items-center my-[7%]">
              <div className="flex flex-col bg-navy w-3/5 rounded-xl py-10 justify-center  items-center">
                <div>
                  <img src={Success} alt="Success" />
                </div>
                <p className="text-3xl text-green2 my-2">Successful !</p>
                <p className="font-hairline text-lg">Your risk tokenized loan was swapped successfully</p>
              </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center my-[3%] items-center">
                <div className="w-3/5">
                  <div>
                    <p className="text-grey">You sell</p>
                    <div className="flex w-full">
                      <div className="rounded-md bg-navy border-grey border px-3 py-2 flex w-3/4 mr-2">
                        <div className="flex items-center">
                          <img src={PZSH} alt="Pezesha icon" className="" />
                          <p className="text-base font-semibold mx-1">PZSH</p>
                          <img src={Down} alt="" />
                        </div>
                        <input
                          type="number"
                          className="bg-transparent text-right w-full my-1 ml-5 mr-2 outline-none"
                          placeholder="0.00"
                        />
                      </div>

                      <button className="px-3 flex rounded-md items-center w-1/4 bg-green">
                        <img src={BNB} alt="Bnb" />
                        <p className="font-semibold mx-2">BSC</p>
                        <img src={Down} alt="" className="mx-3" />
                      </button>
                    </div>
                    <div className="w-2/3 mt-2 flex justify-between">
                      <p className="font-semibold">Balance: 100 PZSH</p>
                      <p className="text-green5 font-semibold">Select Max</p>
                    </div>
                  </div>
                  <div className="flex justify-center h-16 items-center my-[4%] ">
                    <img src={Swapicon} alt="" className="h-full" />
                  </div>
                  <div>
                    <p className="text-grey">You sell</p>
                    <div className="flex ">
                      <div className="rounded-md bg-navy border-grey border px-3 py-2 flex w-3/4 mr-2">
                        <div className="flex items-center">
                          <img src={Kzna} alt="Pezesha icon" className="" />
                          <p className="text-base font-semibold mx-1">KZNA</p>
                          <img src={Down} alt="" />
                        </div>
                        <input
                          type="number"
                          className="bg-transparent text-right w-full my-1 ml-5 mr-2 outline-none"
                          placeholder="0.00"
                        />
                      </div>

                      <button className="px-3 flex rounded-md items-center w-1/4 bg-green">
                        <img src={Polygon} alt="Polygon" />
                        <p className="font-semibold mx-2">Polygon</p>
                        <img src={Down} alt="" className="mx-3" />
                      </button>
                    </div>
                    <div className="w-2/3 mt-2 flex justify-between">
                      <p className="font-semibold">Balance: 500 PZSH</p>
                    </div>
                  </div>
                  <div className="w-full rounded-md bg-navy mt-7 px-5 py-4">
                    <div className="flex justify-between text-lg py-3 border-b-2 border-grey">
                      <p>Fee:</p>
                      <p>0.1%</p>
                    </div>
                    <div className="flex justify-between text-lg py-3 border-b-2 border-grey">
                      <p>Amount Recieved:</p>
                      <p>0 KZNA</p>
                    </div>
                    <div className="flex justify-between text-lg py-3">
                      <p>Rate:</p>
                      <p>-</p>
                    </div>
                  </div>
                  <button
                    className="w-full bg-green mt-4 rounded-md py-3 text-lg"
                    onClick={viewSwapped}
                  >
                    SWAP
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Swap1;
