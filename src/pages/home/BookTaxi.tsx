import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

interface Car {
  id: number;
  image: string;
  name: string;
  persons: number;
  bags: number;
}

const allCars: Car[] = [
  {
    id: 1,
    name: "CAMRY",
    persons: 4,
    bags: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_1.png?v=1717871551",
  },
  {
    id: 2,
    name: "TOYOTA HIROOF",
    persons: 12,
    bags: 15,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/TOYOTA.png?v=1719089688",
  },
  {
    id: 3,
    name: "GMC YUKON XL",
    persons: 7,
    bags: 8,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/GMC_YUKON_XL.png?v=1719089691",
  },
  {
    id: 4,
    name: "HYUNDAI STARIA",
    persons: 7,
    bags: 9,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_2_2f5556a7-9dd4-4dc5-bb5e-664ae70dff38.png?v=1717873779",
  },
  {
    id: 5,
    name: "COASTER",
    persons: 15,
    bags: 20,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/COASTER.png?v=1719089688",
  },
  {
    id: 6,
    name: "BUS",
    persons: 49,
    bags: 50,
    image:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/BUS.png?v=1719089689",
  },
];

const BookTaxi = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  //   const [loading, setLoading] = useState<boolean>(false);
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(3); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HANDLE ITEM CLICK
  const handleItemClick = () => {
    // window.scroll(0, 0);
  };

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-12 px-5 sm:px-4 xl:px-0 bg-[#2A4D3E] text-white">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header w-full max-w-4xl mx-auto text-center">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-center text-4xl font-semibold py-2.5">
              Book Your Taxi Here!
            </h2>

            <p className="mt-2 font-normal sm:max-w-2xl mx-auto text-sm tracking-wide">
              Ready to book your ride with Royal Umrah Taxi? Contact us via
              phone or WhatsApp, and we'll ensure you have a comfortable and
              reliable journey. Experience hassle-free travel today!
            </p>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="mt-8 sm:mt-10">
              {/* {!loading ? (
                <> */}
              <Slider ref={sliderRef} {...settings}>
                {allCars?.map((data: Car, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleItemClick()}
                    className="mx-0 pb-7 mt-32 px-1.5"
                  >
                    <div className="relative card text-center px-4 pt-16 pb-6 mb-3 max-w-xs mx-auto bg-white rounded-2xl text-black cursor-pointer">
                      <div className="image absolute min-h-48 -top-32 flex items-end">
                        <img
                          className="px-2"
                          src={data?.image}
                          alt="car image"
                        />
                      </div>
                      <h2 className="crimson text-2xl font-semibold uppercase">
                        {data.name}
                      </h2>

                      <div className="mb-3 crimson text-xl py-2 px-4 details font-medium flex justify-between items-center">
                        <span>{data?.persons} Person</span>
                        <span>{data?.bags} Bags</span>
                      </div>

                      <div className="w-full">
                        <a
                          href="tel:+966-57-425-9637"
                          className="crimson bg-[#F0A202] hover:bg-[#f0a102de] text-lg text-white rounded-3xl px-20 py-2.5"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              {/* </>
              ) : (
                <>
                  <Slider ref={sliderRef} {...settings}>
                    {[0, 1, 2, 3, 4, 5].map((_data, index: number) => (
                      <ul>
                        <li key={index} className="px-5">
                          <div className="group mb-5 relative rounded-lg w-full bg-white border border-gray-400 cursor-pointer animate-pulse">
                            <div className="bg-gray-300 h-56 w-full"></div>

                            <div className="py-5 text-center">
                              <div className="bg-gray-300 h-5 w-3/4 mx-auto mb-2 rounded-lg"></div>
                              <div className="flex items-center justify-center gap-1 mb-2">
                                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
                              </div>
                              <div className="bg-gray-300 h-4 w-1/2 mx-auto mb-2 rounded-lg"></div>
                              <div className="bg-gray-300 h-5 w-1/3 mx-auto mb-2 rounded-lg"></div>
                              <div className="bg-gray-300 h-4 w-1/4 mx-auto mb-3 rounded-lg"></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    ))}
                  </Slider>
                </>
              )} */}
            </div>

            <div className="slider_button sm:hidden flex flex-row justify-center">
              {/* left arrow */}
              <button
                type="button"
                onClick={previous}
                aria-label="Previous"
                className="mx-1.5 inline-block rounded-full border text-[#F0A202] hover:text-white border-[#F0A202] hover:bg-[#F0A202] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left "
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* right arrow */}
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="mx-1.5 inline-block rounded-full border text-[#F0A202] hover:text-white border-[#F0A202] hover:bg-[#F0A202] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right "
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookTaxi;
