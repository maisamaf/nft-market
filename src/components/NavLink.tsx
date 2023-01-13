import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: string;
};

export default function NavLink({ to, children }: Props) {
  return (
    <Link
      to={to}
      className="bg-gradient-to-r bg-left-bottom bg-no-repeat from-purple-dark to-purple-light bg-[length:0px_10px] transition-[background-size] duration-300 hover:bg-[length:100%_3px]"
    >
      {children}
    </Link>
  );
}
