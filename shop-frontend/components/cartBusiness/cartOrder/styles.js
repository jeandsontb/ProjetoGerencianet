import styled from 'styled-components';
import theme from '../../../css/theme';


export default {
  Container: styled.div`
    width: 100%;
    height: auto;
  `,
  BoxInfo: styled.div`
    margin: 10px;
  `,
  BoxTitle: styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 40px;
    background-color: ${theme.colors.orangeRelative};
    border-radius: 20px;
  `,
  TitleInfo: styled.h3`
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.browRelative};
    font-weight: bold;
  `,
  TextInfo: styled.p`
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.browRelative};
    margin-top: 20px;
    font-size: 16px;
  `,
  BoxDescription: styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    padding: 0px 20px;
  `,
  TextDescription: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${theme.colors.browActive};
  `,
  TextResultDescription: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${theme.colors.browActive};
  `
}
