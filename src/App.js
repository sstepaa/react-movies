/** @format */

import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllUpComingMovies } from "./redux/actionCreators";

function App({comingMovies}) {
	const myDisp = useDispatch();
  console.log(comingMovies);
	useEffect(() => {
		myDisp(getAllUpComingMovies());
	}, [myDisp]);
	return <div className="App"></div>;
}

const mapStateToProps = (state) => ({
	comingMovies: state.getAllUpComingMovies,
});

export default connect(mapStateToProps, {})(App);
