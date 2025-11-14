"use client";

import Container from "@/components/container";
import Image from "next/image";
import getVideoId from "get-video-id";
import Link from "next/link";

export default function VideoDetail({ video }) {
  const { id, service } = getVideoId(video.url);

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md">
          {/* Category */}
          <div className="mb-3 mt-8 flex justify-center">
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {video.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {video.title}
          </h1>

          {/* Author Info */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                {video.authorImage && (
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                      src={video.authorImage}
                      alt={video.author}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </div>
                )}
                <div>
                  <p className="text-gray-800 dark:text-gray-200">
                    {video.author}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <time className="text-gray-500 dark:text-gray-400">
                      {video.date}
                    </time>
                    {video.readTime && (
                      <>
                        <span>·</span>
                        <span>{video.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Player */}
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {service === "youtube" && (
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        )}
      </div>

      {/* Content */}
      <Container>
        <article className="mx-auto max-w-screen-md">
          <div className="prose prose-lg mx-auto mt-14 dark:prose-invert">
            {video.description && (
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                {video.description}
              </p>
            )}

            {video.content && (
              <div
                className="mt-8"
                dangerouslySetInnerHTML={{ __html: video.content }}
              />
            )}
          </div>

          {/* Watch on YouTube Button */}
          <div className="mt-10 mb-10 flex justify-center">
            <Link
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}
