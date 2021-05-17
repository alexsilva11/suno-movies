import styled, { css } from 'styled-components';

import bgImage from '../../assets/carousel-background.png';

interface CatalogItemProps {
  view: string;
}

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
    width: 1026px;
    height: 450px;

    @media (max-width: 1024px) {
      width: 100%;
    }

    h2 {
      padding: 10px 40px;

      @media (max-width: 768px) {
        padding: 0;
        padding-bottom: 20px;
        text-align: center;
      }
    }

    #carousel-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background: none;
        border: none;
        cursor: pointer;
      }

      #carousel {
        overflow: hidden;
        scroll-behavior: smooth;

        display: flex;

        @media (max-width: 768px) {
          width: 220px;
        }

        .carousel-item {
          width: 218px;
          margin: 10px;

          h3 {
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          a {
            position: relative;
            div {
              width: 218px;
              height: 300px;
              display: none;
            }

            img {
              width: 218px;
              height: 300px;
            }

            &:hover {
              div {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fe3189;
                opacity: 0.5;
                position: absolute;
              }
            }
          }
        }
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

  @media (max-width: 768px) {
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Catalog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 30px 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  #buttons,
  #films {
    width: 1026px;
  }
  #buttons {
    display: flex;

    select,
    button {
      width: 160px;
      height: 45px;

      font-weight: 600;
      font-size: 14px;

      background: linear-gradient(to bottom, #212125, #2e2e35);

      color: #eaeaea;
      border: 2px solid #2e2d31;
      border-radius: 4px;
      margin: 10px;
    }

    select {
      text-align: center;
      text-align-last: center;
      -moz-text-align-last: center;

      option {
        background-color: #212125;

        font-weight: 600;
        font-size: 14px;
      }
    }

    button {
      cursor: pointer;
    }

    button.selected {
      background: #fe3189;
      border: none;
    }

    #filters,
    #list-style {
      width: 513px;
    }

    #list-style {
      display: flex;
      flex-direction: row-reverse;
    }

    @media (max-width: 768px) {
      width: 100%;

      #filters {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #list-style {
        display: none;
      }
    }
  }
  #films {
    display: flex;
    flex-wrap: wrap;

    width: 1026px;
    margin-top: 30px;

    @media (max-width: 768px) {
      width: 100%;
      overflow: hidden;
    }
  }
`;

export const CatalogItem = styled.div<CatalogItemProps>`
  display: flex;
  ${props =>
    props.view === 'grid'
      ? css`
          width: 513px;
        `
      : css`
          width: 1026px;
        `}

  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }

  max-height: 240px;

  margin: 10px 0;

  a {
    position: relative;
    div {
      width: 160px;
      height: 240px;
      margin: 10px;
      display: none;
    }

    img {
      width: 160px;
      margin: 10px;
    }

    &:hover {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fe3189;
        opacity: 0.5;
        z-index: 100;
        position: absolute;
      }
    }
  }

  .film-info {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    div {
      div {
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }
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
