import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const data = [
  {
    review:
      "Royal Umrah Taxi provided an exceptional service during our pilgrimage. The driver was punctual, courteous, and made our journey smooth and stress-free. Highly recommended!",
    name: "Abdullah Usman",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
  {
    review:
      "I used Royal Umrah Taxi for my airport transfer, and it was a great experience. The car was clean and comfortable, and the driver was very professional. Will definitely use this service again.",
    name: "Danish Mehmood",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 4,
  },
  {
    review:
      "Traveling with Royal Umrah Taxi was a wonderful experience. Their service is reliable and affordable, and the staff is incredibly helpful. Perfect for anyone visiting Saudi Arabia.",
    name: "Sana Aslam",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 4,
  },
  {
    review:
      "I had an excellent experience with Royal Umrah Taxi. The booking process was easy, and the driver was friendly and knowledgeable about the area. I felt safe and comfortable throughout the journey.",
    name: "Suleman Ameen",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
  {
    review:
      "Royal Umrah Taxi exceeded my expectations. The service was top-notch, from the clean and well-maintained car to the professional driver. I highly recommend them for anyone needing reliable transportation in Saudi Arabia.",
    name: "Mehboob Ahmad",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="text-[#FFC209]" />);
  }
  return <div className="flex">{stars}</div>;
};

const Review = () => {
  return (
    <>
      <section className="bg_reviews py-14 sm:py-20 text-white">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="header px-4 sm:px-0 w-full max-w-4xl mx-auto text-center">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-center text-3xl sm:text-4xl font-semibold py-2.5">
              Our happy clients say about us
            </h2>

            <p className="mt-2 font-normal text-sm tracking-wide">
              2,157 people have said how good Rareblocks
            </p>
          </div>
        </div>

        <Marquee
          direction="left"
          pauseOnHover={true}
          className="testimonial_marquee mt-14 text-black"
        >
          {data.map((data, i) => (
            <article
              className="group mx-10 py-5 px-6 bg-white max-w-sm border border-gray-300 rounded-2xl"
              key={i}
            >
              <div className="card">
                <div className="flex justify-start items-center gap-3">
                  <div className="img w-10">
                    <img
                      className="rounded-full w-full"
                      src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/user.webp?v=1719090450"
                      alt=""
                    />
                  </div>

                  <div className="profile">
                    <h3 className="mb-0.5 text-lg font-medium text-gray-900">
                      {data.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-3">{data.review}</p>

                <div className="mt-4 flex items-center justify-start gap-1">
                  <StarRating rating={data?.rating} />
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Review;
