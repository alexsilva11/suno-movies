import styled, { keyframes } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 107px;

  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

  background-color: #212125;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 55%;

    display: flex;
    justify-content: space-between;

    button {
      background-color: #212125;
      border: none;
      cursor: pointer;
    }

    #logo,
    #span {
      width: 50%;
    }

    #logo {
      font-size: 26px;
      & span {
        font-weight: 700;
        color: #ff559e;
      }
    }

    #options {
      font-weight: 400;
      font-size: 16px;
      color: #eaeaea;

      ul {
        list-style: none;
      }

      ul li {
        display: inline;
        margin: 0 20px;

        a {
          color: #eaeaea;
        }
      }
    }
  }

  @media (min-width: 769px) {
    #responsive-menu-toggle {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    div {
      width: 100%;

      justify-content: space-around;

      div {
        width: 50%;

        display: flex;
        justify-content: center;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      width: 100%;

      align-items: center;
      justify-content: space-around;
    }

    #responsive-menu-toggle,
    #logo,
    #options {
      display: flex;
      justify-content: center;
    }

    #options .menu-link {
      display: none;
    }
  }
`;

const animation = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

export const MobileMenu = styled.nav`
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;

    animation: ${animation} 1s;

    background-color: rgba(0, 0, 0, 0.9);

    position: absolute;
    top: 110px;

    z-index: 10;

    div {
      background-color: #212125;
      width: 100%;

      ul a {
        text-decoration: none;
        color: #eaeaea;
      }

      ul li {
        list-style: none;
        width: 100%;

        font-size: 20px;
        text-align: center;

        padding: 10px;
      }
    }
  } ;
`;

export const Search = styled.div`
  height: 100%;
  width: 100%;

  animation: ${animation} 1s;

  background-color: rgba(0, 0, 0, 0.9);

  position: absolute;
  top: 110px;

  z-index: 10;

  .search-area {
    background-color: #212125;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 20;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;

      input {
        width: 100%;
        background-color: #212125;
        border: none;
        border-bottom: 2px solid #ff559f;
        font-weight: 500px;
        font-size: 32px;
        padding: 5px;
        margin: 10px;

        box-sizing: border-box;
      }

      .results {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        a {
          color: #eaeaea;
        }

        .info {
          width: 300px;
          background-color: #252529;

          display: flex;

          border: 1px solid #313136;
          border-radius: 4px;

          margin: 10px;

          .img-container {
            width: 120px;
            margin: 10px;

            img {
              width: 100px;
            }
          }

          .info-container {
            width: 180px;
            margin: 10px;

            overflow: hidden;

            h3 {
              font-weight: 500;
              font-size: 22px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: clip;
            }

            p {
              font-weight: 300;
              font-size: 16px;
              color: #ff559f;
            }

            span {
              font-weight: 400;
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .search-area {
      .container {
        form {
          display: flex;
          justify-content: center;
          align-items: center;
          input {
            width: 90%;
            padding: 0;
          }
        }

        .results {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
