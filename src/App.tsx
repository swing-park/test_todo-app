import React, { useState } from "react";
import "./App.css";

interface ICard {
  text: string;
}

interface Props {
  text: string;
}

const Card = ({ text }: Props) => {
  return <div className="card">{text}</div>;
};

const App = () => {
  const [cards, setCards] = useState<ICard[]>([{ text: "Init" }]);
  const [text, setText] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCards([...cards, { text }]);
  };

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input type="text" id="input" onChange={handleOnChange} required />
        <button type="submit">추가하기</button>
      </form>
      <div className="title">Todo List</div>
      <div className="cardList">
        {cards.map((card, idx) => (
          <Card key={idx} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default App;
