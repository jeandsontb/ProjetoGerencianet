import styled from "styled-components";
import theme from "../../css/theme";

export default {
  Container: styled.div`
    width: 100vw;
    height: 100px;
    background-color: ${theme.colors.grayActive};
    margin-top: 40px;
  `,
  BoxDescription: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-left: 5%;
    height: 100px;
    color: ${theme.colors.grayClean};
  `,
  TextFooter: styled.p`
    font-family: 'Roboto', sans-serif;
    margin-right:10px;
  `,
}