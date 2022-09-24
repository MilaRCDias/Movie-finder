import type { NextApiRequest, NextApiResponse } from 'next';

const apiFetch = async (query: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APP_API_MOVIE_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw await response.json();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await apiFetch(req.body);
    const result = data?.results?.map((item) => ({
      title: item.title,
      description: item.overview,
      posterUrl: item.poster_path,
      releasedIn: item.release_date,
      language: item.original_language,
      votes: item.vote_average,
      id: item.id,
    }));

    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e.errors);
  }
}
