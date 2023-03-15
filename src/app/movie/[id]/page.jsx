import React from "react";
import Image from "next/image";
import Link from "next/link";

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  console.log(movie);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold bg-amber-300 p-2 rounded-md text-black">
            {movie.title || movie.name}
          </h2>
          <p className="text-md mb-3 font-bold text-right dark:bg-slate-500 rounded-md p-1">
            {movie.tagline}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
          <div className="text-right">
            <a
              target="_blank"
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              className="p-3 bg-slate-500 rounded-md cursor-pointer hover:bg-blue-400"
            >
              go imdb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
