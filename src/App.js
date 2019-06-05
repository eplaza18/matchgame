import React from "react";
import Cards from "./components/MatchCard/Cards";
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import "./App.css";

class App extends React.Component {
  state = { cards, correctguesses: 0 };
  render() {
    return (
      <Wrapper>
        <Title>Match game</Title>
        {this.state.cards.map(card => (
          <Cards
            id={card.id}
            key={card.id}
            image={card.image}
            name={card.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
