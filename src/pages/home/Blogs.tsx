import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  // HANDLE SHOP
  const handleBlog = (name: string) => {
    navigate(`/${name}`);
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto py-20">
          {/* --------------- HEADER TEXT ---------------  */}
          <div className="header w-full max-w-4xl mx-auto text-center px-4 sm:px-0">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-[#2A4D3E] text-center text-4xl font-semibold py-2.5">
              Recent Post
            </h2>
          </div>

          {/* --------------- CONTENT ---------------  */}
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">
            {/* CARD 1 */}
            <article className="box_shadow flex justify-center border items-center p-2">
              <div className="content text-center">
                <div className="img_sec border-b">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/rushdi-fatani-rkYykJZjArY-unsplash-2-1370x550.jpg?v=1718605899"
                    alt="blog image"
                    className="object-cover h-[14rem]"
                  />
                  <h2 className="crimson py-2 text-[#2A4D3E] text-2xl font-semibold">
                    Umrah During Ramadan
                  </h2>
                </div>
                <div className="data py-2 text-center">
                  <div className="date text-sm text-gray-600">
                    04 March 2024
                  </div>
                  <p className="text-sm py-2 text-[#2A4D3E]">
                    Ramadan, the holy month for Muslims worldwide, holds a
                    special place in the hearts of believers. It is a time of
                    fasting, prayer...
                  </p>
                  <button
                    type="button"
                    onClick={() => handleBlog("Blog1")}
                    className="text-[#F0A202] mt-1 text-md font-medium hover:underline underline-offset-4"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="box_shadow flex justify-center border items-center p-2">
              <div className="content text-center">
                <div className="img_sec border-b">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/makkah.webp?v=1718606556"
                    alt="blog image"
                    className="object-cover h-[14rem]"
                  />
                  <h2 className="crimson py-2 text-[#2A4D3E] text-2xl font-semibold">
                    Famous ziyarat in Makkah
                  </h2>
                </div>
                <div className="data py-2 text-center">
                  <div className="date text-sm text-gray-600">07 May 2024</div>
                  <p className="text-sm py-2 text-[#2A4D3E]">
                    In Makkah, there are several famous ziyarat (sacred sites)
                    that pilgrims often visit during their Umrah pilgrimage...
                  </p>
                  <button
                    type="button"
                    onClick={() => handleBlog("blog2")}
                    className="text-[#F0A202] mt-1 text-md font-medium hover:underline underline-offset-4"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="box_shadow flex justify-center border items-center p-2">
              <div className="content text-center">
                <div className="img_sec border-b">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/alswedi07-8aX03fIhv9Y-unsplash-1-1370x550.jpg?v=1718606204"
                    alt="blog image"
                    className="object-cover h-[14rem]"
                  />
                  <h2 className="crimson py-2 text-[#2A4D3E] text-2xl font-semibold">
                    Where to Go in Makkah
                  </h2>
                </div>
                <div className="data py-2 text-center">
                  <div className="date text-sm text-gray-600">
                    22 April 2024
                  </div>
                  <p className="text-sm py-2 text-[#2A4D3E]">
                    Makkah, the holiest city in Islam, holds profound
                    significance for Muslims undertaking the spiritual journey
                    of Umrah...
                  </p>
                  <button
                    type="button"
                    onClick={() => handleBlog("blog3")}
                    className="text-[#F0A202] mt-1 text-md font-medium hover:underline underline-offset-4"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
