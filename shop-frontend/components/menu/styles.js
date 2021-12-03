import styled from 'styled-components';
import theme from '../../css/theme';

export default {
  Container: styled.div`
    box-sizing: border-box;
    display: flex;
    padding-left: 5%;
    padding-right: 5%;
    width: 100vw;
    height: 90px;
    background-color: ${theme.colors.orangeRelative};
    box-shadow: 1px 1px 1px ${theme.colors.grayRelative};

    @media(max-width: 800px) {
      flex-direction: column;
      height: auto;
      padding-top: 6px;
      padding-bottom: 5px;
    }
  `,
  BoxLogo: styled.div`
    display: flex;
    align-items: center;
    width: 325px;
    height: 90px;

    @media(max-width: 768px) {
      flex-direction: column;
      width: auto;
      height: auto;
    }
  `,
  TextLogo: styled.h1`
    font-family: 'Fredoka One', sans-serif;
    font-size: 26px;
    line-height: normal;
    color: ${theme.colors.browActive};

    @media(max-width: 800px) {
      font-size: 18px;
    }
  `,
  ImageLogo: styled.img`
    width: auto;
    height: 70px;
  `,
  BoxMenu: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 90px;

    @media(max-width: 800px) {
      padding-top: 10px;
      justify-content: center;
      height: auto;
    }
  `,
  ListMenu: styled.ul`
    display: flex;
    list-style: none;
  `,
  TextMenu: styled.li`
    display: flex;    

    :last-child {
      background-color: ${theme.colors.orangeClean};
      border-radius: 5px; 
      justify-content: center;
      align-items: center;

      @media(max-width: 800px) {
        background-color: transparent;
      }
    }
  `,
  LinkMenu: styled.a`
    display: flex;
    margin-left: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: ${theme.colors.browActive};
    padding: 8px;
    cursor: pointer;

    @media(max-width: 800px) {
      font-size: 16px;
      padding: 5px;
    }
  `,
}