import StatItem from "../components/StatItem";
import { stats } from "../data";

export default function Stats() {
  return (
    <article className="mx-4 md:w-6/12 md:mx-auto pb-20 text-center">
      <div className="flex flex-wrap gap-10 justify-between ">
        {stats.map((stat) => {
          return (
            <StatItem
              number={stat.number}
              description={stat.description}
              icon={stat.icon}
            />
          );
        })}
      </div>
    </article>
  );
}
