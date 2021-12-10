import styled from 'styled-components';
import theme from '../../../css/theme';


export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  `,
  BoxForm: styled.form`
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
  TextTitle: styled.div`
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
  BoxInput: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 0px 20px;
  `,
  LabelForm: styled.label`
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.browActive};
    margin-bottom: 5px;
  `,
  InputForm: styled.input`
    outline: none;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 1px 2px 4px ${theme.colors.orangeRelative};
    color: ${theme.colors.browRelative};
    font-family: 'Roboto', sans-serif;
    ::placeholder {
      color: ${theme.colors.orangeRelative};
    }
  `,
  ButtonForm: styled.button`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.orangeOpacity};
    padding: 5px 0;
    border-radius: 5px;
    margin-top: 10px;
    color: ${theme.colors.browActive};
    font-weight: bold;
    box-shadow: 1px 2px 4px ${theme.colors.browRelative};

    :hover {
      box-shadow: 1px 2px 4px ${theme.colors.grayRelative};
    }
  `,
  BoxProcess: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      color: ${theme.colors.browActive};
      margin-bottom: 20px;
    }
  `,
  BoxQrcode: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      color: ${theme.colors.browActive};
      margin-bottom: 20px;
    }

    img {
      border-radius: 10px;
      box-shadow: 0px 2px 4px ${theme.colors.browRelative};
    }
  `,
}
