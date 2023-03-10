import {
  Container,
  Wrapper,
  TitleAndScore,
  PlayGame,
  GameResult,
  Circle,
  MessageResult,
  Done,
} from "./style";
import { useEffect, useState } from "react";

export function Game() {
  const [selected, setSelected] = useState({
    id: "",
    img: "",
    color: "transparent",
    bgColor: "",
    resultColor: "",
  });

  const [selectedIA, setSelectedIA] = useState({
    id: "",
    img: "",
    color: "transparent",
    bgColor: "",
    resultColor: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [scores, setScores] = useState({
    currentScore: 50,
    bgFinalColor: "",
    message: "",
  });

  const [message, setMessage] = useState("");



  const gameArray = [
    {
      id: "1",
      img: "./icon-paper.svg",
      color: "#81d87c",
      bgColor: "#e5f0ff",
      resultColor: "",
    },
    {
      id: "2",
      img: "./icon-rock.svg",
      color: "#ffabdd",
      bgColor: "#e5f0ff",
      resultColor: "",
    },
    {
      id: "3",
      img: "./icon-scissors.svg",
      color: "#54d2d2",
      bgColor: "#e5f0ff",
      resultColor: "",
    },
  ];

  const getAdversaryOption = () => {
    const getRandomNumber = Math.floor(Math.random() * 3 + 1);
    const getOption = gameArray[getRandomNumber - 1];
    setSelectedIA({
      id: getOption.id,
      img: getOption.img,
      color: getOption.color,
      bgColor: getOption.bgColor,
      resultColor: getOption.resultColor,
    });
  };

  const getYourOption = (itens) => {
    setSelected({
      id: itens.id,
      img: itens.img,
      color: itens.color,
      bgColor: itens.bgColor,
      resultColor: itens.resultColor,
    });

    setButtonDisabled(true);
    getAdversaryOption();
    setTimeout(playAgain, 1300);
  };

  const playAgain = () => {
    setButtonDisabled(false);
    setMessage("");
    setSelected({
      id: "",
      img: "",
      color: "transparent",
      bgColor: "#071a30",
      resultColor: "",
    });
    setSelectedIA({
      id: "",
      img: "",
      color: "transparent",
      bgColor: "#071a30",
      resultColor: "",
    });
  };

  const result = () => {
    if (selectedIA.id === "") {
      setMessage("");
    } else if (selected.id === selectedIA.id) {
      setMessage("EMPATE");
      setSelected((prevState) => {
        return { ...prevState, resultColor: "#4790F9" };
      });
    } else if (selected.id === "1" && selectedIA.id === "2") {
      setMessage("VOC?? GANHOU");
      setSelected((prevState) => {
        return { ...prevState, resultColor: "#0AB387" };
      });
      setScores((prevState) => {
        return { ...prevState, currentScore: scores.currentScore + 25 };
      });
    } else if (selected.id === "2" && selectedIA.id === "3") {
      setMessage("VOC?? GANHOU");
      setSelected((prevState) => {
        return { ...prevState, resultColor: "#0AB387" };
      });
      setScores((prevState) => {
        return { ...prevState, currentScore: scores.currentScore + 25 };
      });
    } else if (selected.id === "3" && selectedIA.id === "1") {
      setMessage("VOC?? GANHOU");
      setSelected((prevState) => {
        return { ...prevState, resultColor: "#0AB387" };
      });
      setScores((prevState) => {
        return { ...prevState, currentScore: scores.currentScore + 25 };
      });
    } else {
      setMessage("VOC?? PERDEU");
      setSelected((prevState) => {
        return { ...prevState, resultColor: "#ff6150" };
      });
      setScores((prevState) => {
        return { ...prevState, currentScore: scores.currentScore - 25 };
      });
    }
  };

  const gameDone = () => {
    if (scores.currentScore <= 0) {
      setScores((prevState) => {
        return {
          ...prevState,
          bgFinalColor: "#ff6150",
          message: "VOC?? PERDEU A BATALHA :/",
        };
      });
    } else if (scores.currentScore >= 100) {
      setScores((prevState) => {
        return {
          ...prevState,
          bgFinalColor: "#0AB387",
          message: "PARAB??NS, VOC?? GANHOU!",
        };
      });
    }
  };

  useEffect(() => {
    result();
  }, [selectedIA]);

  useEffect(() => {
    setTimeout(() => {
      if (scores.currentScore <= 0 || scores.currentScore >= 100) {
        setScores((prevState) => {
          return { ...prevState, currentScore: 50 };
        });
      }
    }, 1300);
    gameDone();
  }, [scores.currentScore]);

  return (
    <Container>
      <Wrapper>
        <TitleAndScore>
          {scores.currentScore <= 0 || scores.currentScore >= 100 ? (
            <Done
              style={{
                backgroundColor: `${scores.bgFinalColor}`,
              }}
            >
              {scores.message}
            </Done>
          ) : (
            <>
              <div>
                <p>PEDRA</p>
                <p>PAPEL</p>
                <p>TESOURA</p>
              </div>

              <div>
                <h4>PONTOS</h4>
                <span> {scores.currentScore} </span>
              </div>
            </>
          )}
        </TitleAndScore>

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
              <Circle
                style={{
                  backgroundColor: `${selected.bgColor}`,
                  border: `15px solid ${selected.color}`,
                }}
              >
                <img src={selected.img} alt="" />
              </Circle>

              <h3> VOC?? </h3>
            </span>
            <h4>VS</h4>
            <span>
              <Circle
                style={{
                  backgroundColor: `${selectedIA.bgColor}`,
                  border: `15px solid ${selectedIA.color}`,
                }}
              >
                <img src={selectedIA.img} alt="" />
              </Circle>
              <h3>ADVERS??RIO </h3>
            </span>
          </div>
        </GameResult>
        {message.length > 0 && (
          <MessageResult>
            <div
              style={{
                backgroundColor: `${selected.resultColor}`,
              }}
            >
              {message}
            </div>
          </MessageResult>
        )}
      </Wrapper>
    </Container>
  );
}
