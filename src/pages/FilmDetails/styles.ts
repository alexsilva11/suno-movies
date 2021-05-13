import styled from 'styled-components';

import bgImage from '../../assets/carousel-background.png';

export const FilmInfo = styled.div`
  background: url(${bgImage}) no-repeat center;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 702px;

  .container {
    display: flex;

    img {
      width: 334px;
    }

    h1 {
      font-weight: 700;
      font-size: 60px;
    }

    .info {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;

      height: 500px;

      margin: 0 20px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-weight: 300;
          font-size: 24px;
          color: #fe3189;
        }
      }

      h3 {
        font-weight: 600;
        font-size: 24;
      }

      p {
        font-weight: 400;
        font-size: 22px;
        color: #757575;
      }
    }
  }
`;

export const TrailerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 600;
    font-size: 30px;
    border-bottom: 2px solid #fe3189;
  }

  .video-container {
    margin: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
      background-color: #fe3189;
      border: none;
      border-radius: 4px;
      width: 160px;
      height: 45px;
      margin: 30px;
    }
  }
`;
