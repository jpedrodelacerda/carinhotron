import * as React from "react";
import { atom, Atom } from "jotai";

export interface Media {
    type: string,
    id: string,
    url: string,
    title: string,
}

export const zeroMedia: Media = {
    type: "",
    id: "",
    url: "",
    title: ""
}

const getFirstMedia = (medias: Media[]): Media => {
    if (medias[0] !== null) {
        return medias[0];
    }
    return zeroMedia;
}

const removeMedia = (medias: Media[], id: Media['id']) =>
    medias.filter((media) => media.id !== id);

const addMedia = (medias: Media[], media: Media): Media[] => {
    console.log('Adicionando', media);
    return [...medias,
        media
    ];
}

// Custom hook
const useMedias = (initial: Media[] = []) => {
    const [medias, setMedias] = React.useState<Media[]>(initial);
    const [newMedia, setNewMedia] = React.useState<Media>(zeroMedia);

    return {
        medias,
        newMedia,
        setNewMedia,
        addMedia: React.useCallback(() => {
            setMedias((ml) => addMedia(ml, newMedia));
        }, [newMedia]),
        getFirstMedia,
        removeMedia: (id: string) => setMedias((ml) => removeMedia(ml, id)),
    }
}

const MediaContext = React.createContext<ReturnType<typeof useMedias> | null>(null);

export const useMediaContext = () => React.useContext(MediaContext)!;

export function MediaProvider({ children }: { children: React.ReactNode }) {
    return (
        <MediaContext.Provider value={useMedias([])}>
            {children}
        </MediaContext.Provider>
    )
}

// Jotai implementation
export const newMediaAtom = atom<Media>(zeroMedia);
export const mediasAtom = atom<Media[]>([]);
export const searchAtom = atom<string>("");
export const addMediaAtom = atom(() => zeroMedia, (get, set) => {
    set(mediasAtom, addMedia(get(mediasAtom), get(newMediaAtom)));
    set(newMediaAtom, zeroMedia)
})