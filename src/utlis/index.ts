import { Genres } from "@/types/movie";

export const getGenreNames = (genresIds: number[], genres: Genres[]) => {
  return (
    genres
      .filter((genre) => genresIds.includes(genre.id))
      .map((genre) => genre.name)
      .join(", ") + "."
  );
};
