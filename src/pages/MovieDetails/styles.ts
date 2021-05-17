import styled from 'styled-components';

import bgImage from '../../assets/carousel-background.png';

export const FilmInfo = styled.div`
  background: url(${bgImage}) no-repeat center;

  display: flex;
  align-items: center;
  justify-content: center;

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
      justify-content: space-around;

      margin: 0 20px;
      div {
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

  @media (min-width: 769px) {
    .info {
      height: 500px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    .container {
      flex-direction: column;

      div {
        display: flex;
        justify-content: center;
      }

      .info {
        div {
          flex-direction: column;
          margin-bottom: 20px;
          div {
            flex-direction: row;
          }
        }
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

    height: 600px;

    div {
      width: 100%;
      height: 100%;
    }

    a {
      background-color: #fe3189;
      border: none;
      border-radius: 4px;
      width: 160px;
      height: 45px;
      margin: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #eaeaea;
    }
  }

  @media (max-width: 768px) {
    .video-container {
      div {
        width: 100%;
        height: 56%;
      }
    }
  }
`;
