import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import NavLink from "../components/NavLink";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col lg:flex-row mx-4 rounded-xl my-10 border border-gray-20">
      <div className="flex-1 h-80 flex flex-col justify-between p-8">
        <Link to="/" className="flex gap-3">
          <img src={logo} alt="" />
          <span className="font-bold text-xl">NFT Market</span>
        </Link>
        <ul className="flex gap-5 mt-8 md:mt-0">
          <li className="text-gray-100 text-sm">
            <NavLink to="">Support</NavLink>
          </li>
          <li className="text-gray-100 text-sm">
            <NavLink to="">Term of Service</NavLink>
          </li>
          <li className="text-gray-100 text-sm">
            <NavLink to="">License</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col border-t md:border-l md:border-t-0 justify-between border-gray-20">
        <ul className="space-y-4 p-5 md:p-10">
          <li className="font-bold">
            <NavLink to="">Auctions</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="">Roadmap</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="">Discover</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="">Community</NavLink>
          </li>
        </ul>
        <div className="flex gap-4 p-5 md:p-10">
          <Link to="" className="font-bold">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H10V12.4706H7V9.64706H10V8.13082C10 5.26024 11.4897 4 13.925 4C15.0684 4 15.6836 4.08142 15.9825 4.12097L16 4.12329V6.82353H14.339C13.3053 6.82353 13 7.35812 13 8.44047V9.64706H15.9741L15.5629 12.4706H13V20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0Z"
                fill="#7780A1"
              />
            </svg>
          </Link>
          <Link to="" className="font-bold">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0ZM4 4.56404C4 5.42749 4.70032 6.12899 5.56637 6.12899C6.4297 6.12899 7.13184 5.42749 7.13184 4.56404C7.13184 3.7015 6.4297 3 5.56637 3C4.70123 3 4 3.70059 4 4.56404ZM4.25044 16H6.93695V7.36366H4.25044V16ZM17 16H14.3153V11.8001C14.3153 10.7984 14.2971 9.51001 12.9192 9.51001C11.5213 9.51001 11.3064 10.6009 11.3064 11.7273V16H8.62172V7.36366H11.1989V8.54374H11.2354C11.5942 7.86499 12.4703 7.14894 13.7771 7.14894C16.4973 7.14894 17 8.93771 17 11.2633V16Z"
                fill="#7780A1"
              />
            </svg>
          </Link>
          <Link to="" className="font-bold">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H7.68333C7.63881 19.8696 7.6102 19.7182 7.6102 19.5306V17.8792H6.41151C5.7589 17.8792 5.17863 17.595 4.89724 17.0668C4.80259 16.889 4.73165 16.6826 4.65721 16.466C4.48598 15.9678 4.29621 15.4157 3.75658 15.033C3.52686 14.8502 3.70173 14.6417 3.96643 14.6699C4.45529 14.81 4.86068 15.1498 5.24223 15.6538C5.62218 16.1586 5.80103 16.2729 6.51087 16.2729C6.85505 16.2729 7.37014 16.2528 7.85502 16.1755C8.11575 15.5048 8.56645 14.8873 9.11731 14.5958C5.94093 14.2649 4.42508 12.6643 4.42508 10.4911C4.42508 9.55556 4.81855 8.65056 5.48705 7.88808C5.26766 7.13124 4.99184 5.58776 5.57131 5C7.00052 5 7.86456 5.93881 8.07203 6.19243C8.78425 5.94525 9.56642 5.80515 10.3883 5.80515C11.2118 5.80515 11.9972 5.94525 12.711 6.19404C12.9161 5.94203 13.7809 5 15.2133 5C15.7952 5.58857 15.5162 7.13849 15.2944 7.89372C15.9589 8.65459 16.35 9.55717 16.35 10.4911C16.35 12.6626 14.8365 14.2625 11.6649 14.595C12.5377 15.0564 13.1744 16.3527 13.1744 17.3293V19.5306C13.1744 19.6143 13.1561 19.9283 13.1466 20H18C19.1046 20 20 19.1046 20 18V2C20 0.895431 19.1046 0 18 0H2Z"
                fill="#7780A1"
              />
            </svg>
          </Link>
          <Link to="" className="font-bold">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0ZM15.3502 6.23936C15.9312 6.1722 16.4847 6.02331 17 5.80205C16.615 6.35858 16.1277 6.84744 15.5661 7.23946C15.5715 7.35868 15.5742 7.47842 15.5742 7.59868C15.5742 11.2685 12.686 15.5 7.40283 15.5C5.78051 15.5 4.27126 15.0403 3 14.2526C3.22507 14.2786 3.45391 14.2917 3.68544 14.2917C5.03154 14.2917 6.26995 13.8476 7.25261 13.1026C5.99588 13.0802 4.93516 12.2769 4.56956 11.1737C4.74455 11.2055 4.92493 11.2232 5.10961 11.2232C5.37183 11.2232 5.62598 11.1893 5.86666 11.1258C4.55232 10.8712 3.56267 9.74881 3.56267 8.40302V8.36814C3.94981 8.57587 4.39295 8.70081 4.86354 8.71539C4.09303 8.21769 3.58636 7.36753 3.58636 6.4044C3.58636 5.89472 3.72797 5.41784 3.97458 5.0076C5.39175 6.68813 7.50783 7.79391 9.89474 7.90948C9.84628 7.70697 9.82043 7.49456 9.82043 7.27694C9.82043 5.74374 11.1062 4.5 12.6925 4.5C13.5184 4.5 14.2647 4.83736 14.7886 5.37723C15.4434 5.25228 16.0583 5.02113 16.6129 4.70304C16.3986 5.35172 15.9436 5.89576 15.3502 6.23936Z"
                fill="#7780A1"
              />
            </svg>
          </Link>
          <Link to="" className="font-bold">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0H14C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V6C0 2.68629 2.68629 0 6 0ZM16 3C16.5 3 17 3.5 17 4C17 4.5 16.5 5 16 5C15.5 5 15 4.5 15 4C15 3.5 15.5 3 16 3ZM15 10C15 7.2425 12.7575 5 10 5C7.2425 5 5 7.2425 5 10C5 12.7575 7.2425 15 10 15C12.7575 15 15 12.7575 15 10ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z"
                fill="#7780A1"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-5 md:p-10 border-t md:border-l md:border-t-0 justify-around border-gray-20  bg-gradient-to-b from-white to-gray-10">
        <p className="text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad
          alias accusamus sint nobis rem. Consequuntur corporis, nam autem quod
          aliquam temporibus at. Vitae facere quasi sunt ullam qui? Ab.
        </p>
        <div className="flex flex-wrap bg-white rounded-xl mt-8 shadow-xl md:mx-8">
          <input
            type="text"
            className="px-3 flex-1 md:px-5 py-4 md:flex-1 rounded-xl placeholder:text-sm placeholder:text-gray-100 outline-none ring-0"
            placeholder="Newsletter"
          />
          <button className="ml-auto md:w-fit text-purple-dark rounded-xl px-5 py-3">
            Sign up
          </button>
        </div>
      </div>
    </footer>
  );
}
