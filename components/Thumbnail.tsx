import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { MOVIE } from "@/types/Movie";

type ThumbnailPropType = {
  movie: MOVIE;
};

export default function Thumbnail(props: ThumbnailPropType): JSX.Element {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const movie: MOVIE = props.movie;
  return (
    <div
      className="p-2 group cursor-pointer transition duration-200 
  ease-in transform sm:hover:scale-105 hover:z-50"
    >
      {JSON.stringify(movie)}
      <Image
        className="object-contain"
        // layout="fill"
        // src="https://links.papareact.com/ua6"
        // src="/next.svg"
        // fill={true}
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt="Hulu Logo"
        height={1000}
        width={1920}
      />
      <div>
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} -`}{" "}
          {movie.release_date || `${movie.first_air_date} -`}{" "}
          <HandThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
}
