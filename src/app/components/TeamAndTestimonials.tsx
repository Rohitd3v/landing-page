import { Button3, Button4 } from "./utils/buttons";
import TeamMembers from "./TeamMembersSwiper";
import { ReviewCard } from "./reviewCard";

export default function TeamAndTestimonials() {
  return (
    <div className="w-full bg-[#E4C788] py-12 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col mb-8">
        <p className="font-bold mb-3 text-red-500">Meet Our Team</p>
        <div className="flex justify-between items-center">
          <p className="text-black text-5xl font-bold">Experience Team Members</p>
          <Button3>Browse Services</Button3>
        </div>
      </div>

      <div className="flex my-5">
        <TeamMembers />
      </div>

      <div className="flex flex-col items-center justify-center bg-white py-12">
        <p className="font-bold mb-3 text-red-500">Testimonial</p>
        <p className="text-black   text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">What Our Client Says</p>
        <div className="flex gap-6 px-4 flex-wrap">
          <ReviewCard />
        </div>
        <div className="flex mt-6 "><Button4>All Reviews</Button4></div>
      </div>
    </div>
  );
}


