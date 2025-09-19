import { supabase } from "./server";
import type { BlogPostWithSections } from "./Relationtype";

export async function GetSingleBlog(
  id: number,
): Promise<BlogPostWithSections | null> {
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
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching blog post:", error.message);
    return null; // safer than []
  }

  return data as BlogPostWithSections;
}
