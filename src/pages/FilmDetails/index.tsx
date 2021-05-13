import React from 'react';
import { MdStar } from 'react-icons/md';
import { FilmInfo, TrailerContainer } from './styles';

import MoviePoster from '../../assets/film-poster.png';

const FilmDetails: React.FC = () => {
  return (
    <>
      <FilmInfo>
        <div className="container">
          <div>
            <img src={MoviePoster} alt="poster" />
          </div>
          <div className="info">
            <h1>Loco Por Ella</h1>
            <div>
              <p>Comédia</p>
              <p>
                <MdStar color="#fe3189" size={34} /> 8.4
              </p>
            </div>

            <h3>Sinopse</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              minus molestias veritatis, debitis tenetur minima corporis
              consectetur, aspernatur, in dolore molestiae animi tempora
              perferendis similique cumque nisi eaque obcaecati quos?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vero architecto ullam
              quia aliquid a et amet ex sed illum nam quos nesciunt ipsam,
              sapiente commodi laudantium doloremque asperiores illo omnis.
            </p>
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
              src="https://www.youtube.com/embed/TvfIZU34is4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <button type="button">Voltar</button>
          </div>
        </div>
      </TrailerContainer>
    </>
  );
};

export default FilmDetails;
