import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

const extractYouTubeVideoId = (rawUrl) => {
  if (typeof rawUrl !== 'string' || !rawUrl.trim()) return null;

  try {
    const url = new URL(rawUrl.trim());
    const hostname = url.hostname.replace(/^www\./, '').toLowerCase();
    let candidate = null;

    if (hostname === 'youtu.be') {
      candidate = url.pathname.split('/').filter(Boolean)[0];
    } else if (['youtube.com', 'm.youtube.com', 'music.youtube.com'].includes(hostname)) {
      if (url.pathname === '/watch') {
        candidate = url.searchParams.get('v');
      } else if (url.pathname.startsWith('/embed/')) {
        candidate = url.pathname.split('/')[2];
      } else if (url.pathname.startsWith('/shorts/')) {
        candidate = url.pathname.split('/')[2];
      }
    }

    return candidate && YOUTUBE_ID_PATTERN.test(candidate) ? candidate : null;
  } catch {
    return null;
  }
};

const getSafeExternalUrl = (rawUrl) => {
  try {
    const url = new URL(rawUrl);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : 'https://www.youtube.com/';
  } catch {
    return 'https://www.youtube.com/';
  }
};

const LazyYouTubeEmbed = ({ video, isActive, onPlay }) => {
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const videoId = extractYouTubeVideoId(video?.url);
  const title = video?.title || 'YouTube video';

  if (!videoId) {
    return (
      <div className="media-placeholder aspect-video p-6 text-center">
        <a
          href={getSafeExternalUrl(video?.url)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0ea5e9] hover:text-white"
        >
          Open video on YouTube <ExternalLink size={16} />
        </a>
      </div>
    );
  }

  if (isActive) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={onPlay}
      className="group/video relative block h-full w-full overflow-hidden bg-[#07111d] text-white"
      aria-label={`Play ${title}`}
    >
      {!thumbnailFailed ? (
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`${title} thumbnail`}
          loading="lazy"
          decoding="async"
          width="480"
          height="360"
          onError={() => setThumbnailFailed(true)}
          className="h-full w-full object-cover opacity-75 transition-opacity group-hover/video:opacity-95"
        />
      ) : (
        <span className="media-placeholder absolute inset-0">Video preview</span>
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-xl transition-transform group-hover/video:scale-105">
          <Play className="ml-1" fill="currentColor" size={30} />
        </span>
      </span>
    </button>
  );
};

export default LazyYouTubeEmbed;
