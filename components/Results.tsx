import { SEARCH_RESULT } from "@/types/Movie";
import Thumbnail from "./Thumbnail";

export default function Results({ results }:SEARCH_RESULT) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
