import Image from "next/image";
import { Button, Button2 } from "./utils/buttons";
const HeroSection = () => {
  return (
    <section className="w-full bg-[#E3E2E0] pb-0 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Column */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            We Provide Best Business Solutions
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Establish your vision and value proposition and turn them into
            testable prototypes.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <Button>Get Consulting</Button>
            <Button2>Learn more</Button2>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/girlpng.png"
            alt="Business Consultant"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
