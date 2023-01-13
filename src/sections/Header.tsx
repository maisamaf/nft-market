// component
import Navbar from "../components/Navbar";

// images
import vector1 from "../assets/vector.svg";
import vector2 from "../assets/vector2.svg";
import iconSearch from "../assets/search-icon.svg";
import ritterLogo from "../assets/brands/ritter-sport.svg";
import nikeLogo from "../assets/brands/nike.svg";
import adidasLogo from "../assets/brands/adidas.svg";
import newHollandLogo from "../assets/brands/new-holland.svg";
import squares from "../assets/squares.svg";

const brands = [ritterLogo, nikeLogo, adidasLogo, newHollandLogo];

export default function Header() {
  return (
    <header className="w-full h-full pb-20 md:pb-0 items-center justify-center bg-background overflow-hidden">
      <Navbar />
      <div className="h-full flex flex-col items-center justify-center text-gray-100">
        <div className="relative w-full space-y-8 flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 bottom-0 hidden md:block">
            <img src={squares} alt="" />
          </div>
          <p className="uppercase">Non Fungible Tokens</p>
          <h1 className="text-4xl md:text-8xl text-dark-100 font-black">
            <span className="text-start md:-ml-4">A new NFT</span>
            <img src={vector1} alt="" className="inline h-16" />
            <br />
            <img src={vector2} alt="" className="inline h-12 ml-8" />
            <span className="ml-6">Experience</span>
          </h1>
          <p className="mt-6">Discover, collect and sell</p>
          <div className="relative w-full px-5 py-3 bg-white border rounded-xl md:max-w-fit">
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="relative w-full md:w-60">
                <input
                  type="text"
                  id="email-address-icon"
                  className="w-full px-2 py-3 text-sm font-normal text-gray-900 border-none rounded-xl outline-none focus:ring-0 placeholder-gray-50 peer ring-0 focused:ring-0 "
                  placeholder="Items, collection and creators"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      width="1"
                      height="28"
                      viewBox="0 0 1 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        opacity="0.25"
                        x1="0.5"
                        y1="2.18557e-08"
                        x2="0.499999"
                        y2="28"
                        stroke="#1F2A47"
                      />
                    </svg>
                  </div>
                  <select
                    id="category"
                    className=" text-gray-500 border-none ring-0 outline-none rounded-sm focus:ring-0 text-xs block w-full md:w-fit p-2.5 pl-10 pr-8"
                  >
                    <option>Category</option>
                    <option value="photography">Photography</option>
                    <option value="games">Games</option>
                    <option value="music">Music</option>
                  </select>
                </div>
                <button className="ml-6 md:w-fit">
                  <img src={iconSearch} alt="Search Icon" className="h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-14 my-24">
          {brands.map((brand) => {
            return <img src={brand} alt="" />;
          })}
        </div>
      </div>
    </header>
  );
}
