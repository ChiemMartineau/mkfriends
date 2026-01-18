import CameraCapture from "@/components/CameraCapture";
import LoginButton from "@/components/LoginButton";
import { uploadImage } from "./actions";
import { summarizeLinkedinProfile } from "@/lib/gumloop";
import { auth0 } from "@/lib/auth0";
import LogoutButton from "@/components/LogoutButton";

async function gumloop() {
  "use server";
  const session = await auth0.getSession();
  console.log(session);
  // console.log(
  //   await summarizeLinkedinProfile(
  //     "https://www.linkedin.com/profile-thirdparty-redirect/AgHeAC738sO9DQAAAZvOVLVqhmkapLFXQCyVtBB3QV0byph8Zxwh8B0fY2gKz1kRhuev_1M_0wci4G_AYpuBDokuXH8Dc3mj-Lp56olADXpR4W0KAzL4b9fbBiZtVdFQ",
  //   ),
  // );
}

export default async function Camera() {
  return (
    <>
      <iframe src="https://linkedin.com"></iframe>
      <LoginButton />
      <LogoutButton />
      <button onClick={gumloop}>GumLoop</button>
    </>
  );
}
