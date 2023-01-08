import { keyframes } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #072448;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 7rem);
  max-width: 1080px;
  margin: 3rem 5rem;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`;

export const TitleAndScore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #e5f0ff;
  padding: 1rem;
  border-radius: 10px;
  color: #ffcb00;

  div:nth-child(2) {
    width: 8rem;
    text-align: center;
    background: #e5f0ff;
    padding: 0.7rem;
    border-radius: 10px;
    color: #ff6150;

    span {
      font-size: 2.4rem;
      font-weight: 600;
    }
  }

  p {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.6rem;
  }
`;

export const PlayGame = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    border-radius: 999px;
    box-shadow: 5px 5px 20px 2px;
  }

  button:nth-child(1) {
    border: solid 10px #81d87c;
    background-color: #e5f0ff;
  }

  button:nth-child(2) {
    border: solid 10px #ffabdd;
    background-color: #e5f0ff;
  }

  button:nth-child(3) {
    border: solid 10px #54d2d2;
    background-color: #e5f0ff;
  }

  button:disabled {
    cursor: no-drop;
  }
`;

export const GameResult = styled.div`
  margin-top: 3rem;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span {
      text-align: center;
    }

    h1 {
      color: #ffcb00;
    }

    button {
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const Circle = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: #071a30;
`;

export const MessageResult = styled.div`
  text-align: center;
`;
