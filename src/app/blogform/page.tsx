"use client";
import { useState } from "react";
import { createBlogPost } from "../components/utils/supabase/blogService";
import { uploadThumbnail } from "../components/utils/supabase/uploadThumbnail";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [sections, setSections] = useState([
    { heading: "", content: "", section_order: 0 },
  ]);

  const addSection = () =>
    setSections([
      ...sections,
      { heading: "", content: "", section_order: sections.length },
    ]);

  const updateSection = (index: number, field: string, value: string) => {
    const updated = [...sections];
    (updated[index] as any)[field] = value;
    setSections(updated);
  };

  const submit = async () => {
    let thumbnailUrl = "";

    if (thumbnail) {
      const uploadedUrl = await uploadThumbnail(thumbnail);
      if (!uploadedUrl) {
        alert("Failed to upload thumbnail");
        return;
      }
      thumbnailUrl = uploadedUrl;
    }

    const success = await createBlogPost(title, author, thumbnailUrl, sections);

    if (success) {
      alert("Blog created successfully!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files?.[0] ?? null)}
        className="border p-2 w-full mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">Sections</h2>
      {sections.map((s, i) => (
        <div key={i} className="mb-4 border p-2">
          <input
            type="text"
            placeholder="Heading"
            value={s.heading}
            onChange={(e) => updateSection(i, "heading", e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <textarea
            placeholder="Content"
            value={s.content}
            onChange={(e) => updateSection(i, "content", e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <button
        onClick={addSection}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Add Section
      </button>
      <button
        onClick={submit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Publish Blog
      </button>
    </div>
  );
}
