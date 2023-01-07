import { Container, Wrapper, TitleAndScore, PlayGame, GameResult } from "./style";
import { useState } from "react";

export function Game() {
  const [selected, setSelected] = useState("");

  console.log(selected);

  return (
    <Container>
      <Wrapper>
        <TitleAndScore>
          <div>
            <p>PEDRA</p>
            <p>PAPEL</p>
            <p>TESOURA</p>
          </div>

          <div>
            <h4>PONTOS</h4>
            <span>15</span>
          </div>
        </TitleAndScore>
        <h2>PEDRA, PAPEL OU TESOURA?</h2>
        <PlayGame>
          <button onClick={() => setSelected("1")}>
            <img src="./icon-paper.svg" alt="" />
          </button>
          <button onClick={() => setSelected("2")}>
            <img src="./icon-rock.svg" alt="" />
          </button>
          <button onClick={() => setSelected("3")}>
            <img src="./icon-scissors.svg" alt="" />
          </button>
        </PlayGame>
        <GameResult>
        <div>
          <span>
          ds
          </span>
          <p>VS</p>
          <span>
            ds
          </span>
        </div>
        </GameResult>
      </Wrapper>
    </Container>
  );
}
