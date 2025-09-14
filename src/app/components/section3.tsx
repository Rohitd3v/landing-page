import Image from "next/image";
import { Button } from "./utils/buttons";

export default function Section3() {
  return (
    <div className="w-full bg-white mx-auto flex flex-col-reverse lg:flex-row items-center px-4 lg:px-20 pt-8 pb-0">
      {/* Right Image */}
      <div className=" relative lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
        <Image
          src="/images/girlpng.png"
          alt="office"
          width={400}
          height={400}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto"
        />
        <div className="absolute flex flex-col bg-yellow-500 bottom-6 p-4 lg:left-0 ">
          <div className="flex flex-row mb-3 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 text-black"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-black font-bold text-xl">
              Rohit Negi,{" "}
              <span className="text-red-700 font-bold">Founder</span>
            </p>
          </div>
          <div className="text-black">
            <p>
              “Just one small positive thought in
              <br /> the morning can change your whole day“
            </p>
          </div>
        </div>
      </div>

      {/* Left Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left px-4">
        <p className="text-left font-bold mb-4 text-red-500">Features</p>
        <h1 className="font-bold text-gray-900 text-3xl sm:text-4xl lg:text-4xl mb-5 ">
          We Are Business <br /> Consulting & Credit <br /> Repair Experts.
        </h1>
        <p className="text-black text-sm sm:text-base mb-6">
          We are dedicated business consulting and credit repair experts
          committed to helping you achieve your financial goals. Our team
          provides strategic guidance to optimize your business operations and
          delivers personalized credit repair solutions to improve your
          financial standing.
        </p>
        <div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
