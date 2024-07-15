import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ open, toggleFunction }) => {
  return (
    <div
      className={`${
        open ? "w-full" : "w-0"
      } flex flex-col fixed h-screen top-0 right-0 bg-black/95 backdrop-blur-sm overflow-hidden text-white transition-all duration-200 ease-linear`}
    >
      <button className="text-3xl p-6 mr-3 sm:mt-6 self-end" onClick={toggleFunction}>
        <AiOutlineClose />
      </button>
      <div className="grow text-center text-xl">
        <div className="h-16 ">
          <Link href="/about" className="block w-full h-full p-4" onClick={toggleFunction}>
            About
          </Link>
        </div>
        <div className="h-16 ">
          <Link href="#subscribe" className="block w-full h-full p-4" onClick={toggleFunction}>
            Subscribe
          </Link>
        </div>
        <div className="h-16">
          <Link href="#contact" className="block w-full h-full p-4" onClick={toggleFunction}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
