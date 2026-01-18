"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const videoConstraints: MediaStreamConstraints = {
  video: {
    facingMode: "user",
  },
  audio: false,
};

type CameraCaptureProps = {
  onSubmit?: (blob: Blob) => void;
};

export default function CameraCapture({ onSubmit }: CameraCaptureProps) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [isFrozen, setIsFrozen] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const stopStream = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };

    const startStream = async () => {
      setIsInitializing(true);
      setErrorMessage(null);

      try {
        const stream =
          await navigator.mediaDevices.getUserMedia(videoConstraints);

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (error) {
        if (!cancelled) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Unable to access the camera. Please check permissions.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsInitializing(false);
        }
      }
    };

    startStream();

    return () => {
      cancelled = true;
      stopStream();
    };
  }, []);

  const handleCapture = () => {
    if (isFrozen) {
      return;
    }

    const video = videoRef.current;

    if (!video || video.videoWidth === 0 || video.videoHeight === 0) {
      setErrorMessage("Camera not ready yet. Please try again in a moment.");
      return;
    }

    video.pause();
    setIsFrozen(true);
  };

  const handleRetake = () => {
    setErrorMessage(null);
    if (videoRef.current) {
      void videoRef.current.play();
    }
    setIsFrozen(false);
  };

  const captureFrameBlob = async (): Promise<Blob | null> => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (
      !video ||
      !canvas ||
      video.videoWidth === 0 ||
      video.videoHeight === 0
    ) {
      return null;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    if (!context) {
      return null;
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.92),
    );

    if (!blob) {
      return null;
    }

    return blob;
  };

  const handleSubmit = async () => {
    setErrorMessage(null);

    const blob = await captureFrameBlob();
    if (!blob) {
      setErrorMessage("Unable to capture the frame.");
      return;
    }

    onSubmit?.(blob);
  };

  const controlBase =
    "group absolute left-1/2 -translate-x-1/2 items-center justify-center rounded-full shadow-lg transition duration-300 hover:scale-105 active:scale-95";
  const mutedSurface =
    "border border-white/60 bg-white/20 text-white backdrop-blur-sm";
  const primarySurface =
    "border-4 border-rose-300/90 bg-rose-400 hover:bg-rose-500 text-white";

  return (
    <div className="fixed inset-0 overflow-hidden bg-slate-900">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        playsInline
        muted
      />

      <canvas ref={canvasRef} className="hidden" />

      {isInitializing ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-white/80">
          Starting camera...
        </div>
      ) : null}

      {errorMessage ? (
        <div className="absolute left-3 top-3 rounded-lg bg-rose-500/80 px-3 py-1 text-xs text-white">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 border border-white/60 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Close"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
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

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center">
        <div className="relative flex h-16 w-44 items-center justify-center">
          <button
            type="button"
            onClick={handleRetake}
            disabled={!isFrozen}
            className={`${controlBase} ${mutedSurface} flex h-10 w-10 disabled:cursor-not-allowed ${
              isFrozen
                ? "translate-x-[-240%] opacity-100"
                : "translate-x-0 opacity-0 pointer-events-none"
            }`}
            aria-label="Retake"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className={`${controlBase} ${primarySurface} z-10 flex h-16 w-16 transition-all ease-out ${
              isFrozen
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0 pointer-events-none"
            }`}
            aria-label="Submit"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 -translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleCapture}
            disabled={isFrozen || isInitializing}
            className={`group flex h-15 w-15 items-center justify-center rounded-full border-4 border-rose-300/90 hover:bg-rose-500 shadow-lg transition duration-300 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${
              isFrozen
                ? "scale-75 opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
            aria-label="Capture frame"
          >
            <span className="h-11 w-11 rounded-full bg-rose-400 transition group-active:scale-95" />
          </button>
        </div>
      </div>
    </div>
  );
}
