import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { useAtom } from "jotai";
import {
  Media,
  useMediaContext,
  mediasAtom,
  zeroMedia,
} from "../stores/MediaStore";

export const MediaBox = () => {
  const [medias] = useAtom(mediasAtom);
  const selectedMedia: Media =
    medias.length > 0 ? medias[medias.length - 1] : zeroMedia;
  return (
    <Box key={selectedMedia.id} boxSize="sm">
      <Image src={selectedMedia.url} alt={selectedMedia.title} />
    </Box>
  );
};
