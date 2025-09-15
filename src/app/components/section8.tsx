import { BlogCarousel } from "./BlogCarousel";
import { Button3 } from "./utils/buttons";

export default function Section8() {
  return (
    <div className="w-full bg-white p-6 py-12 px-4 sm:px-6 lg:px-20">
      <div className="flex justify-between items-center flex-wrap">
        {/* Text content on the left */}
        <div className="flex flex-col">
          <p className="text-red-600">Article and News</p>
          <p className="text-black  text-3xl sm:text-4xl lg:text-5xl font-bold ">
            Get every single <br />
            news and blogs
          </p>
        </div>

        {/* Button on the right */}
        <div className="flex">
          <Button3>Browse Services</Button3>
        </div>
      </div>

      <div>
        <BlogCarousel />
      </div>
    </div>
  );
}
