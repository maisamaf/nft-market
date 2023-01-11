// icon
import iconClock from "../assets/icon-clock.svg";
import iconFavorite from "../assets/icon-favorite.svg";

type Props = {
  thumbnail: string;
  title: string;
  timeLeft: string;
  price: string;
  bids: string;
};

export default function HorizontalCard({
  thumbnail,
  title,
  timeLeft,
  price,
  bids,
}: Props) {
  return (
    <div className="flex gap-4">
      <img src={thumbnail} alt="" className="h-24 rounded-xl drop-shadow-md" />
      <div className="flex flex-col justify-between">
        <h5 className="font-semibold text-sm break-words line-clamp-2">
          {title}
        </h5>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img src={iconClock} alt="" className="h-5 w-5" />
            <p className="text-sm font-thin text-black mt-1">{timeLeft}</p>
          </div>
          <p className="bg-purple-dark/10 rounded-sm text-purple-dark min-w-max text-xs h-fit px-2 py-1">
            {price}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-thin text-gray-100 min-w-max">{bids}</p>
          <img src={iconFavorite} className="inline h-4.5 w-4.5" alt="" />
        </div>
      </div>
    </div>
  );
}
