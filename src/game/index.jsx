import {
  Container,
  Wrapper,
  TitleAndScore,
  PlayGame,
  GameResult,
  Circle,
  MessageResult,
} from "./style";
import { useEffect, useState } from "react";

export function Game() {
  const [selected, setSelected] = useState({
    id: "",
    img: "",
  });

  const [selectedIA, setSelectedIA] = useState({
    id: "",
    img: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [message, setMessage] = useState("");

  const gameArray = [
    {
      id: "1",
      img: "./icon-paper.svg",
    },
    {
      id: "2",
      img: "./icon-rock.svg",
    },
    {
      id: "3",
      img: "./icon-scissors.svg",
    },
  ];

  const getAdversaryOption = () => {
    const getRandomNumber = Math.floor(Math.random() * 3 + 1);
    const getOption = gameArray[getRandomNumber - 1];
    setSelectedIA({
      id: getOption.id,
      img: getOption.img,
    });
  };

  const getYourOption = (itens) => {
    setSelected({
      id: itens.id,
      img: itens.img,
    });

    setButtonDisabled(true);
    getAdversaryOption();
    setTimeout(playAgain, 2000);
  };

  const result = () => {
    if (selectedIA.id === "") {
      setMessage("")
    } else if(selected.id === selectedIA.id) {
      setMessage("EMPATE");
    } else if (selected.id === "1" && selectedIA.id === "2") {
      setMessage("VOCÊ GANHOU");
    } else if (selected.id === "2" && selectedIA.id === "3") {
      setMessage("VOCÊ GANHOU");
    } else if (selected.id === "3" && selectedIA.id === "1") {
      setMessage("VOCÊ GANHOU");
    }  else {
      setMessage("VOCÊ PERDEU");
    }
  };

  const playAgain = () => {
    setButtonDisabled(false);
    setMessage("")
    setSelected({
      id: "",
      img: "",
    });
    setSelectedIA({
      id: "",
      img: "",
    });
  };

  useEffect(() => {
    result();
  }, [selectedIA]);

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
          {gameArray.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => getYourOption(item)}
                disabled={buttonDisabled}
              >
                <img src={item.img} alt="" />
              </button>
            );
          })}
        </PlayGame>
        <GameResult>
          <div>
            <span>
              <Circle>
                {selected ? (
                  <img src={selected.img} alt="" />
                ) : (
                  <p>PEDRA, PAPEL OU TESOURA?</p>
                )}
              </Circle>
              <h3> VOCÊ </h3>
            </span>
            <h1>VS</h1>
            <span>
              <Circle>
                {selectedIA ? (
                  <img src={selectedIA.img} alt="" />
                ) : (
                  <p>PEDRA, PAPEL OU TESOURA?</p>
                )}
              </Circle>
              <h3>ADVERSÁRIO </h3>
            </span>
          </div>
        </GameResult>
        <MessageResult> {message} </MessageResult>
      </Wrapper>
    </Container>
  );
}
