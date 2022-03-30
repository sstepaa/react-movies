import {
    UP_COMING_MOVIES
} from "./actions";

const getUpComingMovies = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case UP_COMING_MOVIES:
            return {
                ...state,
                upComingMovies: action.comingMovies,
            }

            default:
                return state
    }
}

export {
    getUpComingMovies
}