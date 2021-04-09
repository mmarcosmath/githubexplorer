import styled, { css } from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 40px;
`;

export const Example = styled.p`
  font-size: 14pt;
  color: #3a3a3a;
  max-width: 700px;
  margin-top: 10px;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
export const Logo = styled.img`
  max-width: 250px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  * {
    font-size: 16pt;
  }

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 60px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04D361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(20px);
    }

    & + a {
      margin-top: 16px;
    }
    img {
      width: 74px;
      height: 74px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 14pt;
        color: #3d3d4d;
      }

      p {
        font-size: 14pt;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd1;
    }
  }
`;
