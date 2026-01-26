import cloudinary from "./cloudinary";

export async function deleteImage(image: string | undefined) {
  if (image) {
    const url = image.split("/").at(-1)?.split(".").at(0);
    await cloudinary.uploader.destroy("healthyRecipeFinder/" + url);
  }
}
