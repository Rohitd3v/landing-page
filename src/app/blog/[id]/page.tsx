import { GetSingleBlog } from "@/features/blog/api";
import type { BlogPostWithSections } from "@/features/blog/types";

import Head from "next/head";
import Image from "next/image";
interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Blog({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  const post = await GetSingleBlog(id);

  if (!post) {
    return <div className="p-8 text-red-500">Failed to load blog post.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Head metadata */}
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Blog post by ${post.author}`} />
      </Head>

      {/* Thumbnail */}
      {post.thumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={1200}
          height={400}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}

      {/* Title & Author */}

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        By {post.author} •{" "}
        {post.created_at
          ? new Date(post.created_at).toLocaleDateString()
          : "Unknown date"}
      </p>

      <article className="prose lg:prose-lg">
        {post.blog_sections
          ?.sort(
            (
              a: BlogPostWithSections["blog_sections"][number],
              b: BlogPostWithSections["blog_sections"][number],
            ) => (a.section_order ?? 0) - (b.section_order ?? 0),
          )
          .map((
            section: BlogPostWithSections["blog_sections"][number],
            index: number,
          ) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
              <p>{section.content}</p>
            </section>
          ))}
      </article>
    </div>
  );
}
