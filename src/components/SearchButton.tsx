import * as React from "react";
import { IconButton } from "@chakra-ui/button";
import { Media, newMediaAtom, useMediaContext, addMediaAtom, searchAtom } from "../stores/MediaStore";
import { FaHeart } from "react-icons/fa"
import { fetchGif } from "../services/giphy";
import { useAtom } from "jotai";

export const SearchButton = () => {
    // const { medias, addMedia, setNewMedia } = useMediaContext();
    const [, newMediaSet] = useAtom(newMediaAtom);
    const [, addMedia] = useAtom(addMediaAtom);
    const [searchTag,] = useAtom(searchAtom);

    const getDoggo = async () => {
        await fetchGif(searchTag)
            .then((gif: Media) => {
                newMediaSet(gif);
                console.log()
                addMedia();
            });
        // console.log(medias);
    }
    return (
        <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={getDoggo}
            icon={<FaHeart />}
            aria-label="Get Doggo"
        />);
}
