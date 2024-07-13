import { useState } from "react";
import { camry } from "./AllCarsData";
import { toyotaHiroof } from "./AllCarsData";
import { gmcyukonxl } from "./AllCarsData";
import { hyundaiStaria } from "./AllCarsData";
import { coaster } from "./AllCarsData";
import { bus } from "./AllCarsData";

const carData = {
  CAMRY: camry,
  "TOYOTA HIROOF": toyotaHiroof,
  "GMC YUKON XL": gmcyukonxl,
  "HYUNDAI STARIA": hyundaiStaria,
  COASTER: coaster,
  BUS: bus,
};

const AllCarsBudget = () => {
  const [selectedCar, setSelectedCar] = useState(camry);

  const handleCarSelection = (carName: string) => {
    setSelectedCar(carData[carName as keyof typeof carData]);
  };

  return (
    <>
      <section
        id="service"
        className="pt-16 pb-12 sm:pt-24 sm:pb-12 px-0 sm:px-4 xl:px-0 bg-white text-black"
      >
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header w-full max-w-4xl mx-auto text-center px-4 sm:px-0">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-center text-4xl font-semibold py-2.5">
              Car for Every Budget
            </h2>

            <p className="mt-2 font-normal text-sm tracking-wide">
              Royal Umrah Taxi offers a variety of vehicles to fit every budget.
              Whether you prefer an economical ride or a luxury experience, we
              have the perfect car for you. Enjoy comfort and quality service,
              no matter your budget.
            </p>
          </div>

          {/* ALL CARS DATA */}
          <div className="mt-12 data">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-5">
              <div className="cars col-span-4 sm:col-span-1 mt-0 sm:mt-2 px-4 sm:px-0">
                <div className="car_names">
                  {Object.keys(carData).map((carName) => (
                    <a href="#service" key={carName}>
                      <button
                        key={carName}
                        type="button"
                        className={`crimson mb-3 text-lg ${
                          selectedCar[0].name === carName
                            ? "bg-[#F0A202] text-white border border-[#F0A202]"
                            : "bg-white text-black border border-gray-700"
                        } rounded-3xl w-full mx-auto text-center py-2`}
                        onClick={() => handleCarSelection(carName)}
                      >
                        {carName}
                      </button>
                    </a>
                  ))}
                </div>
                <div className="car_details">
                  <img
                    className="w-full h-[18rem] rounded-2xl object-contain border border-gray-400"
                    src={selectedCar[0].image}
                    alt={selectedCar[0].name}
                  />

                  <p className="mt-4 ml-2 text-md font-medium leading-5">
                    {selectedCar[0].name} - Seats: {selectedCar[0].seats}, Bags:{" "}
                    {selectedCar[0].bags}
                  </p>
                </div>
              </div>

              <div className="service bg-white rounded-2xl col-span-4 sm:col-span-3 border border-gray-100 px-4 py-4">
                <div className="heading py-3 px-3 sm:px-5 rounded-t-2xl flex justify-between items-center text-white bg-[#F0A202]">
                  <h2 className="crimson text-lg sm:text-2xl tracking-wider font-semibold">
                    {selectedCar[0].name} Services
                  </h2>
                  <h2 className="crimson text-lg sm:text-xl tracking-wider font-semibold">
                    Price
                  </h2>
                </div>

                <div className="routesPrices mt-3">
                  {selectedCar[0].prices.map((data, index) => (
                    <div
                      key={index}
                      className={`py-3 px-3 sm:px-5 flex justify-between items-center gap-x-2 text-black ${
                        index % 2 === 0 ? "bg-gray-200" : "bg-white"
                      }`}
                    >
                      <h2 className="text-sm tracking-wider font-medium">
                        {data.from}{" "}
                        {data.to.length > 1 ? (
                          <span className="font-medium text-gray-700">to </span>
                        ) : (
                          ""
                        )}
                        {data.to}
                      </h2>
                      <h2 className="text-sm tracking-wider text-center flex flex-col sm:flex-row items-center gap-x-1 font-medium">
                        {data.price} <span>SAR</span>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCarsBudget;
