import { supabase } from "./server";
import type { BlogPostWithSections } from "./Relationtype";

export async function getBlogPosts(): Promise<BlogPostWithSections[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      id,
      title,
      author,
      created_at,
      blog_sections (
        heading,
        content,
        section_order
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return [];
  }

  console.log("fetch blog post sucessfull");

  return (data ?? []) as BlogPostWithSections[];
}
