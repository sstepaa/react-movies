/** @format */

import axios from "axios";
import { UP_COMING_MOVIES } from "./actions";

const API_URL_COMING_MOVIES = process.env.REACT_APP_URL_API_COMING;

export const getAllUpComingMovies = () => (dispatch) => {
    
	axios
		.get(`${API_URL_COMING_MOVIES}`)
		.then((r) => {
			return dispatch({
				type: UP_COMING_MOVIES,
				comingMovies: r.data,
			});
		})
		.catch((e) => {
			console.error(`This error ocurred ${e}`);
		});
};
