import { supabase } from "./server";

interface BlogSectionInput {
  heading: string;
  content: string;
  section_order: number;
}

export async function createBlogPost(
  title: string,
  author: string,
  thumbnail: string,
  sections: BlogSectionInput[],
) {
  try {
    // Insert blog post
    const { data: post, error: postError } = await supabase
      .from("blog_posts")
      .insert([{ title, author, thumbnail }])
      .select("id")
      .single();

    if (postError) throw postError;
    if (!post) throw new Error("Failed to create blog post");

    // Insert sections
    const sectionsWithBlogId = sections.map((s, i) => ({
      blog_id: post.id,
      heading: s.heading,
      content: s.content,
      section_order: i,
    }));

    const { error: sectionError } = await supabase
      .from("blog_sections")
      .insert(sectionsWithBlogId);

    if (sectionError) throw sectionError;

    return post;
  } catch (err) {
    console.error("Error creating blog:", err);
    throw err;
  }
}
