// icon
import iconClock from "../assets/icons/icon-clock.svg";
import iconFavorite from "../assets/icons/icon-favorite.svg";

type Props = {
  thumbnail: string;
  title: string;
  timeLeft: string;
  price: string;
  isFavorite: boolean;
  bids: string;
};

export default function HorizontalCard({
  thumbnail,
  title,
  timeLeft,
  price,
  isFavorite,
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
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-red"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
