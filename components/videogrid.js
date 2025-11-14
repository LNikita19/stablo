import Container from "@/components/container";
import VideoCard from "@/components/videocard";
import { getAllVideos } from "@/lib/videoData";

export default function VideoGrid({ videos, title = "Featured Videos" }) {
  // Use provided videos or get all videos from videoData
  const displayVideos = videos || getAllVideos();

  return (
    <Container>
      {title && (
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            {title}
          </h2>
        </div>
      )}

      {/* First row - 2 videos in landscape */}
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        {displayVideos.slice(0, 2).map((video) => (
          <VideoCard key={video.slug} video={video} aspect="landscape" />
        ))}
      </div>

      {/* Remaining videos - 3 columns grid */}
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {displayVideos.slice(2, 14).map((video) => (
          <VideoCard key={video.slug} video={video} aspect="square" />
        ))}
      </div>
    </Container>
  );
}
