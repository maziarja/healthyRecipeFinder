import cloudinary from "./cloudinary";

export async function cloudinaryUploadImage(image: File | null) {
  if (image) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "healthyRecipeFinder",
              resource_type: "image",
            },
            (error, result) => {
              if (error || !result) return reject(error);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              resolve(result as any);
            },
          )
          .end(buffer);
      },
    );
    return uploadResult.secure_url;
  }
}
