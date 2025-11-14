import { notFound } from "next/navigation";
import { getVideoBySlug, getAllVideos } from "@/lib/videoData";
import VideoDetail from "./videodetail";

export async function generateStaticParams() {
  const videos = getAllVideos();
  return videos.map(video => ({
    slug: video.slug
  }));
}

export async function generateMetadata({ params }) {
  const video = getVideoBySlug(params.slug);

  if (!video) {
    return {
      title: "Video Not Found"
    };
  }

  return {
    title: video.title,
    description: video.description
  };
}

export default function VideoPage({ params }) {
  const video = getVideoBySlug(params.slug);

  if (!video) {
    notFound();
  }

  return <VideoDetail video={video} />;
}
