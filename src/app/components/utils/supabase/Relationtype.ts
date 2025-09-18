import type { Tables } from "./types";

type BlogPostRow = Tables<"blog_posts">;
type BlogSectionRow = Tables<"blog_sections">;

export type BlogPostWithSections = BlogPostRow & {
  blog_sections: BlogSectionRow[];
};
