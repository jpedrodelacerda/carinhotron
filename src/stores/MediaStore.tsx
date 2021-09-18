import { atom } from "jotai";

export interface Media {
  type: string;
  id: string;
  url: string;
  title: string;
}

export const zeroMedia: Media = {
  type: "",
  id: "",
  url: "",
  title: "",
};

const getFirstMedia = (medias: Media[]): Media => {
  if (medias[0] !== null) {
    return medias[0];
  }
  return zeroMedia;
};

const removeMedia = (medias: Media[], id: Media["id"]) =>
  medias.filter((media) => media.id !== id);

const addMedia = (medias: Media[], media: Media): Media[] => {
  return [...medias, media];
};

// Jotai implementation
export const newMediaAtom = atom<Media>(zeroMedia);
export const mediasAtom = atom<Media[]>([]);
export const searchAtom = atom<string>("");
export const addMediaAtom = atom(
  () => zeroMedia,
  (get, set) => {
    set(mediasAtom, addMedia(get(mediasAtom), get(newMediaAtom)));
    set(newMediaAtom, zeroMedia);
  }
);
