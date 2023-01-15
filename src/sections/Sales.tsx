// data
import { sales, topNFT } from "../data";

// component
import HorizontalCard from "../components/HorizontalCard";

// icons
import hand from "../assets/icons/hand.png";
import Card from "../components/Card";

export default function Sales() {
  return (
    <section className="w-full md:w-8/12 mx-auto pb-16">
      <div className="grid md:grid-cols-3 grid-cols-1 overflow-x-scroll gap-6">
        <div className="border border-gray-50 md:rounded-xl p-4 md:p-8">
          <h3 className="font-bold text-3xl mb-8">
            Check out the hottest Sale offers
          </h3>
          <div className="flex flex-col">
            <div className="flex overflow-x-auto gap-2">
              {sales
                .slice(0, 5)
                .map(
                  (
                    {
                      thumbnail,
                      title,
                      price,
                      timeLeft,
                      peopleBidding,
                      className,
                    },
                    index
                  ) => {
                    return (
                      <Card
                        key={index}
                        thumbnail={thumbnail}
                        title={title}
                        price={price}
                        timeLeft={timeLeft}
                        peopleBidding={peopleBidding}
                        className={className}
                      />
                    );
                  }
                )}
            </div>
            <button className="w-full py-2 text-sm text-gray-100 border border-gray-100 mt-8 rounded-xl">
              Show me more
            </button>
          </div>
        </div>
        <div className="bg-dark-100 md:rounded-xl pb-8 md:pb-0 mt-16 md:mt-0">
          <div className="-mt-16">
            <img src={hand} alt="" className="w-96" />
          </div>
          <div className="max-w-xs px-6 mt-4">
            <h3 className="text-white font-bold text-2xl">
              Get started creating & selling your NFTs
            </h3>
            <p className="text-gray-50 text-sm mt-2">
              Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
              Mi est sit.
            </p>
          </div>
          <div className=" mx-8 mt-8">
            <button
              type="button"
              className="w-full bg-gradient-to-r py-2 rounded-xl border border-purple-dark border-b-4 border-l-2 shadow-lg from-[#4745D0] to-purple-dark text-white tex-sm"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="border border-gray-50 md:rounded-xl p-4 md:p-8">
          <h3 className="font-bold text-3xl mb-8">Top NFT at a lower price</h3>
          <div className="flex flex-col gap-4">
            {topNFT.map(
              ({ thumbnail, title, timeLeft, price, isFavorite, bids }) => {
                return (
                  <HorizontalCard
                    key={title}
                    thumbnail={thumbnail}
                    title={title}
                    timeLeft={timeLeft}
                    price={price}
                    isFavorite={isFavorite}
                    bids={bids}
                  />
                );
              }
            )}
            <button className="w-full py-2 text-sm text-gray-100 border border-gray-100 mt-8 rounded-xl">
              Show me more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
