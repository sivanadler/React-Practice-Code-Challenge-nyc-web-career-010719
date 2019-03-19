import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    sushiShow: "first",
    budget: 1000,
    eaten: true
  }

  changeBudget = sushiPrice => {
    let newBudget = this.state.budget - sushiPrice
    this.setState({budget: newBudget})
  }

  componentDidMount = () => {
    this.fetchSushis()
  }

  handleEatenState = sushi => {
    this.setState({
      eaten: !this.state.eaten
    }, () => console.log(this.state.eaten))
  }


  fetchSushis(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({ sushis }))
  }

  render() {
    return (
      <div className="app">
        {console.log("state", this.state.sushis)}
        <SushiContainer
          changeBudget={this.changeBudget}
          handleEatenState={this.handleEatenState}
          sushis={this.state.sushis}
        />
        <Table
          budget={this.state.budget}
          sushis={this.state.sushis}
        />
      </div>
    )
  }
}

export default App;
