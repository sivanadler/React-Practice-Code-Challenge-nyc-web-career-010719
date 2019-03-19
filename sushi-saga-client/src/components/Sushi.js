import React from 'react'

class Sushi extends React.Component{
  state = {
    eaten: true
  }

  handleEatenState = () => {
    this.setState({
      eaten: !this.state.eaten
    })
  }
  //i got the change in eaten state to work, but if i had more time I would figure out how to lift this state into app so that I could change budget AND change eaten state at the same time. If i delete the handle eaten state, the budget change does work.

  render(){
    return (
      <div className="sushi">
        <div className="plate"
             onClick={() => this.props.changeBudget(this.props.sushi.price), this.handleEatenState}>
          {this.state.eaten ? <img src={this.props.sushi.img_url} alt="this" width="100%" /> : null}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
