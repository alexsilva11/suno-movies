import React, { useEffect, useState } from 'react';
import {
  MdLens,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdStar,
  MdKeyboardArrowDown,
} from 'react-icons/md';

import {
  Container,
  CarouselContainer,
  Catalog,
  CatalogHeader,
  CatalogItem,
} from './styles';

import api from '../../services/api';

import filmPoster from '../../assets/film-poster.png';

interface Populars {
  id: number;
  poster_path: string;
  title: string;
  genre_ids: Array<number>;
  overview: string;
  vote_average: number;
}

interface Genres {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [releases, setReleases] = useState([]);
  const [populars, setPopulars] = useState<Populars[]>([]);
  const [genres, setGenres] = useState<Genres[]>([]);

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
      .then(res => setReleases(res.data));

    api
      .get('movie/popular', {
        params: {
          api_key,
          language: 'pt-br',
          page: 1,
        },
      })
      .then(res => setPopulars(res.data.results));

    api
      .get('genre/movie/list', {
        params: {
          api_key,
          language: 'pt-br',
        },
      })
      .then(res => setGenres(res.data.genres));
  }, [api_key]);

  return (
    <Container>
      <CarouselContainer>
        <div>
          <h2>
            <MdLens color="#fe3189" size={15} /> Lançamentos da Semana
          </h2>
          <div id="carousel">
            <MdKeyboardArrowLeft size={42} />
            <div className="carousel-item">
              <img src={filmPoster} alt="poster" />
              <h3>Crazy About Her</h3>
              <p className="genre">Romance, Comédia</p>

              <p>
                <MdStar color="#fe3189" /> 8,4
              </p>
            </div>
            <div className="carousel-item">
              <img src={filmPoster} alt="poster" />
              <h3>Crazy About Her</h3>
              <p className="genre">Romance, Comédia</p>

              <p>
                <MdStar color="#fe3189" /> 8,4
              </p>
            </div>
            <div className="carousel-item">
              <img src={filmPoster} alt="poster" />
              <h3>Crazy About Her</h3>
              <p className="genre">Romance, Comédia</p>

              <p>
                <MdStar color="#fe3189" /> 8,4
              </p>
            </div>
            <div className="carousel-item">
              <img src={filmPoster} alt="poster" />
              <h3>Crazy About Her</h3>
              <p className="genre">Romance, Comédia</p>

              <p>
                <MdStar color="#fe3189" /> 8,4
              </p>
            </div>

            <MdKeyboardArrowRight size={42} />
          </div>
        </div>
      </CarouselContainer>
      <CatalogHeader>
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
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${popular.poster_path}`}
                    alt="poster"
                  />
                </div>
                <div className="film-info">
                  <h3>{popular.title}</h3>
                  <p className="genre">
                    {genres.map(
                      genre => genre.id === popular.genre_ids[0] && genre.name,
                    )}
                  </p>
                  <div className="film-ranking">
                    <MdStar color="#fe3189" size={22} /> {popular.vote_average}
                  </div>
                  <p className="synopsis">{popular.overview}</p>
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
