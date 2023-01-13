type Props = {
  number: number | string;
  icon: string;
  description: string;
};

export default function StatItem({ number, icon, description }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={icon} alt="" />
      <h5 className="text-5xl font-semibold mt-2">{number}</h5>
      <p className="text-gray-100 text-lg">{description}</p>
    </div>
  );
}
