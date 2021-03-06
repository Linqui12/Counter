import React, { Component } from 'react';
import BodyCounter from '../BodyCounter'
class SetCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }
  handlerInput = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };
  render() {
    const { step } = this.state;
    return (
      <section>
        <input
          onChange={this.handlerInput}
          type="text"
          placeholder="counter"
        />
        <BodyCounter step={step} />
      </section>
    )
  }
}

export default SetCounter;