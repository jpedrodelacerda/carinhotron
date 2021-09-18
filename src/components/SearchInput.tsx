import * as React from "react";
import { Input } from "@chakra-ui/input";
import {
  addMediaAtom,
  Media,
  mediasAtom,
  newMediaAtom,
  searchAtom,
} from "../stores/MediaStore";
import { useAtom } from "jotai";
import { fetchGif } from "../services/giphy";

export const SearchInput = () => {
  const [text, textSet] = useAtom(searchAtom);
  const [, newMediaSet] = useAtom(newMediaAtom);
  const [, addMedia] = useAtom(addMediaAtom);

  const fetchTag = async () => {
    await fetchGif(text).then((gif: Media) => {
      console.log("add via submit");
      newMediaSet(gif);
      addMedia();
    });
  };

  return (
    <Input
      value={text}
      placeholder="dog"
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          fetchTag();
        }
      }}
      onChange={(event) => textSet(event.target.value)}
    ></Input>
  );
};
