import { FaBars } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className=" flex items-center justify-around p-3 shadow ">
      <a href="#">Pawn</a>
      <ul className="hidden w-2/6 items-center justify-around md:flex ">
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
      </ul>
      <button className="block p-2 text-xl md:hidden ">
        <FaBars />
      </button>
    </nav>
  );
};
