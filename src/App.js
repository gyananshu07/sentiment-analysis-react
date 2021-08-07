import React, { Component } from "react";
import Sentiment from "sentiment";

const sentiment = new Sentiment();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: 0,
      generalSentiment: "Neutral",
    };
    this.findSentiment = this.findSentiment.bind(this);
  }

  findSentiment = (e) => {
    const result = sentiment.analyze(e.target.value);
    this.setState({
      sentimentScore: result.score,
    });
    if (result.score < 0) {
      this.setState({
        generalSentiment: "Negative",
      });
    }
    if (result.score > 0) {
      this.setState({
        generalSentiment: "Positive",
      });
    }
    if (result.score === 0) {
      this.setState({
        generalSentiment: "Neutral",
      });
    }
  };

  render() {
    return (
      <div className="app">
        <h1>Text Sentiment Analysis</h1>
        <p>Enter text to get the real-time sentiment analysis:</p>
        <textarea onChange={this.findSentiment} className="input"></textarea>
        <div className="score-part">
          <p className="score-p">
            <span className="left">Sentiment Score: </span>
            <span className="score">{this.state.sentimentScore}</span>
          </p>
          <p className="score-p">
            <span className="left">General Sentiment: </span>
            <span className="score">{this.state.generalSentiment}</span>
          </p>
        </div>
        <div className="footer">
          <h4>Developed by Gyananshu Kashyap</h4>
        </div>
      </div>
    );
  }
}

export default App;
