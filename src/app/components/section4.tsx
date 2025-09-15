import { Button3 } from "./utils/buttons";

export default function Section4() {
  const items = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 text-black"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Business Advice",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 text-black"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "startup Business",
      disc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 text-black"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "financial Advice",
      disc: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 text-black"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Risk Management",
      disc: "Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    },
  ];

  return (
    <div className="w-full bg-[#E3E2E0] py-12 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col">
        <div className="text-red-700 mb-3">
          <p>our services</p>
        </div>
        <div className="text-black font-bold  text-3xl sm:text-4xl lg:text-5xl mb-8">
          <h1>We Provide The Best service For Consulting</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between ${index === 1 ? "bg-[#EDCE85]" : "bg-white"} p-4 h-full`}
            >
              <div>
                <div className="text-black font-bold mb-2">
                  <p>{item.name}</p>
                </div>
                <div className="text-gray-600 text-sm">
                  <p>{item.disc}</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button3>Browse services</Button3>
      </div>
      <div>
        <hr className="border-t border-gray-600 mt-6" />

        <div className="flex flex-row justify-around text-center text-black py-4  ">
          <div className="flex flex-col">
            <p>
              <u>5310</u>
            </p>
            <p className="text-gray-700">happy client</p>
          </div>
          <div className="flex flex-col">
            <p>
              <u>5310</u>
            </p>
            <p className="text-gray-700">Complete project</p>
          </div>
          <div className="flex flex-col">
            <p>
              <u>5310</u>
            </p>
            <p className="text-gray-700">Running work</p>
          </div>

          <div className="flex flex-col">
            <p>
              <u>5310</u>
            </p>
            <p className="text-gray-700">winning Award</p>
          </div>
        </div>

        <hr className="border-t border-gray-600" />
      </div>
    </div>
  );
}
