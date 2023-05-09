import VideoCard from "../components/video/VideoCard";
import "@/styles/videos.styles.css";
import { useVideosContext } from "../hooks/hooks";

const Home = () => {
  const { videosData } = useVideosContext();
  return (
    <div className="videosContainer">
      {videosData.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  );
};

export default Home;
