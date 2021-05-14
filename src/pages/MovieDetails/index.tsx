import React, { useEffect, useState } from 'react';
import { MdStar } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

import { FilmInfo, TrailerContainer } from './styles';

import api from '../../services/api';
import NavBar from '../../components/NavBar';
import { useGenres } from '../../hooks/GenresContext';

interface MovieParams {
  id: string;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  genres: Array<{
    id: number;
  }>;
  overview: string;
  vote_average: number;
}

interface MovieVideo {
  key: string;
}

const FilmDetails: React.FC = () => {
  const params = useParams<MovieParams>();

  const [movie, setMovie] = useState<Movie>();
  const [video, setVideo] = useState<MovieVideo>();

  const { genres } = useGenres();

  const api_key = process.env.REACT_APP_API_TOKEN;

  useEffect(() => {
    api
      .get(`/movie/${params.id}`, {
        params: {
          api_key,
          language: 'pt-br',
        },
      })
      .then(res => setMovie(res.data));

    api
      .get(`/movie/${params.id}/videos`, {
        params: {
          api_key,
          language: 'pt-br',
        },
      })
      .then(res => setVideo(res.data.results[0]));
  }, [api_key, params.id]);

  if (!movie || !video) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <NavBar />
      <FilmInfo>
        <div className="container">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="info">
            <div>
              <h1>{movie.title}</h1>
              <div>
                <p>
                  {genres.map(
                    genre => genre.id === movie.genres[0].id && genre.name,
                  )}
                </p>
                <p>
                  <MdStar color="#fe3189" size={34} /> {movie.vote_average}
                </p>
              </div>
            </div>
            <div>
              <h3>Sinopse</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </FilmInfo>
      <TrailerContainer>
        <div className="container">
          <h2>Trailer</h2>

          <div className="video-container">
            <iframe
              width="1026"
              height="579"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <Link to="/">Voltar</Link>
          </div>
        </div>
      </TrailerContainer>
    </>
  );
};

export default FilmDetails;
