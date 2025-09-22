import { supabase } from "@/lib/supabase";
import type { BlogPostWithSections } from "@/features/blog/types";

export async function getBlogPosts(): Promise<BlogPostWithSections[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      id,
      title,
      author,
      thumbnail,
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

  return (data ?? []) as BlogPostWithSections[];
}


