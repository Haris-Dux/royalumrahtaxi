import "./Contact.css";
// ICONS
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const Contact = () => {
  return (
    <>
      <section className="contactSectionbg relative">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[65vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <span className="letterSpacing py-1 px-1.5 font-medium text-white bg-[#F0A202] text-[11px] lg:text-[13px]">
                  CONTACT US
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  Contact Us
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
                Contact
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-6 lg:col-span-2 sm:grid-cols-2">
            {/* FIRST BOX */}
            <div className="p-4 rounded-lg bg-[#2A4D3E] md:p-6">
              <span className="inline-block p-3 text-[#F0A202] rounded-lg bg-[#41705b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-white">Email</h2>
              <p className="mt-2 text-sm text-gray-50">
                Email to our friendly team.
              </p>
              <p className="mt-2 text-md text-[#fdc554]">
                royaltaxi089@gmail.com
              </p>
            </div>

            {/* SECOND BOX */}
            <div className="p-4 rounded-lg bg-[#2A4D3E] md:p-6">
              <span className="inline-block p-3 text-[#F0A202] rounded-lg bg-[#41705b]">
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
                  className="lucide lucide-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-white">
                WhatsApp us
              </h2>
              <p className="mt-2 text-sm text-gray-50">Chat to support</p>
              <a
                title="whatsapp"
                href="https://api.whatsapp.com/send?phone=966597217918"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-[#fdc554]"
              >
                Start new chat
              </a>
            </div>

            {/* THIRD BOX */}
            <div className="p-4 rounded-lg bg-[#2A4D3E] md:p-6">
              <span className="inline-block p-3 text-[#F0A202] rounded-lg bg-[#41705b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-white">Call Us</h2>
              <p className="mt-2 text-sm text-gray-50">24/7</p>
              <p className="mt-2 text-md text-[#fdc554]">
                <a
                  href="tel:+966-57-425-9637"
                  className="mt-2 text-md text-[#fdc554]"
                >
                  <span>+966 57 425 9637</span>
                </a>
              </p>
            </div>

            {/* FORTH BOX */}
            <div className="p-4 rounded-lg bg-[#2A4D3E] md:p-6">
              <span className="inline-block p-3 text-[#F0A202] rounded-lg bg-[#41705b]">
                <IoPricetagsOutline size={22} />
              </span>
              <h2 className="mt-4 text-base font-medium text-white">
                Book Your Taxi Here!
              </h2>
              <p className="mt-2 text-sm text-gray-50">See Pricing</p>
              <p className="mt-2 text-md text-[#fdc554]">
                <HashLink to="/#pricing" smooth className="text-[#fdc554]">
                  Pricing
                </HashLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
