import { supabase } from "./server";

export async function getBlogPosts() {
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
    console.error("Error fetching blog posts:", error);
    return [];
  }

  return data;
}
