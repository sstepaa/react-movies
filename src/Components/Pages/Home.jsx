/** @format */

import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllUpComingMovies } from "../../redux/actionCreators";
import MoviesGalllery from "../Molecules/MoviesGalllery";

const Home = ({ comingMovies }) => {
	const myDisp = useDispatch();
	console.log(comingMovies);
	useEffect(() => {
		myDisp(getAllUpComingMovies());
	}, [myDisp]);

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						Master Cleanse Reliac Heirloom
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
						gentrify, subway tile poke farm-to-table. Franzen you probably
						haven't heard of them man bun deep jianbing selfies heirloom.
					</p>
				</div>
				<div className="flex flex-wrap ">
					{comingMovies?.results.map(
						({
							id,
							title,
							original_language,
							overview,
							release_date,
							vote_average,
							backdrop_path,
						}) => (
							<MoviesGalllery
								key={id}
								id={id}
								title={title}
								original_language={original_language}
								overview={overview}
								release_date={release_date}
								vote_average={vote_average}
								backdrop_path={backdrop_path}
							/>
						)
					)}
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	comingMovies: state.getUpComingMovies.comingMovies,
});

export default connect(mapStateToProps, {})(Home);
