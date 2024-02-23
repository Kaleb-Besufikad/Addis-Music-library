import {Dispatch} from "redux";
import {
    FETCH_STATISTICS,
} from "../types/statisticsTypes";
import * as api from "../api";

export const fetchStatistics = () => async (dispatch: Dispatch<any>) => {
        try {
            const {data} = await api.getStats()
            dispatch({type: FETCH_STATISTICS, payload: data});
        } catch (error) {
            console.log(error)
        }
    };
