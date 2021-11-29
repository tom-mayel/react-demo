import { FC } from "react";
import { Video } from "types";

export const VideoDetails: FC<Video> = ({ imageUrl, lastName, firstName }) => {
  return (
    <div className="flex">
      <img src={imageUrl} className="full" alt={`${firstName} ${lastName}`} />
    </div>
  );
};
