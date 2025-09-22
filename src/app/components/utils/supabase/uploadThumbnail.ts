import { supabase } from "./server";

export async function uploadThumbnail(file: File): Promise<string | null> {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `thumbnails/${fileName}`;

    // Upload file
    const { error: uploadError } = await supabase.storage
      .from("blog-thumbnails")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Error uploading file:", uploadError.message);
      return null;
    }

    // Get public URL
    const { data } = supabase.storage
      .from("blog-thumbnails")
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (err) {
    console.error("Upload failed:", err);
    return null;
  }
}
