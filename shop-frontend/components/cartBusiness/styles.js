import styled from 'styled-components';
import theme from '../../css/theme';

export default {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
  `,
  BoxCart: styled.div`
    width: calc(100vw - 10%);
    height: auto;
    margin-top: 50px;
    padding: 20px 10px;
    box-shadow: 0px 1px 10px ${theme.colors.orangeRelative};
  `,
  BoxItems: styled.div`
    display: flex;
    width: 100%;

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 210px;
      height: auto;

      img {
        margin: 10px 0;
        width: 100px;
        height: 80px;
        object-fit: cover;
      }
    }

    .items {
      display: flex;
      width: 100vw;
    }

    .box-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 100%;
      height: 100%;

      h2 {
        font-family: 'Roboto', sans-serif;
        color: ${theme.colors.browRelative};
        font-size: 18px;
      }
      button {
        font-family: 'Roboto', sans-serif;
        color: ${theme.colors.browRelative};
        font-size: 16px;
      }

      input {
        background-color: ${theme.colors.orangeRelative};
        color: ${theme.colors.browRelative};
        width: 60px;
        text-align: center;
      }
    }

    @media(max-width: 720px) {
      .image {
        display:none !important
      }
      img {
        display:none !important;
      }

      .box-items {

        h2 {
          text-align: center;
          font-size: 14px;
        }
        button {
          text-align: center;
          font-size: 12px;
        }
      }
    }
  `,


}