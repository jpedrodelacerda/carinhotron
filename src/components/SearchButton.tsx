import * as React from "react";
import { IconButton } from "@chakra-ui/button";
import {
  Media,
  newMediaAtom,
  addMediaAtom,
  searchAtom,
} from "../stores/MediaStore";
import { FaHeart } from "react-icons/fa";
import { fetchGif } from "../services/giphy";
import { useAtom } from "jotai";

export const SearchButton = () => {
  const [, newMediaSet] = useAtom(newMediaAtom);
  const [, addMedia] = useAtom(addMediaAtom);
  const [searchTag] = useAtom(searchAtom);

  const getGif= async () => {
    await fetchGif(searchTag).then((gif: Media): void => {
      newMediaSet(gif);
      addMedia();
    });
  };
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={getGif}
      icon={<FaHeart />}
      aria-label="Get Doggo"
    />
  );
};
