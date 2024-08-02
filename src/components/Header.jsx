import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";


const Header = () => {
  return (
    <div className="flex gap-[280px] pt-6 bg-[#fbebb5] justify-end px-28">
      <ul className="flex gap-16">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>Shop</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contact</li></a>
      </ul>
      <div className="flex gap-10">
        <FaRegUser className="w-[28px] h-[28px]" />
        <CiSearch className="w-[28px] h-[28px]" />
        <GoHeart className="w-[28px] h-[28px]" />
        <IoCartOutline className="w-[28px] h-[28px]" />
      </div>
    </div>
  )
}

export default Header