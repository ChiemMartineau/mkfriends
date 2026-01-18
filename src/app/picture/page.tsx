import CameraCapture from "@/components/CameraCapture";
import LoginButton from "@/components/LoginButton";
import { uploadImage } from "./actions";
import { summarizeLinkedinProfile } from "@/lib/gumloop";
import { auth0 } from "@/lib/auth0";
import LogoutButton from "@/components/LogoutButton";

export default async function Camera() {
  return (
    <>
      <CameraCapture onSubmit={uploadImage} />
    </>
  );
}
