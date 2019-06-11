import React from "react";
import Cards from "./components/MatchCard/Card";
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import "./App.css";

class App extends React.Component {
  state = { cards, correctguesses: 0, highscore: 0 };

  gameOver = () => {
    if (this.state.correctguesses > this.state.highscore) {
      this.setState({ highscore: this.state.correctguesses });
    }
    this.state.cards.forEach(cards => {
      cards.count = 0;
    });
    alert(`Your Score:  ${this.state.correctguesses}`);
    this.setState({ correctguesses: 0 });
    return true;
  };

  handleClick = id => {
    this.state.cards.find((i, j) => {
      if (i.id === id) {
        if (cards[j].count === 0) {
          cards[j].count = cards[j].count + 1;
          this.setState({ highscore: this.state.correctguesses + 1 }, () => {
            console.log(this.state.correctguesses);
          });
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Match game</Title>
        {this.state.cards.map(card => (
          <Cards
            handleClick={this.handleClick}
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
