import Song from "../mongodb/models/song.js";

export const generateStatisticsController = async (req, res) => {

    try {
        const totalSongs = await Song.countDocuments();
        const totalArtists = await Song.distinct('artist');
        const totalAlbums = await Song.distinct('album');
        const totalGenres = await Song.distinct('genre');

        const songsPerGenre = await Song.aggregate([
            {$unwind: "$genre"},
            {
                $group: {
                    _id: "$genre",
                    count: {$sum: 1}
                }
            }
        ]);

        const songsPerArtist = await Song.aggregate([
            {
                $group: {
                    _id: "$artist",
                    songsCount: {$sum: 1},
                    albumsCount: {$addToSet: "$album"}
                }
            },
            {
                $project: {
                    _id: 1,
                    songsCount: 1,
                    albumsCount: {$size: "$albumsCount"}
                }
            }
        ]);

        const songsPerAlbum = await Song.aggregate([
            {
                $group: {
                    _id: "$album",
                    count: {$sum: 1}
                }
            }
        ]);

        res.status(200).json({
            totalSongs,
            totalArtists,
            totalAlbums,
            totalGenres,
            songsPerGenre,
            songsPerArtist,
            songsPerAlbum
        });
        // if (!totalSongs) {
        //     await populateSongs();
        // }
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};
const populateSongs = async () => {
    try {
        const initialSongs = [
            {
                title: "Thriller",
                artist: "Michael Jackson",
                album: "Thriller",
                genre: ["Pop"],
                duration: 550
            },
            {
                title: "Billie Jean",
                artist: "Michael Jackson",
                album: "Thriller",
                genre: ["Pop"],
                duration: 450
            },
            {
                title: "Beat It",
                artist: "Michael Jackson",
                album: "Thriller",
                genre: ["Pop"],
                duration: 420
            },
            {
                title: "Smooth Criminal",
                artist: "Michael Jackson",
                album: "Bad",
                genre: ["Pop"],
                duration: 410
            },
            // Add more songs as needed
            {
                title: "Rock with You",
                artist: "Michael Jackson",
                album: "Off the Wall",
                genre: ["Pop"],
                duration: 340
            },
            {
                title: "Bad",
                artist: "Michael Jackson",
                album: "Bad",
                genre: ["Pop"],
                duration: 407
            },
            {
                title: "Black or White",
                artist: "Michael Jackson",
                album: "Dangerous",
                genre:[ "Pop"],
                duration: 415
            },
        ];

        await Song.insertMany(initialSongs);
        console.log("Songs populated successfully");
    } catch (error) {
        console.log("Error populating songs:", error);
    }
}