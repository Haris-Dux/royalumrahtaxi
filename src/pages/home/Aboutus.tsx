import { Link } from "react-router-dom";

const Aboutus: React.FC = () => {
  return (
    <>
      <section className="py-10 px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className=" flex justify-center items-center flex-wrap">
            <div className="img_side lg:w-[50%]">
              <img
                className="px-4 sm:px-16"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Group_72164.webp?v=1718400944"
                alt=""
              />
            </div>

            <div className="content lg:w-[50%] px-5 sm:px-16 md:px-10 py-14">
              <div className="data">
                <h2 className="crimson text-[#2A4D3E] mb-4 text-4xl font-semibold">
                  About Us
                </h2>
                <p className="roboto mb-6 text-md">
                  Welcome to Royal Umrah Taxi, your trusted partner for seamless
                  and comfortable transportation across Saudi Arabia. We are
                  dedicated to providing exceptional taxi services tailored to
                  meet your needs, whether you're traveling for business,
                  leisure, or pilgrimage.
                </p>
                <p className="roboto mb-6 text-md">
                  Our experienced drivers are committed to ensuring your journey
                  is safe, punctual, and pleasant. With a modern fleet of
                  well-maintained vehicles, we offer a range of services
                  including airport transfers, city tours, and customized travel
                  plans to suit your requirements.
                </p>

                <div className="button mt-7">
                  <Link
                    to="/contact"
                    onClick={() =>
                      window.scroll({ top: 0, behavior: "smooth" })
                    }
                    type="button"
                    className="crimson bg-[#F0A202] hover:bg-[#f0a102de] text-lg text-white  rounded-3xl px-6 py-3"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
