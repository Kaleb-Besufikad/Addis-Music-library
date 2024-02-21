
export const FETCH_STATISTICS = 'FETCH_STATISTICS';


export interface Stats {
    totalSongs: number;
    totalArtists: string[];
    totalAlbums: string[];
    totalGenres: string[];
    songsPerGenre: { _id: string; count: number }[];
    songsPerArtist: { artist: string; songsCount: number; albumsCount: number }[];
    songsPerAlbum: { _id: string; count: number }[];
}