"use client";

import { useState } from "react";
import { updateProfilePicture } from "@/app/(authenticated)/profile/actions";

type ProfilePictureEditorProps = {
  currentPicture: string | null;
};

export default function ProfilePictureEditor({
  currentPicture,
}: ProfilePictureEditorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (!imageUrl.trim()) {
      setError("Please enter a valid image URL");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await updateProfilePicture(imageUrl.trim());
      setIsModalOpen(false);
      setImageUrl("");
      // Refresh the page to show the new picture
      window.location.reload();
    } catch (err) {
      setError("Failed to update profile picture. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-6 mb-8">
        <div className="relative group cursor-pointer">
          <div
            onClick={() => setIsModalOpen(true)}
            className="h-32 w-32 rounded-full bg-slate-100 bg-center bg-cover border-4 border-white shadow-card"
            style={{
              backgroundImage: currentPicture
                ? `url("${currentPicture}")`
                : 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27128%27 height=%27128%27 viewBox=%270 0 100 100%27%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2750%27 fill=%27%23d1d5db%27/%3E%3Cpath d=%27M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z%27 fill=%27%23fff%27/%3E%3C/svg%3E")',
            }}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-1 right-1 h-9 w-9 bg-melon-green hover:bg-melon-green-dark text-white rounded-full border-[3px] border-white flex items-center justify-center shadow-md transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">edit</span>
          </button>
        </div>
        <p className="mt-3 text-slate-400 text-sm font-medium">
          Tap to change photo
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setImageUrl("");
                setError(null);
              }}
              className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-slate-400">
                close
              </span>
            </button>

            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Update Profile Picture
            </h3>

            <div className="mb-4">
              <label className="block text-slate-600 text-sm font-semibold mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
              {error && (
                <p className="mt-2 text-sm text-red-500 font-medium">{error}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setImageUrl("");
                  setError(null);
                }}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSubmitting}
                className="flex-1 bg-melon-green hover:bg-melon-green-dark text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
