import "./home.css";
import Button from "../../components/Button";
import WordPullUp from "../../components/magicui/word-pull-up";
import { FadeText } from "../../components/magicui/fade-text";

const HeroSection = () => {
  return (
    <>
      <section className="main_banner bg-[#2A4D3E] w-full px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto min-h-screen flex items-center">
          <div className="pt-8 pb-10 md:pt-20 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 mx-auto">
            {/* CONTENT */}
            <div className="flex items-center text-white">
              <div className="content">
                <WordPullUp
                  className="crimson pr-3 text-4xl sm:text-5xl font-semibold mb-5"
                  words="Book Your Luxury Umrah Taxi Service at an Affordable Price"
                />

                <div>
                  <FadeText
                    className="crimson mb-3 sm:text-md md:text-md xl:text-lg font-normal max-w-md"
                    direction="right"
                    framerProps={{
                      show: { transition: { delay: 2 } },
                    }}
                    text="Enjoy a luxurious and comfortable journey to your Umrah. Our
                  affordable taxi service is designed to provide you with the
                  best experience. Book now and travel with ease."
                  />
                </div>

                <div className="button mt-7">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
