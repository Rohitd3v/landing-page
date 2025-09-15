import { Button3, Button4 } from "./utils/buttons";
import TeamMembers from "./TeamMembersSwiper";
import { ReviewCard } from "./reviewCard";

export default function Section7() {
  return (
    <div className="w-full bg-[#E4C788] py-12 px-4 sm:px-6 lg:px-20">
      {/* Section Heading */}
      <div className="flex flex-col mb-8">
        <p className="text-red-600 mb-4">Meet Our Team</p>
        <div className="flex justify-between items-center">
          <p className="text-black text-5xl font-bold">
            Experience <br /> Team Members
          </p>
          <Button3>Browse Services</Button3>
        </div>
      </div>

      {/* Team Members Component */}
      <div className="flex my-5">
        <TeamMembers />
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center justify-center bg-white py-12">
        <p className="text-red-600 mb-2">Testimonial</p>
        <p className="text-black   text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          What Our Client Says
        </p>

        <div className="flex gap-6 px-4 flex-wrap">
          {/* Testimonial Card */}
          <ReviewCard />
        </div>

        <div className="flex mt-6 ">
          <Button4>All Reviews</Button4>
        </div>
      </div>
    </div>
  );
}
