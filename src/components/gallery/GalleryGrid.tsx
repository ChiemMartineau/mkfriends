"use client";

import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import ImageModal from "./ImageModal";
import { GALLERY_ITEMS } from "./galleryData";
import { GalleryItem } from "./types";
import Link from "next/link";

function getFeaturedIndices(totalItems: number) {
  const featured = new Set<number>();
  // Start at index 0 or 2 (1st or 3rd image)
  let nextIndex = Math.floor(Math.random() * 2) * 2;

  while (nextIndex < totalItems) {
    featured.add(nextIndex);
    // Add spacing: 3 or 5 to have 2 or 4 regular images between featured ones
    const spacing = [3, 5][Math.floor(Math.random() * 2)];
    nextIndex += spacing;
  }

  return featured;
}

export default function GalleryGrid() {
  // Initialize featured indices only on client to avoid hydration mismatch
  const [featuredIndices, setFeaturedIndices] = useState<Set<number>>(
    new Set(),
  );
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    // Calculate featured indices only on client side
    setFeaturedIndices(getFeaturedIndices(GALLERY_ITEMS.length));
  }, []);

  return (
    <main className="flex-1 max-w-md mx-auto w-full pb-24">
      <div
        className="grid gap-3 p-4"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {GALLERY_ITEMS.map((item, index) => {
          const isFeatured = featuredIndices.has(index);
          return (
            <div
              key={item.id}
              style={isFeatured ? { gridColumn: "1 / -1" } : {}}
            >
              <GalleryCard
                item={item}
                isFeatured={isFeatured}
                onClick={() => setSelectedItem(item)}
              />
            </div>
          );
        })}

        <Link
          href="/picture"
          className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] bg-white flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-pale-green"
        >
          <div className="bg-pale-green-light rounded-full p-3 mb-2">
            <span className="material-symbols-outlined text-3xl text-green-400">
              add_a_photo
            </span>
          </div>
          <p className="text-green-800 font-medium text-sm">
            Find more people!
          </p>
        </Link>
      </div>

      <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  );
}
