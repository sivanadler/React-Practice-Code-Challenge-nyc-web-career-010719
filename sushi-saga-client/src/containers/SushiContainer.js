import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiArr= props.sushis

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} changeBudget={props.changeBudget} handleEatenState={this.handleEatenState}/>)}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
