import { useFetchData } from "hooks";
import { useCallback, useEffect, useState } from "react";
import { Video } from "types";

export const useVideoLibrary = () => {
  const [videos, setVideos] = useState<Array<Video>>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchData = useFetchData();

  const getNextPage = useCallback(
    async (requestedPage: number) => {
      const { videos: newVideos, total: totalFromApi } = await fetchData(
        requestedPage
      );
      setVideos((old) => [...old, ...newVideos]);
      setTotal(totalFromApi);
      setPage(requestedPage);
    },
    [fetchData]
  );

  useEffect(() => {
    if (!total) {
      getNextPage(1);
    }
  }, [getNextPage, total]);

  return {
    videos,
    page,
    getNextPage,
  };
};
