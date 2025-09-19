import Image from "next/image";
import { Button2 } from "./utils/buttons";
import { BlogPostWithSections } from "./utils/supabase/Relationtype";
import Link from "next/link";
interface BlogCarouselProps {
  posts: BlogPostWithSections[];
}
export default async function Section6({ posts }: BlogCarouselProps) {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-4">
        <p className="font-bold mb-3 text-red-500">Project and Case studies</p>
        <h1 className="font-bold text-gray-900  text-3xl sm:text-4xl lg:text-5xl">
          Lets Looks Our Global Projects
        </h1>
      </div>

      <hr className="border-t border-gray-600 mt-6" />

      {/* Navigation Tabs */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-black">
        <div className="flex items-center bg-[#EDCE84] rounded-md px-4 py-2 gap-2 hover:bg-yellow-300 cursor-pointer">
          Discover All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
        <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          Business Advice
        </div>
        <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          Startup Business
        </div>
        <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          Financial Advice
        </div>
        <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          Risk Management
        </div>
      </div>

      <hr className="border-t border-gray-600 mt-6" />

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {posts.map((post: BlogPostWithSections, index: number) => (
          <div
            key={index}
            className=" overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={post.thumbnail as string}
              alt="post"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-black font-semibold mb-2">{post.title}</h2>
              <hr className="border-t border-gray-300 mb-2" />
              <div className="flex justify-between text-gray-500 text-sm">
                <span>
                  {post.created_at ? post.created_at.split("T")[0] : "Unknown"}
                </span>
                <span className="hover:text-red-600 cursor-pointer">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-red-600"
                  >
                    Read more →
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button2>All Recent Projects</Button2>
      </div>
    </div>
  );
}
