import axios, { AxiosResponse } from "axios";
import { Media } from "../stores/MediaStore";

const GIPHY_API_KEY = "mETc98QJnPuQ7RtQ8buh4acAwhDRBmLn";
const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/random";

const client = axios.create({
  baseURL: GIPHY_BASE_URL,
  params: {
    api_key: GIPHY_API_KEY,
  },
});

export const fetchGif = async (tag: string): Promise<Media> => {
  const finalTag = tag === "" ? "dog" : tag;
  return client
    .get("", {
      params: {
        tag: finalTag,
        api_key: GIPHY_API_KEY,
      },
    })
    .then((resp: AxiosResponse) => resp.data.data)
    .then((data) => {
      const gif: Media = {
        id: data.id,
        url: data.image_url,
        type: "gif",
        title: data.title,
      };
      return gif;
    });
};
