const Services = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto py-20">
          {/* --------------- HEADER TEXT ---------------  */}
          <div className="header w-full max-w-4xl mx-auto text-center px-4 sm:px-0">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-[#2A4D3E] text-center text-4xl font-semibold py-2.5">
              Our Services
            </h2>
          </div>

          {/* --------------- CONTENT ---------------  */}
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">
            {/* CARD 1 */}
            <div className="service_card1 h-[25rem] box_shadow flex justify-center items-end bg-black px-4 py-3 rounded-2xl">
              <div className="content px-3 py-3 rounded-2xl bg-white">
                <div className="data">
                  <h3 className="mb-2 font-medium text-md text-[#2A4D3E]">
                    Makkah To Madinah Taxi Fare
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur. Id pellentesque
                    lectus nunc tincidunt magnis varius proin. Massa volutpat ac
                    sit lectus
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 1 */}
            <div className="service_card2 h-[25rem] box_shadow flex justify-center items-end bg-black px-4 py-3 rounded-2xl">
              <div className="content px-3 py-3 rounded-2xl bg-white">
                <div className="data">
                  <h3 className="mb-2 font-medium text-md text-[#2A4D3E]">
                    Makkah To Madinah Taxi Fare
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur. Id pellentesque
                    lectus nunc tincidunt magnis varius proin. Massa volutpat ac
                    sit lectus
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 1 */}
            <div className="service_card3 h-[25rem] box_shadow flex justify-center items-end bg-black px-4 py-3 rounded-2xl">
              <div className="content px-3 py-3 rounded-2xl bg-white">
                <div className="data">
                  <h3 className="mb-2 font-medium text-md text-[#2A4D3E]">
                    Makkah To Madinah Taxi Fare
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur. Id pellentesque
                    lectus nunc tincidunt magnis varius proin. Massa volutpat ac
                    sit lectus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
