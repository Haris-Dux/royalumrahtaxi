const data = [
  {
    id: 1,
    title: "How much does a taxi from Makkah airport to Madinah cost?",
    desc: "The cost of a taxi from Makkah airport to Madinah varies depending on the type of vehicle and the time of travel. For an accurate quote, please contact our customer service team via phone or WhatsApp.",
  },
  {
    id: 2,
    title: "How can I book a taxi?",
    desc: "Booking a taxi with Royal Umrah Taxi is easy. You can book via phone or WhatsApp, and our team will assist you with the details and confirm your booking promptly.",
  },
  {
    id: 3,
    title: "Are your drivers experienced and licensed?",
    desc: "Yes, all our drivers are highly experienced and fully licensed. They are well-versed in the routes to ensure a safe and comfortable journey for you.",
  },
  {
    id: 4,
    title: "What types of vehicles do you offer?",
    desc: "We offer a range of vehicles to suit different needs and budgets, including sedans, SUVs, and luxury cars. All our vehicles are well-maintained and equipped with modern amenities.",
  },
  {
    id: 5,
    title: "Can I make a last-minute booking?",
    desc: "Yes, we strive to accommodate last-minute bookings whenever possible. Please contact us directly to check availability and arrange your ride.",
  },
];

const Faq = () => {
  return (
    <>
      <section className="relative w-full bg-white antialiased">
        <div className="max-w-4xl mx-auto pt-16 pb-7 px-4 sm:px-6 xl:px-0 ">
          <div className="header w-full max-w-4xl mx-auto text-center">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-center text-3xl sm:text-4xl font-semibold py-2.5">
              Frequently Ask Questions?
            </h2>

            <p className="mt-2 font-normal max-w-2xl mx-auto text-sm tracking-wide">
              Have questions about our services? Here are some of the most
              common questions we receive from our customers. If you don't find
              the answer you're looking for, feel free to contact us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#2A4D3E] text-white antialiased">
        <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 xl:px-0 ">
          <div className="space-y-6 mt-10">
            {data.map((data) => (
              <details
                key={data.id}
                className="group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 border rounded-lg bg-white p-4 text-gray-900">
                  <h2 className="font-medium text-sm sm:text-md">
                    {data.title}
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#2A4D3E]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 px-4 text-sm leading-relaxed text-black bg-white py-3 rounded-lg">
                  {data.desc}
                </p>
              </details>
            ))}
          </div>
        </div>
        <div className="custom-shape-divider-top-1717971167">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Faq;
