import { Video } from "types";

export interface ApiUploadsResponse {
  rows: Array<Video>;
  resultCount: number;
  frameSize: number;
  total: number;
}
