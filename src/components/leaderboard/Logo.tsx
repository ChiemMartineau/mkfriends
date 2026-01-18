"use client";
import { useEffect, useState } from "react";

export default function Logo() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSmall(window.scrollY > 40); // tweak threshold
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerBase =
    "flex items-center justify-center w-48 h-28 rounded-full bg-primary/10 transition-transform duration-300 ease-out";
  const containerSize = small ? "scale-75" : "scale-120";
  const containerClassName = [containerBase, containerSize].join(" ");

  //   const containerClass =
  //     "flex items-center justify-center size-40 rounded-full bg-primary/10 text-primary transition-transform duration-300 ease-out";

  //   const scale = small ? "scale-70" : "scale-100";
  return (
    <div className={containerClassName}>
      <img src="/mkfriends.png" alt="MkFriends Logo" />
    </div>
  );
}
