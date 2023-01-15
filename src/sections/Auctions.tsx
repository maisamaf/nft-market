// data
import { auctions } from "../data";

// component
import Card from "../components/Card";

export default function Auctions() {
  return (
    <section className="w-full pb-20 mt-16">
      <h2 className="text-3xl md:text-4xl text-dark-100 mb-16 text-center">
        Latest Live Auctions
      </h2>
      <div className="px-4 flex gap-8 flex-row-reverse overflow-x-auto">
        {auctions.map(
          (
            {
              thumbnail,
              avatars,
              title,
              price,
              timeLeft,
              peopleBidding,
              likes,
              isFavorite,
              className,
            },
            index
          ) => {
            return (
              <Card
                key={index}
                thumbnail={thumbnail}
                avatars={avatars}
                title={title}
                price={price}
                timeLeft={timeLeft}
                peopleBidding={peopleBidding}
                likes={likes}
                isFavorite={isFavorite}
                className={className}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
