import styled, { keyframes } from 'styled-components';

export const Nav = styled.nav`
  width: 1920px;
  height: 107px;

  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

  background-color: #212125;

  > div {
    width: 1026px;

    padding: 34px;
    margin: 0 477px;

    display: flex;

    #logo,
    #span {
      width: 513px;
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

        button {
          background-color: #212125;
          border: none;
          cursor: pointer;
        }
      }
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
      }

      .results {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

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
`;
