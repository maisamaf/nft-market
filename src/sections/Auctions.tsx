import Card from "../components/Card";

// posters
import image1 from "../assets/posters/image-1.svg";
import image2 from "../assets/posters/image-2.svg";
import image3 from "../assets/posters/image-3.svg";
import image4 from "../assets/posters/image-4.svg";
import image5 from "../assets/posters/image-5.svg";

// avatars
import woman1 from "../assets/avatars/woman-1.svg";
import woman2 from "../assets/avatars/woman-2.svg";
import man1 from "../assets/avatars/man-1.svg";
import man2 from "../assets/avatars/man-2.svg";

const avatars = [woman1, woman2, man1, man2];
const auctions = [
  {
    thumbnail: image1,
    avatars: avatars,
    title: "Mattis at diam lorem nisl nam sed sociis",
    price: "3.19 ETH",
    timeLeft: "12:15 min left",
    peopleBidding: "19 People are bidding",
    likes: 120,
    className: "snap-center",
  },
  {
    thumbnail: image2,
    avatars: avatars,
    title: "Senectus adipiscing nascetur accumsan etiam",
    price: "1.63 ETH",
    timeLeft: "37:01 min left",
    peopleBidding: "12 People are bidding",
    likes: 98,
    className: "snap-center",
  },
  {
    thumbnail: image3,
    avatars: avatars,
    title: "Dui accumsan leo vestibulum ornare eu",
    price: "1.11 ETH",
    timeLeft: "22:59 min left",
    peopleBidding: "101 People are bidding",
    likes: 570,
    className: "snap-center",
  },
  {
    thumbnail: image4,
    avatars: avatars,
    title: "Vulputate felis purus viverra morbi facilisi eget",
    price: "3.19 ETH",
    timeLeft: "02:41 min left",
    peopleBidding: "35 People are bidding",
    likes: 120,
    className: "snap-center",
  },
  {
    thumbnail: image5,
    avatars: avatars,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    price: "2.55 ETH",
    timeLeft: "57:15 min left",
    peopleBidding: "14 People are bidding",
    likes: 54,
    className: "snap-center",
  },
];

function Auctions() {
  return (
    <section className="w-full justify-center pb-16">
      <h2 className="text-4xl text-dark-100 mb-16 text-center">
        Latest Live Auctions
      </h2>
      <div className="flex w-full justify-center snap-x snap-mandatory gap-10 overflow-x-auto">
        {auctions.map(
          ({
            thumbnail,
            avatars,
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
                avatars={avatars}
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
    </section>
  );
}

export default Auctions;
