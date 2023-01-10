import iconClock from "../assets/icon-clock.svg";
import iconFavorite from "../assets/icon-favorite.svg";

type Props = {
  thumbnail: string;
  avatars: string[];
  title: string;
  price: string;
  timeLeft: string;
  peopleBidding: string;
  likes: number;
  className: string;
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
    <div className={`flex flex-col w-[22rem] shrink-0 ${className}`}>
      <img
        src={thumbnail}
        alt=""
        className="h-[30rem] w-full drop-shadow-lg rounded-xl object-cover"
      />
      <div className="flex justify-between space-x-2 mt-3">
        <h4 className="text-wrap break-words text-start">{title}</h4>
        <p className="bg-purple-dark/10 text-purple-dark min-w-max text-xs h-fit px-3 py-2">
          {price}
        </p>
      </div>
      <div className="flex gap-3 mt-6 mb-4">
        <img src={iconClock} alt="" className="inline" />
        <p className="inline text-sm text-gray-50">{timeLeft}</p>
      </div>
      <hr />
      <div className="flex justify-between mt-2">
        <div className="flex gap-2 items-center">
          <div className="flex">
            {avatars?.map((avatar) => {
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
          <p className="inline text-xs font-normal text-gray-50">{likes}</p>
        </div>
      </div>
    </div>
  );
}
