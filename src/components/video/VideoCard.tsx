import { SingleVideo } from "../../model";
interface Props {
  video: SingleVideo;
}

const VideoCard = ({ video }: Props) => {
  return (
    <div className="videoCard">
      <div className="videoCard__header">
        <img src={video.thumbnail} alt={video.title} />
        <span>{video.duration}</span>
      </div>

      <p className="videoCard__title">{video.title}</p>
      <p>
        <span>127K views</span> • <span>2 months ago</span>
      </p>
    </div>
  );
};

export default VideoCard;
