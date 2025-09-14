import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Post {
  thumbnail: string;
  title: string;
  date: string;
  disc: string;
}

export function BlogCarousel() {
  const posts: Post[] = [
    {
      thumbnail: "/images/social-media.jpg",
      title: "Why your client needs a responsive website",
      date: "30-aug-2025",
      disc: "The crimson lantern swayed gently as the evening breeze whispered secrets through the alleyway. Somewhere far off, a clock chimed twelve, echoing like the soft footsteps of forgotten dreams",
    },
    {
      thumbnail: "/images/social-media.jpg",
      title: "Top 5 strategies to boost your online presence",
      date: "25-sep-2025",
      disc: "The crimson lantern swayed gently as the evening breeze whispered secrets through the alleyway. Somewhere far off, a clock chimed twelve, echoing like the soft footsteps of forgotten dreams",
    },
    {
      thumbnail: "/images/social-media.jpg",
      title: "How SEO can transform your business",
      date: "10-oct-2025",
      disc: "The crimson lantern swayed gently as the evening breeze whispered secrets through the alleyway. Somewhere far off, a clock chimed twelve, echoing like the soft footsteps of forgotten dreams",
    },
    {
      thumbnail: "/images/social-media.jpg",
      title: "Trends in web development for 2025",
      date: "05-nov-2025",
      disc: "The crimson lantern swayed gently as the evening breeze whispered secrets through the alleyway. Somewhere far off, a clock chimed twelve, echoing like the soft footsteps of forgotten dreams",
    },
  ];

  return (
    <Carousel className="w-full max-md mt-5">
      <CarouselContent className="-ml-1">
        {posts.map((post, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-start p-4">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />

                  <h3 className="text-lg font-semibold text-black mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">{post.disc}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
