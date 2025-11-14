import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";
import getVideoId from "get-video-id";
import { cx } from "@/utils/all";

export default function VideoCard({ video, aspect = "landscape" }) {
  const { id, service } = getVideoId(video.url);

  const getThumbnail = () => {
    if (service === "youtube") {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }
    return video.thumbnail || "/placeholder.jpg";
  };

  return (
    <div className="group cursor-pointer">
      {/* Video Card */}
      <div
        className={cx(
          "relative overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
        )}>
        <Link
          href={`/video/${video.slug}`}
          className={cx(
            "relative block",
            aspect === "landscape"
              ? "aspect-video"
              : aspect === "custom"
              ? "aspect-[5/4]"
              : "aspect-square"
          )}>
          <Image
            src={getThumbnail()}
            alt={video.title || "Video Thumbnail"}
            className="object-cover transition-all"
            fill
            sizes="(max-width: 768px) 30vw, 33vw"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 transition-all group-hover:scale-110 group-hover:bg-red-700">
              <PlayIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </Link>
      </div>

      {/* Video Info */}
      <div className="mt-3">
        {video.category && (
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {video.category}
          </span>
        )}
        <h3
          className={cx(
            "mt-2 font-semibold leading-snug tracking-tight text-black dark:text-white",
            "text-lg"
          )}>
          <Link
            href={`/video/${video.slug}`}
            className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
            {video.title}
          </Link>
        </h3>

        {video.description && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
            {video.description}
          </p>
        )}

        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          {video.author && (
            <>
              <div className="flex items-center gap-2">
                {video.authorImage && (
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <Image
                      src={video.authorImage}
                      alt={video.author}
                      className="rounded-full object-cover"
                      fill
                      sizes="20px"
                    />
                  </div>
                )}
                <span className="truncate text-sm">{video.author}</span>
              </div>
            </>
          )}
          {video.date && (
            <>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              <time className="truncate text-sm">{video.date}</time>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
