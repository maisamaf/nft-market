import HorizontalCard from "../components/HorizontalCard";
import image6 from "../assets/posters/image-6.svg";
import image7 from "../assets/posters/image-7.svg";
import image8 from "../assets/posters/image-8.svg";
import image9 from "../assets/posters/image-9.svg";

// posters
import image1 from "../assets/posters/image-1.svg";
import image2 from "../assets/posters/image-2.svg";
import image3 from "../assets/posters/image-3.svg";
import image4 from "../assets/posters/image-4.svg";
import image5 from "../assets/posters/image-5.svg";

// icons
import hand from "../assets/hand.png";
import Card from "../components/Card";
const topNFT = [
  {
    thumbnail: image6,
    title: "Vulputate velit viverra volutpat volutpat tristique",
    timeLeft: "22:29",
    price: "1.25 ETH",
    bids: "101 people are bidding",
  },
  {
    thumbnail: image7,
    title: "Egestas blandit sit egestas non sed. Purus semper",
    timeLeft: "10:28",
    price: "1.30 ETH",
    bids: "28 people are bidding",
  },
  {
    thumbnail: image8,
    title: "Id ut consequat netus nec vel amet ut porta in augue",
    timeLeft: "11:04",
    price: "1.5 ETH",
    bids: "95 people are bidding",
  },
  {
    thumbnail: image9,
    title: "Sed et nibh felis integer tellus turpin",
    timeLeft: "09:28",
    price: "1.2 ETH",
    bids: "28 people are bidding",
  },
];

const auctions = [
  {
    thumbnail: image1,
    title: "Fames habitasse risus ultricies tortor sit",
    price: "3.19 ETH",
    timeLeft: "12:15 min left",
    peopleBidding: "19 People are bidding",
    likes: 120,
    className: { width: "w-[12rem]", height: "h-[18rem]" },
  },
  {
    thumbnail: image2,
    title: "Senectus adipiscing nascetur accumsan etiam",
    price: "1.63 ETH",
    timeLeft: "37:01 min left",
    peopleBidding: "12 People are bidding",
    likes: 98,
    className: { width: "w-[12rem]", height: "h-[18rem]" },
  },
  {
    thumbnail: image3,
    title: "Dui accumsan leo vestibulum ornare eu",
    price: "1.11 ETH",
    timeLeft: "22:59 min left",
    peopleBidding: "101 People are bidding",
    likes: 570,
    className: { width: "w-[12rem]", height: "h-[18rem]" },
  },
  {
    thumbnail: image4,
    title: "Vulputate felis purus viverra morbi facilisi eget",
    price: "3.19 ETH",
    timeLeft: "02:41 min left",
    peopleBidding: "35 People are bidding",
    likes: 120,
    className: { width: "w-[12rem]", height: "h-[18rem]" },
  },
  {
    thumbnail: image5,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    price: "2.55 ETH",
    timeLeft: "57:15 min left",
    peopleBidding: "14 People are bidding",
    likes: 54,
    className: { width: "w-[12rem]", height: "h-[18rem]" },
  },
];
export default function Sales() {
  return (
    <section className="w-full md:w-8/12 mx-auto pb-16">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full border border-gray-50 md:rounded-xl p-4 md:p-8 md:w-[25rem]">
          <h3 className="font-bold text-3xl mb-8">
            Check out the hottest Sale offers
          </h3>
          <div className="flex flex-col">
            <div className="flex overflow-x-auto gap-2">
              {auctions.map(
                ({
                  thumbnail,
                  title,
                  price,
                  timeLeft,
                  peopleBidding,
                  likes,
                  className,
                }) => {
                  return (
                    <Card
                      key={title}
                      thumbnail={thumbnail}
                      title={title}
                      price={price}
                      timeLeft={timeLeft}
                      peopleBidding={peopleBidding}
                      likes={likes}
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
        <div className="bg-dark-100 md:rounded-xl w-full md:w-[25rem] pb-8 md:pb-0 mt-16 md:mt-0">
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
              className="bg-gradient-to-r py-2 rounded-xl border border-purple-dark border-b-4 border-l-2 shadow-lg w-full from-[#4745D0] to-purple-dark text-white tex-sm"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="border border-gray-50 md:rounded-xl p-4 md:p-8 w-full md:w-[25rem]">
          <h3 className="font-bold text-3xl mb-8">Top NFT at a lower price</h3>
          <div className="flex flex-col gap-4">
            {topNFT.map(({ thumbnail, title, timeLeft, price, bids }) => {
              return (
                <HorizontalCard
                  key={title}
                  thumbnail={thumbnail}
                  title={title}
                  timeLeft={timeLeft}
                  price={price}
                  bids={bids}
                />
              );
            })}
            <button className="w-full py-2 text-sm text-gray-100 border border-gray-100 mt-8 rounded-xl">
              Show me more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
