import iconClock from "../assets/icons/icon-clock.svg";

type Props = {
  thumbnail: string;
  avatars?: string[];
  title: string;
  price: string;
  timeLeft: string;
  peopleBidding: string;
  likes?: number;
  isFavorite?: boolean;
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
  isFavorite,
  className,
}: Props) {
  return (
    <div className={`flex flex-col ${className.width}`}>
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
                    alt="User Image"
                    className="border rounded-full border-white first:ml-0 -ml-4 h-10 w-10"
                  />
                );
              })}
          </div>
          <p className="text-xs font-thin text-gray-100 min-w-max">
            {peopleBidding}
          </p>
        </div>
        <div className="flex gap-2 items-center">
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
          {likes && (
            <p className="inline text-xs font-normal text-gray-50">{likes}</p>
          )}
        </div>
      </div>
    </div>
  );
}
