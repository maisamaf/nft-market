import Auctions from "./sections/Auctions";
import Header from "./sections/Header";

// images
import iconBucket from "./assets/bucket.svg";
import Sales from "./sections/Sales";
function App() {
  return (
    <div className="relative h-screen w-full overflow-x-hidden mx-auto">
      <Header />
      <Auctions />
      <section className="mx-4 md:w-8/12 md:mx-auto pb-16">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex-1 font-thin flex flex-col justify-end">
            <p className="uppercase text-sm text-gray-100">Overline</p>
            <h2 className="text-4xl md:text-6xl mt-2 mb-4 font-bold leading-tight">
              Sapien ipsum <br /> scelerisque <br /> convallis fusce
            </h2>
            <p className="text-gray-100 text-sm max-w-md">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
            <div className="flex gap-3 mt-8">
              <button
                type="button"
                className="bg-gradient-to-r rounded-xl from-[#4745D0] to-purple-dark text-sm text-white px-4 py-2"
              >
                Get started
              </button>
              <button
                type="button"
                className="rounded-xl border border-gray-100 text-sm text-gray-100 px-4 py-2"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <img src={iconBucket} alt="" className="h-80" />
          </div>
        </div>
      </section>
      <Sales />
    </div>
  );
}

export default App;
