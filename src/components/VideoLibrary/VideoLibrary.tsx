import { VideoCard } from "components/VideoCard";
import { useState } from "react";
import { Video } from "types";
import { VideoDetails } from "components/VideoDetails";
import { CustomModal } from "components/CustomModal";
import InfiniteScroll from "react-infinite-scroll-component";
import { useVideoLibrary } from "hooks";

export const VideoLibrary = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video>();

  const { page, videos, getNextPage } = useVideoLibrary();

  return (
    <div className="px-8 py-6 font-oxygen">
      <div className="text-3xl font-extrabold text-gray-800 font-inter">
        Library
      </div>
      <div>
        <InfiniteScroll
          className="h-screen pt-6 mt-5 border-t border-gray-200"
          dataLength={videos.length}
          next={() => {
            getNextPage(page + 1);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-wrap gap-5">
            {videos.map((v) => (
              <VideoCard
                key={v.id}
                video={v}
                onClick={() => {
                  setSelectedVideo(v);
                  setModalOpen(true);
                }}
              />
            ))}
          </div>
        </InfiniteScroll>

        {modalOpen && selectedVideo && (
          <CustomModal
            onClose={() => setModalOpen(false)}
            title={`${selectedVideo.firstName} ${selectedVideo.lastName}`}
          >
            {selectedVideo && <VideoDetails {...selectedVideo} />}
          </CustomModal>
        )}
      </div>
    </div>
  );
};
