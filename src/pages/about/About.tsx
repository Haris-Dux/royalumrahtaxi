import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="contactSectionbg relative">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[65vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <span className="letterSpacing py-1 px-1.5 font-medium text-white bg-[#F0A202] text-[11px] lg:text-[13px]">
                  ABOUT
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  About
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="-mt-10 lg:mt-0 flex items-start lg:items-center justify-center lg:justify-end">
              <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  <FaHome />
                  Home
                </Link>{" "}
                <IoIosArrowForward />
                About
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="here" className="py-3 lg:py-16 ">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* FIRST CARD */}
          <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 px-3 sm:px-4 xl:px-0">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <h2 className="mt-3 Noto mb-1.5 text-[#2A4D3E] sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Makkah To Madinah Taxi Fare
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Traveling from Makkah to Madinah has never been easier. At
                  Royal Umrah Taxi, we offer competitive and transparent taxi
                  fares to ensure you have a comfortable journey without any
                  hidden costs. Our services are designed to provide you with a
                  seamless and stress-free experience, allowing you to focus on
                  your spiritual journey. Contact us to get a detailed fare
                  estimate and book your ride today.
                </p>
                <div className="button mt-4">
                  <Link
                    to="/contact"
                    type="button"
                    onClick={() =>
                      window.scroll({ top: 0, behavior: "smooth" })
                    }
                    className="crimson bg-[#F0A202] hover:bg-[#f0a102de] text-lg text-white  rounded-3xl px-6 py-3"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 object-fill group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3933.png?v=1718537848"
                alt="image"
              />
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
            {/* LEFT SIDE */}
            <div className="left_img group overflow-hidden px-4 sm:px-4 xl:px-0">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3935.png?v=1718538394"
                alt="image"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center py-8 md:py-0 sm:rounded-md bg-[#2A4D3E] px-3 sm:px-4 xl:px-0">
              <div className="px-3 sm:px-8">
                <h2 className="mt-3 Noto mb-1.5 sm:mb-3 text-2xl md:text-3xl font-semibold text-gray-100">
                  Our Fleet
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full text-gray-100">
                  At Royal Umrah Taxi, we take pride in offering a diverse fleet
                  of vehicles to cater to all your travel needs. Whether you're
                  looking for a budget-friendly option or a luxurious ride, our
                  well-maintained and comfortable cars are at your service. Each
                  vehicle is equipped with modern amenities to ensure a safe and
                  pleasant journey from Makkah to Madinah. Choose from a range
                  of sedans, SUVs, and premium cars to make your travel
                  experience unforgettable.
                </p>
                <div className="button mt-4">
                  <Link
                    to="/contact"
                    type="button"
                    onClick={() =>
                      window.scroll({ top: 0, behavior: "smooth" })
                    }
                    className="crimson bg-[#F0A202] hover:bg-[#f0a102de] text-lg text-white  rounded-3xl px-6 py-3"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 px-3 sm:px-4 xl:px-0">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <h2 className="mt-3 Noto mb-1.5 text-[#2A4D3E] sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Why Choose Us?
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Choosing Royal Umrah Taxi means opting for reliability,
                  comfort, and excellent service. Our drivers are professional,
                  courteous, and knowledgeable, ensuring a smooth journey every
                  time. We prioritize your safety and convenience, offering
                  punctual pick-ups and drop-offs, and transparent pricing with
                  no hidden costs. With a range of vehicles to suit every
                  budget, we are committed to making your travel experience as
                  pleasant and hassle-free as possible. Trust us to be your
                  travel partner for your journeys from Makkah to Madinah and
                  beyond.
                </p>
                <div className="button mt-4">
                  <Link
                    to="/contact"
                    type="button"
                    onClick={() =>
                      window.scroll({ top: 0, behavior: "smooth" })
                    }
                    className="crimson bg-[#F0A202] hover:bg-[#f0a102de] text-lg text-white  rounded-3xl px-6 py-3"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 object-fill group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_3934.png?v=1718538392"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
