import { BNB, Search, Down } from "../assets/General/assets";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between pt-2">
        <div className="w-1/2 ml-5 rounded-md bg-navy flex">
          <div className="flex items-center pl-3 pointer-events-none">
            <img src={Search} alt="" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-transparent w-full my-1 ml-5 mr-2 outline-none"
            placeholder="Search"
          />
        </div>
        <div className=" flex h-10 items-center">
          <img src={BNB} alt="" className="h-full w-10" />
          <div className="mx-2">
            <button className="bg-green2 p-2 rounded-md">Connect Wallet</button>
          </div>
          <img src={Down} alt="" className="w-5 flex  h-1/3" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
