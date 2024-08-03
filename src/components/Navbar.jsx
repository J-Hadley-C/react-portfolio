import logo from "../assets/logo.jh.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import {FaTwitterSquare} from "react-icons/fa";
// import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" rounded-xl mb-10 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="rounded-xl mx-2 w-10" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
