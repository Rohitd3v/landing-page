import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BlogPostWithSections } from "@/features/blog/types";

import Link from "next/link";

interface BlogCarouselProps {
  posts: BlogPostWithSections[];
}
export async function BlogCarousel({ posts }: BlogCarouselProps) {
  return (
    <Carousel className="w-full max-md mt-5">
      <CarouselContent className="-ml-1">
        {posts.map((post: BlogPostWithSections, index: number) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-start p-4">
                  <Image
                    src={post.thumbnail as string}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />

                  <h3 className="text-lg font-semibold text-black mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {post.blog_sections?.[0]?.content ?? ""}
                  </p>
                  <div className="flex mt-3">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-red-600"
                    >
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
