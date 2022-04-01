/** @format */

import React from "react";

const MoviesGalllery = ({
	id,
	title,
	original_language,
	overview,
	release_date,
	vote_average,
	backdrop_path,
}) => {
	console.log(backdrop_path);
	return (
		<>
			{backdrop_path ? (
				<div className="lg:w-1/3 sm:w-1/2 p-4 ">
					<div className="flex relative">
						<img
							alt="gallery"
							className="absolute inset-0 w-full h-full object-fit object-center "
							src={`${process.env.REACT_APP_URL_IMG}${backdrop_path} `}
						/>
						<div className=" px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
							<h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
								{overview}
							</h2>
							<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
								{title}
							</h1>
							<p className="leading-relaxed text-gray-900">#{id}</p>
							<p className="leading-relaxed">Language: {original_language}</p>
							<p className="leading-relaxed">Date: {release_date}</p>
							<p className="leading-relaxed">Rating: {vote_average}</p>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default MoviesGalllery;
