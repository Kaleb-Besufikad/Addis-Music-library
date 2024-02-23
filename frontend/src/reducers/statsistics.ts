import {FETCH_STATISTICS} from "../types/statisticsTypes";


const initialState = {
    statistics: {
        totalGenres: [""],
        totalArtists: [""],
        totalAlbums: [""]
    }
};
const reducer = (statistics = initialState, action:any) => {
    switch (action.type) {
        case FETCH_STATISTICS:
            return action.payload;
        default:
            return statistics;
    }
};


export default reducer;
