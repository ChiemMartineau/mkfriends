import CameraCapture from "@/components/CameraCapture";
import { uploadImage } from "./actions";

export default async function Camera() {
  return (
    <>
      <CameraCapture onSubmit={uploadImage} />
    </>
  );
}
