import type { NextApiRequest, NextApiResponse } from 'next';

const apiFetchTopRated = async () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_APP_API_MOVIE_KEY}&language=en-US&page=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await apiFetchTopRated();
    const data = result?.results?.map((item) => ({
      title: item.title,
      description: item.overview,
      posterUrl: item.poster_path,
      releasedIn: item.release_date,
      language: item.original_language,
      votes: item.vote_average,
      id: item.id,
    }));

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json(e.errors);
  }
}
