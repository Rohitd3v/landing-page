import { Footer7 } from "@/components/ui/footer-7";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import {
  FeaturesOverview,
  ConsultingIntro,
  ServicesGrid,
  WhyChooseUs,
  ProjectsShowcase,
  TeamAndTestimonials,
  BlogHighlights,
} from "./components/sections";
import { getBlogPosts } from "@/features/blog/api";

export default async function Home() {
  const posts = await getBlogPosts();
  return (
    <div className="w-full bg-[#E3E2E0] ">
      <NavBar />
      <HeroSection />
      <FeaturesOverview />
      <ConsultingIntro />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectsShowcase posts={posts} />
      <TeamAndTestimonials />
      <BlogHighlights posts={posts} />
      <Footer7 />
    </div>
  );
}
