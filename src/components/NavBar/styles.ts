import styled from 'styled-components';

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
      }
    }
  }
`;
