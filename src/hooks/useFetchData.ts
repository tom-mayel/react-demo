import axios from "axios";
import { useCallback } from "react";
import { ApiUploadsResponse } from "types";
import { v4 as uuidv4 } from "uuid";

export const useFetchData = () => {
  const fetchData = useCallback(async (page: number) => {
    const data = await axios
      .get<ApiUploadsResponse>(
        `https://tech-test-service-staging.seenit.studio/v1/uploads?page=${page}&perPage=40`,
        {
          headers: {
            Authorization: "BASIC tsvetelin@mayel.net",
          },
        }
      )
      .then((res) => {
        const videosWithIds = res.data.rows.map((r) => ({
          ...r,
          id: uuidv4(),
        }));
        return {
          videos: videosWithIds,
          total: res.data.total,
        };
      });

    return data;
  }, []);
  return fetchData;
};
