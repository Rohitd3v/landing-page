import Image from "next/image";
import { Button } from "./utils/buttons";

export default function Section3() {
  return (
    <div className="w-full bg-white mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-20 pt-8 pb-0">
      {/* Left Image */}
      <div className="relative lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
        <Image
          src="/images/girlpng.png"
          alt="office"
          width={400}
          height={400}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto rounded-xl"
        />
        {/* Testimonial Card (floating) */}
        <div className="absolute -bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 lg:left-4 lg:translate-x-0 bg-yellow-500 p-5 sm:p-6 rounded-xl shadow-2xl w-11/12 sm:w-80 lg:w-72">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7 text-black"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-black font-bold text-sm sm:text-base">
              Rohit Negi,{" "}
              <span className="text-red-700 font-bold">Founder</span>
            </p>
          </div>
          <p className="text-black text-xs sm:text-sm ">
            “Just one small positive thought in the morning can change your
            whole day“
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <p className="font-bold mb-4 text-red-500">Features</p>
        <h1 className="font-bold text-gray-900  text-3xl sm:text-4xl lg:text-5xl mb-5 leading-snug">
          We Are Business Consulting & Credit Repair Experts.
        </h1>
        <p className="text-black text-sm sm:text-base mb-6 leading-relaxed">
          We are dedicated business consulting and credit repair experts
          committed to helping you achieve your financial goals. Our team
          provides strategic guidance to optimize your business operations and
          delivers personalized credit repair solutions to improve your
          financial standing.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
