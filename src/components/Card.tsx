import iconClock from "../assets/icon-clock.svg";
import iconFavorite from "../assets/icon-favorite.svg";

type Props = {
  thumbnail: string;
  avatars?: string[];
  title: string;
  price: string;
  timeLeft: string;
  peopleBidding: string;
  likes?: number;
  className: { width: string; height: string };
};

export default function Card({
  thumbnail,
  avatars,
  title,
  price,
  timeLeft,
  peopleBidding,
  likes,
  className,
}: Props) {
  return (
    <div className={`flex flex-col flex-shrink-0 ${className.width}`}>
      <img
        src={thumbnail}
        alt={title}
        className={`w-full ${className.height} drop-shadow-lg rounded-xl object-cover`}
      />
      <div className="flex justify-between space-x-2 mt-3">
        <h4 className="text-wrap break-words text-start line-clamp-2">
          {title}
        </h4>
        {avatars && (
          <p className="bg-purple-dark/10 text-purple-dark min-w-max text-xs h-fit px-3 py-2">
            {price}
          </p>
        )}
      </div>
      {avatars ? (
        <div className="flex gap-3 mt-6 mb-4">
          <img src={iconClock} alt="" className="inline" />
          <p className="inline text-sm text-gray-50">{timeLeft}</p>
        </div>
      ) : (
        <div className="flex justify-between mt-6 mb-4">
          <div className="flex flex-1 items-center gap-1">
            <img src={iconClock} alt="" />
            <p className="inline text-xs text-gray-100 font-thin">{timeLeft}</p>
          </div>
          <p className="bg-purple-dark/10 text-purple-dark min-w-max text-xs h-fit px-2 py-1">
            {price}
          </p>
        </div>
      )}
      <hr />
      <div className="flex justify-between mt-2">
        <div className="flex gap-2 items-center">
          <div className="flex">
            {avatars &&
              avatars.map((avatar) => {
                return (
                  <img
                    src={avatar}
                    alt=""
                    className="border rounded-full border-white -ml-4 h-10 w-10"
                  />
                );
              })}
          </div>
          <p className="text-xs font-thin text-gray-100 min-w-max">
            {peopleBidding}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={iconFavorite} className="inline h-5 w-5" alt="" />
          {likes && (
            <p className="inline text-xs font-normal text-gray-50">{likes}</p>
          )}
        </div>
      </div>
    </div>
  );
}
