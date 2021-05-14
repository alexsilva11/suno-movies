import React, { useEffect, useState } from 'react';
import {
  MdLens,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdStar,
  MdKeyboardArrowDown,
  MdPlayCircleOutline,
} from 'react-icons/md';

import { Link } from 'react-router-dom';
import {
  Container,
  CarouselContainer,
  Catalog,
  CatalogHeader,
  CatalogItem,
} from './styles';

import api from '../../services/api';
import NavBar from '../../components/NavBar';
import { useGenres } from '../../hooks/GenresContext';

interface Populars {
  id: number;
  poster_path: string;
  title: string;
  genre_ids: Array<number>;
  overview: string;
  vote_average: number;
}

interface Releases {
  id: number;
  poster_path: string;
  title: string;
  genre_ids: Array<number>;
  vote_average: number;
}

const Home: React.FC = () => {
  const [releases, setReleases] = useState<Releases[]>([]);
  const [populars, setPopulars] = useState<Populars[]>([]);

  const { genres } = useGenres();

  const api_key = process.env.REACT_APP_API_TOKEN;

  useEffect(() => {
    api
      .get('/movie/upcoming', {
        params: {
          api_key,
          language: 'pt-br',
          page: 1,
        },
      })
      .then(res => setReleases(res.data.results));

    api
      .get('movie/popular', {
        params: {
          api_key,
          language: 'pt-br',
          page: 1,
        },
      })
      .then(res => setPopulars(res.data.results));
  }, [api_key]);

  return (
    <Container>
      <NavBar />
      <CarouselContainer id="inicio">
        <div>
          <h2>
            <MdLens color="#fe3189" size={15} /> Lançamentos da Semana
          </h2>
          <div id="carousel-controls">
            <button
              type="button"
              onClick={() => {
                document.getElementById('carousel')?.scrollBy(-238, 0);
              }}
            >
              <MdKeyboardArrowLeft size={42} className="left" />
            </button>
            <div id="carousel">
              {releases.map(release => {
                return (
                  <div className="carousel-item" key={release.id}>
                    <Link to={`/movie/${release.id}`}>
                      <div>
                        <MdPlayCircleOutline size={42} color="#fff" />
                      </div>
                      <img
                        src={`https://image.tmdb.org/t/p/original${release.poster_path}`}
                        alt="poster"
                      />
                    </Link>
                    <h3>{release.title}</h3>
                    <p className="genre">
                      {genres.map(
                        genre =>
                          genre.id === release.genre_ids[0] && genre.name,
                      )}
                    </p>

                    <p>
                      <MdStar color="#fe3189" /> {release.vote_average}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => {
                document.getElementById('carousel')?.scrollBy(238, 0);
              }}
            >
              <MdKeyboardArrowRight size={42} className="right" />
            </button>
          </div>
        </div>
      </CarouselContainer>
      <CatalogHeader id="catalogo">
        <div>
          <h3>
            <MdLens color="#fe3189" size={15} /> CATÁLOGO COMPLETO
          </h3>
        </div>
      </CatalogHeader>
      <Catalog>
        <div id="buttons">
          <div id="filters">
            <button type="button">
              <MdKeyboardArrowDown /> por gênero
            </button>
            <button type="button">Mais Populares</button>
          </div>
          <div id="list-style">
            <button type="button">
              <MdKeyboardArrowDown /> em lista
            </button>
          </div>
        </div>
        <div id="films">
          {populars.map(popular => {
            return (
              <CatalogItem key={popular.id}>
                <Link to={`/movie/${popular.id}`}>
                  <div>
                    <MdPlayCircleOutline size={42} color="#fff" />
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${popular.poster_path}`}
                    alt="poster"
                  />
                </Link>

                <div className="film-info">
                  <div>
                    <h3>{popular.title}</h3>
                    <p className="genre">
                      {genres.map(
                        genre =>
                          genre.id === popular.genre_ids[0] && genre.name,
                      )}
                    </p>
                    <div className="film-ranking">
                      <MdStar color="#fe3189" size={22} />{' '}
                      {popular.vote_average}
                    </div>
                  </div>

                  <p className="synopsis">
                    {popular.overview === ''
                      ? `A sinopse deste filme não está disponível no momento`
                      : popular.overview}
                  </p>
                </div>
              </CatalogItem>
            );
          })}
        </div>
      </Catalog>
    </Container>
  );
};

export default Home;
