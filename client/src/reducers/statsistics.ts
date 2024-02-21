import {FETCH_STATISTICS} from "../types/statisticsTypes";

const reducer = (statistics = {}, action:any) => {
    switch (action.type) {
        case FETCH_STATISTICS:
            return action.payload;
        default:
            return statistics;
    }
};


export default reducer;
