"use client";

import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

interface YouTubeVideoPlayerProps {
  videoId: string;
  title: string;
  channelName?: string;
  className?: string;
}

export default function YouTubeVideoPlayer({
  videoId,
  title,
  channelName = "The Lallantop • Sehat",
  className = "",
}: YouTubeVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <div
      className={`relative aspect-video rounded-md overflow-hidden bg-slate-900 border border-slate-300 shadow-md group ${className}`}
    >
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6CB29D] focus:ring-offset-2"
          aria-label={`Play video: ${title}`}
        >
          {/* Thumbnail */}
          <img
            src={thumbSrc}
            alt={title}
            onError={() =>
              setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
            }
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 group-hover:via-black/25 transition-all" />

          {/* Top Metadata Badge */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs pointer-events-none">
            <span className="px-2.5 py-1 rounded bg-[#002C47]/90 text-white border border-white/20 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
              {channelName}
            </span>
            <span className="px-2 py-0.5 rounded bg-black/70 text-white/90 text-[11px] font-medium backdrop-blur-sm">
              YouTube
            </span>
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-20 h-20 rounded-full bg-[#6CB29D]/30 animate-ping group-hover:bg-red-500/30" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
              </div>
            </div>
          </div>

          {/* Bottom Video Info */}
          <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
            <p className="text-white font-medium text-xs sm:text-sm line-clamp-2 drop-shadow-md">
              {title}
            </p>
            <span className="text-[11px] text-slate-300 flex items-center gap-1 mt-1 font-light">
              Click to play video inside page
            </span>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      )}
    </div>
  );
}
