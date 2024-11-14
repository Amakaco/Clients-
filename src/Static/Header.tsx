import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="w-full h-[80px] bg-slate-50 flex items-center justify-center">
        <div className="w-[80%] h-full flex justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              {" "}
              <button className="w-[150px] h-[45px] rounded-md bg-slate-600 text-white font-semibold">
                Home
              </button>
            </Link>
          </div>
          <div className="  flex gap-10 items-center">
            <Link to={"/amaka"}>
              <button className="w-[150px] h-[45px] rounded-md font-semibold bg-slate-600 text-white">
                Amaka
              </button>
            </Link>
            <Link to={"/ibrahim"}>
              <button className="w-[150px] h-[45px] rounded-md font-semibold bg-slate-600 text-white">
                Ibrahim
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
