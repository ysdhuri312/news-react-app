import {
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className=" primary-nav tracking-wide flex justify-between items-center px-28">
        <div className="text-2xl p-4 font-semibold ">News9</div>
        <div className="search">
          <div className="absolute">
            <AiOutlineSearch />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="flex gap-3">
          <AiOutlineQuestionCircle />
          <AiOutlineSetting />
        </div>
      </div>
      <div clasName="secondary-nav"></div>
    </>
  );
};

export default Navbar;
