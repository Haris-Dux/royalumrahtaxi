import { useEffect, useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.webp";
import "./Layouts.css";

const Header = () => {
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/#services" },
    { title: "Pricing", path: "/#pricing" },
    { title: "Contact Us", path: "/contact" },
  ];

  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  const handleLinkClick = () => {
    setResponsiveMenu(false);
    handleMoveToTop();
  };

  return (
    <>
      <nav className={`navbar md:text-sm max-w-full bg-[#2A4D3E] text-white`}>
        <div className="items-center px-3 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto md:flex md:px-1 lg:px-0">
          <div className="flex items-center justify-between py-3 md:py-4 md:block">
            {/* COMPANY LOGO */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center"
            >
              <img className="w-16" src={logo} alt="logo" />
              <h2 className="crimson text-gray-50 py-0 text-lg sm:text-xl font-semibold tracking-wide">
                Royal Umrah Taxi
              </h2>
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                className="text-white outline-none p-2 rounded-md"
                onClick={() => setResponsiveMenu(!responsiveMenu)}
              >
                {responsiveMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MENU */}
          <div
            className={`flex-1 justify-self-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${
              responsiveMenu ? "block" : "hidden"
            }`}
          >
            <ul className="text-center justify-center items-center space-y-8 md:flex md:space-x-6 lg:space-x-8 md:space-y-0">
              {navigation.map((data, index) => (
                <li key={index} className="text-white hover:text-gray-200">
                  <HashLink
                    to={data.path}
                    smooth
                    className="font-normal text-[0.9rem] lg:text-[1.05rem]"
                  >
                    <p onClick={handleLinkClick}>{data.title}</p>
                  </HashLink>
                </li>
              ))}
              {isMobile && (
                <li className="poppins text-white hover:text-gray-200">
                  <a
                    href="tel:+966-59-721-7918"
                    className="font-medium text-[1rem] lg:text-[1.05rem]"
                  >
                    <span className="">+966 59 721 7918</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* BUTTON */}
          <div className="hidden md:inline-block">
            <a
              href="tel:+966-57-425-9637"
              className="px-4 h-11 text-[0.95rem] font-medium flex items-center text-white border border-[#F0A202] bg-[#F0A202] rounded-[2rem] shadow cursor-pointer"
            >
              <span>
                <MdPhoneInTalk size={20} />
              </span>
              <span className="pl-2">+966 57 425 9637</span>
            </a>
          </div>
        </div>
      </nav>
      {/* )} */}
    </>
  );
};

export default Header;
