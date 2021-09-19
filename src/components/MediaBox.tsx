import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { useAtom, atom } from "jotai";
import {
  Media,
  mediasAtom,
  zeroMedia,
} from "../stores/MediaStore";
import { Skeleton } from "@chakra-ui/react";

export const loadMediaStatusAtom = atom<boolean>(false);

export const MediaBox = () => {
  const [loaded, mediaLoadedSet] = useAtom(loadMediaStatusAtom);
  const [medias, _] = useAtom(mediasAtom);

  React.useEffect( () => {mediaLoadedSet(false); console.log('run effect');}, [medias]);
  const selectedMedia: Media =
    medias.length > 0 ? medias[medias.length - 1] : zeroMedia;

  const setLoaded = () => { mediaLoadedSet(true) }

  return (
    <>{viewGif(selectedMedia, loaded, setLoaded)}</>
  );
}

const viewGif = (media: Media, loadStatus: boolean, setLoaded?: () => void): React.ReactNode => {
  if (media.id === "") {
    return (<></>)
  }
  return (
    <Skeleton isLoaded={loadStatus} >
      <Box key={`box-{selectedMedia.id}`} boxSize="sm">
        <Image key={media.id} src={media.url} alt={media.title} onLoad={setLoaded} />
      </Box>
    </Skeleton >
  )
}

const loadImageOrSkeleton = (media: Media, status: boolean) => {
  if (status) {
    return (
      <Skeleton></Skeleton>
    )
  }
}
