import {
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  const navlinks = [
    "Home",
    "Top News",
    "|",
    "India",
    "World",
    "Business",
    "Technology",
    "Politics",
    "Health",
    "Sport",
    "Entertainment",
  ];

  return (
    <>
      <div
        id="primary-nav"
        className="tracking-wide flex justify-between items-center px-[7%] py-[0.7rem]"
      >
        <h1 className="text-2xl opacity-90 uppercase font-extrabold font-cursive">
          News24
        </h1>
        <div id="search" className="relative">
          <div className="absolute text-2xl translate-x-2/4 translate-y-2/4">
            <AiOutlineSearch />
          </div>
          <input
            className="xl:px-48 py-2 rounded-full text-xl text-center tracking-wide shadow-md focus:outline-none opacity-70 lg:px-25"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-4 text-3xl opacity-60 hover:opacity-50 cursor-pointer">
          <AiOutlineQuestionCircle />
          <AiOutlineSetting />
        </div>
      </div>
      <div
        id="secondary-nav"
        className="flex justify-between items-center px-[7%] border-b-2 pt-8 pb-2 mb-4 rounded-lg "
      >
        {navlinks.map((navlink, index) => (
          <ul key={index}>
            <li className="opacity-70 cursor-pointer hover:opacity-50">{navlink}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Navbar;
