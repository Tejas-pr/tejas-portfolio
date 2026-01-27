"use client";

import { useState } from "react";
import YoutubeMusic from "../svg/YoutubeMusic";
import Play from "../svg/Play";

export default function YTMusicPlaylistCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const PLAYLIST_ID = "PLw_kUM5bQGPJvYlWjHxct44ZAO2dwlI-s";

  const track = {
    title: "01_AA_songs_",
    artist: "Tejas P R • Playlist • 2026",
    cover:
      "https://images.unsplash.com/photo-1583071647239-da8180d40b99?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="w-full max-w-2xl mt-10 mb-10">
      <div className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-[#0a0a0a] dark:hover:bg-neutral-900/50">
        {/* Album Art */}
        <div className="relative shrink-0 overflow-hidden rounded-md">
          <img
            src={track.cover}
            alt={track.title}
            className="h-16 w-16 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center gap-0.5 overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-red-500">
              <YoutubeMusic className="h-4 w-4" />
            </span>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Playlist
            </span>
          </div>
          <h3 className="truncate font-medium text-neutral-900 dark:text-neutral-200">
            {track.title}
          </h3>
          <p className="truncate text-sm text-neutral-600 dark:text-neutral-500">
            {track.artist}
          </p>
        </div>

        {/* Play Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-transparent text-neutral-700 transition-colors hover:scale-105 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <Play className="ml-0.5 h-4 w-4" />
        </button>
      </div>

      {/* Player */}
      {isPlaying && (
        <div className="mt-4 overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1`}
            title="YouTube playlist player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
