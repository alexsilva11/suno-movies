import styled from 'styled-components';

import bgImage from '../../assets/carousel-background.png';

export const Container = styled.div`
  h3 {
    font-weight: 400;
    font-size: 22px;
  }

  .genre {
    color: #fe3189;
    font-weight: 300;
    font-size: 16px;
  }
`;

export const CarouselContainer = styled.div`
  background: url(${bgImage}) no-repeat center;

  height: 718px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #fe3189;

  div {
    h2 {
      padding: 10px 40px;
    }
    #carousel {
      width: 1026px;

      display: flex;
      justify-content: center;
      align-items: center;

      .carousel-item {
        padding: 10px;
      }
    }
  }
`;

export const CatalogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 107px;

  background-color: #212125;

  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

  div {
    width: 1026px;
  }
`;

export const Catalog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 30px 0;

  #buttons,
  #films {
    width: 1026px;
  }
  #buttons {
    display: flex;

    button {
      width: 160px;
      height: 45px;

      background: linear-gradient(to bottom, #212125, #2e2e35);

      color: #eaeaea;
      border: 2px solid #2e2d31;
      border-radius: 4px;
      text-align: center;
      margin: 10px;
    }

    #filters,
    #list-style {
      width: 513px;
    }

    #list-style {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  #films {
    display: flex;
    flex-wrap: wrap;

    width: 1026px;
    margin-top: 30px;
  }
`;

export const CatalogItem = styled.div`
  display: flex;
  width: 513px;
  max-height: 240px;

  margin: 10px 0;

  img {
    width: 160px;
    margin: 10px;
  }

  .film-info {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }

    .synopsis {
      font-weight: 300;
      font-size: 12px;
      overflow: hidden;
      text-overflow: clip;
    }
  }
`;
