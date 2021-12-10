import styled from 'styled-components';
import theme from '../../css/theme';

export default {
  Container: styled.div`
    display: flex;
    justify-content: center;
    max-width: 100vw;
    margin-top: 50px;
  `,
  SubContainer: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90vw;
  `,
  BoxCard: styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all ease 0.15s;
    margin: 10px 2% 20px 2%;

    :hover {
      margin-top: -2px;
    }
  `,
  BoxCardTop: styled.div`
    width: 200px;
    height:230px;
    border: 4px solid;
    border-color: ${theme.colors.browActive};
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    overflow: hidden;
    z-index: 1;
  `,
  ImgCard: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    border: 2px solid;
    border-color: white;
    border-top-width: 0px;
  `,
  BoxCardBottom: styled.div`
    background-color: ${theme.colors.browActive};
    width: 100%;
    height: 250px;
    border-radius: 10px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    margin-top: -120px;
    padding-top: 120px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    box-shadow: 2px 4px 10px #000;
    position: relative;
    z-index: 0;
  `,
  TextCardTitle: styled.h3`
    font-family: 'Lobster', sans-serif;
    font-size: 28px;
    color: ${theme.colors.grayRelative};
  `,
  TextCardPrice: styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    color: ${theme.colors.grayClean};
  `,
  ButtonCard: styled.button`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.orangeOpacity};
    width: 96%;
    padding: 8px;
    border-radius: 5px;
    position: absolute;
    bottom: 5px;
    right: 2%;

    :hover {
      box-shadow: 0px 1px 6px #FFF;
    }
  `,
  Font: styled.p`
    font-size: 18px;
  `,
}