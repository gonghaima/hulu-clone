export interface MOVIE {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_name: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  first_air_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface SEARCH_RESULT {
    results: MOVIE[]
}
