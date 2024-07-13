import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <footer className="w-full bg-[#2A4D3E] text-white">
        <div className="max-w-7xl mx-auto">
          {/* FOOTER UPPER PART  */}
          <div className="pt-16 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
            {/* LOGO & HEADING */}
            <div className="sm:col-span-2">
              <h1 className="crimson max-w-lg flex items-center text-xl font-semibold tracking-tight text-gray-50 xl:text-3xl">
                {/* <img
                  className="-ml-3 w-12"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/aaa.png?v=1713875658"
                  alt="logo"
                /> */}
                Royal Umrah Taxi
              </h1>
              <p className="max-w-sm text-sm mt-3 text-gray-100">
                Royal Umrah Taxi offers reliable and comfortable transportation
                services throughout Saudi Arabia. Whether you're heading to the
                airport, embarking on a pilgrimage, or exploring the city, our
                professional drivers ensure a safe and pleasant journey.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="crimson text-xl font-semibold text-gray-100">
                Quick Link
              </p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  to="/"
                  onClick={handleMoveToTop}
                  className="transition-colors duration-300 hover:underline text-gray-100 hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={handleMoveToTop}
                  className="transition-colors duration-300 hover:underline text-gray-100 hover:text-blue-500"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={handleMoveToTop}
                  className="transition-colors duration-300 hover:underline text-gray-100 hover:text-blue-500"
                >
                  Contact Us
                </Link>
                <HashLink
                  to="/#reviews"
                  smooth
                  className="transition-colors duration-300 hover:underline text-gray-100 hover:text-blue-500"
                >
                  Reviews
                </HashLink>
              </div>
            </div>

            {/* USEFUL LINKS */}
            <div>
              <p className="crimson text-xl font-semibold text-gray-100">
                Useful Links
              </p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <HashLink
                  to="/#services"
                  smooth
                  className="transition-colors duration-300 hover:underline text-gray-100 hover:text-blue-500"
                >
                  Services
                </HashLink>
                <HashLink
                  to="/#pricing"
                  smooth
                  className="transition-colors duration-300 hover:underline text-gray-100 hover:text-blue-500"
                >
                  Pricing
                </HashLink>
                <HashLink
                  to="/#faqs"
                  smooth
                  className="transition-colors duration-300 hover:underline text-gray-100 hover:text-blue-500"
                >
                  Faqs
                </HashLink>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div>
              <p className="crimson text-xl font-semibold text-gray-100">
                Contact Info
              </p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                {/* PHONE NUMBER */}
                <a
                  href="tel:+966-57-425-9637"
                  className="flex items-center gap-2"
                >
                  <FaPhone /> +966 57 425 9637
                </a>

                <p className="flex items-start -mx-2">
                  <svg
                    className="w-6 h-6 mx-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mr-1 text-white">
                    <a href="mailto:royaltaxi089@gmail.com" target="_blank">
                      royaltaxi089@gmail.com
                    </a>
                  </span>
                </p>

                {/* SOCIAL LINKS */}
                <div className="links pt-2 flex items-center justify-start gap-2.5">
                  <a title="social_links" href="#" className="">
                    <FaFacebookF className="text-white bg-[#F0A202] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a title="social_links" href="#" className="">
                    <FaInstagram className="text-white bg-[#F0A202] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a title="social_links" href="#" className="">
                    <FaLinkedinIn className="text-white bg-[#F0A202] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                  <a title="social_links" href="#" className="">
                    <FaTiktok className="text-white bg-[#F0A202] h-7 w-7 p-1.5 rounded-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM PART  */}
        <div className="text-sm py-5 px-4 md:px-10 border-t text-center text-white">
          <p>Copyrights © 2024 All Rights Reserved by Royal Umrah Taxi</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
