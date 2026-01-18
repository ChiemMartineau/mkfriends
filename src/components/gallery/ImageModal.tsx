"use client";

import { useEffect } from "react";
import { GalleryItem } from "./types";
import PeopleList from "./PeopleList";
import PeopleRow from "./PeopleRow";
import ProfileModal, { ProfileModalData } from "../ProfileModal";
import { useState } from "react";

type ImageModalProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function ImageModal({ item, onClose }: ImageModalProps) {
  const [selectedPerson, setSelectedPerson] = useState<ProfileModalData | null>(null);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";

      // Add keyframe animations to document if they don't exist
      if (!document.getElementById("modal-animations")) {
        const style = document.createElement("style");
        style.id = "modal-animations";
        style.textContent = `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { 
              opacity: 0;
              transform: scale(0.95);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
          }
        `;
        document.head.appendChild(style);
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  const handleDownload = () => {
    const filename = `${item.name.replace(/\s+/g, "_")}.jpg`;
    const downloadUrl = `/api/download?url=${encodeURIComponent(item.imageUrl)}&filename=${encodeURIComponent(filename)}`;
    
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      style={{
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        className="relative max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "scaleIn 0.3s ease-out",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 flex items-center justify-center size-10 rounded-full bg-black/60 border border-white/40 text-white backdrop-blur-md hover:bg-black/80 transition-all z-10"
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="absolute top-4 right-4 flex items-center justify-center size-10 rounded-full bg-black/60 border border-white/40 text-white backdrop-blur-md hover:bg-black/80 transition-all z-10"
          aria-label="Download"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>

        {/* Image */}
        <img
          src={item.imageUrl}
          alt={item.name}
          className="max-w-full max-h-[calc(60vh-8rem)] h-auto rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Info bar below image */}
        <div className="w-full text-center text-white mt-3">
      {/* <p className="text-sm text-white">
        +{item.points} pts • {item.dateLabel}
      </p> */}

      {/* People list directly under date */}
      {item.people && item.people.length > 0 && (
        <div className="mt-3">
          {/* <PeopleList people={item.people} /> */}
          <PeopleRow
            people={item.people}
            onPersonClick={(p) =>
              setSelectedPerson({
                id: p.id,
                name: p.name,
                avatarUrl: p.avatarUrl,
                groupName: p.groupName,
                linkedinSummary: p.linkedinSummary,
                linkedinUrl: p.linkedinUrl,
                points: p.points,
              })
            }
          />
        </div>
      )}
    </div>
      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
      </div>
    </div>
  );
}
