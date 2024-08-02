import Auctions from "./sections/Auctions";
import Header from "./sections/Header";

// images
import rightImage from "./assets/icons/right-image.png";
import leftImage from "./assets/icons/left-image.png";
import iconEdit from "./assets/icons/icon-edit.svg";
import iconTik from "./assets/icons/icon-tik.svg";

// sections
import Sales from "./sections/Sales";
import PopularAuctions from "./sections/PopularAuctions";
import Stats from "./sections/Stats";
import Footer from "./sections/Footer";
function App() {
  return (
    <div className="relative h-screen w-full overflow-x-hidden mx-auto">
      <Header />
      <Auctions />
      <section className="mx-4 md:w-8/12 md:mx-auto pt-10 pb-20">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex-1 font-thin flex flex-col justify-end">
            <p className="uppercase text-sm text-gray-100">Overline</p>
            <h2 className="text-4xl md:text-6xl mt-2 mb-4 font-semibold leading-tight">
              Sapien ipsum <br /> scelerisque <br /> convallis fusce
            </h2>
            <p className="text-gray-100 text-sm max-w-md">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
            <div className="flex gap-3 mt-8">
              <button
                type="button"
                className="bg-gradient-to-r rounded-xl font-normal from-[#4745D0] to-purple-dark text-sm text-white px-4 py-2"
              >
                Get started
              </button>
              <button
                type="button"
                className="rounded-xl border border-gray-100 text-sm font-normal text-gray-100 px-4 py-2"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <img src={rightImage} alt="" className="h-56 md:h-full" />
          </div>
        </div>
      </section>

      <Sales />

      <section className="mx-4 md:w-9/12 md:mx-auto pt-20 pb-32">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex-1 flex justify-start">
            <img src={leftImage} alt="" className="w-[90%]" />
          </div>
          <div className="flex-1 font-thin flex flex-col justify-start">
            <p className="uppercase text-sm text-gray-100">Overline</p>
            <h2 className="text-4xl md:text-6xl mt-2 mb-4 font-semibold leading-tight">
              Habitant tristique <br /> aliquam in vel
              <br />
              scelerisque
            </h2>
            <p className="text-gray-100 text-sm max-w-lg">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
            <ul className="mt-8 flex gap-12">
              <li className="list-none">
                <img src={iconEdit} alt="" />
                <h6 className="text-lg font-semibold mt-4 mb-1">
                  Sollicitudin sapien
                </h6>
                <p className="text-gray-100 text-sm">Cursus fermentum</p>
              </li>
              <li className="list-none">
                <img src={iconTik} alt="" />
                <h6 className="text-lg font-semibold mt-4 mb-1">
                  Pulvinar metus
                </h6>
                <p className="text-gray-100 text-sm">Nunc sed</p>
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              <button
                type="button"
                className="font-normal bg-gradient-to-r rounded-xl from-[#4745D0] to-purple-dark text-sm text-white px-4 py-2"
              >
                Get started
              </button>
              <button
                type="button"
                className="font-normal rounded-xl border border-gray-100 text-sm text-gray-100 px-4 py-2"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="pb-16" />

      <PopularAuctions />
      <Stats />

      <Footer />
    </div>
  );
}

export default App;
