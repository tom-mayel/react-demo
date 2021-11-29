import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { Video } from "types";

interface Props {
  video: Video;
  onClick?: () => void;
}

export const VideoCard: FC<Props> = ({
  video: {
    firstName,
    lastName,
    // email,
    // imageUrl,
    thumbnailUrl,
    duration,
    likes,
  },
  onClick,
}) => {
  const min = Math.floor(duration / 60);
  const seconds = String(Math.round(duration % 60)).padStart(2, "0");
  const time = `${min}:${seconds}`;

  return (
    <div className="cursor-pointer font-oxygen" onClick={onClick}>
      <div
        className="relative bg-cover rounded-lg w-50 h-50"
        style={{
          backgroundImage: "url('" + thumbnailUrl + "')",
        }}
      >
        <div
          className="bg-black bg-opacity-60 py-0.5 inline-block text-white absolute top-2.5 left-2.5 rounded-md font-bold text-sm"
          style={{ paddingLeft: 5, paddingRight: 5 }}
        >
          {time}
        </div>
      </div>
      <div className="flex justify-between font-semibold  text-gray-900 mt-3.5 w-50 items-start">
        <span>
          {firstName} {lastName}
        </span>
        <div className="flex items-center">
          <span className="mr-2">{likes}</span>
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        </div>
      </div>
    </div>
  );
};
