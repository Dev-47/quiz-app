import React, {Component } from "react";

export default class NewTimer extends Component { 
  constructor (props) {
    super(props)

    const {start, minutes} = props

    this.state = {
      start,
      seconds: minutes * 60
    }
  }

  componentDidMount() {

    console.log("comp")
    const interval = setInterval(() => {
      this.setState({
        ...this.state,
        seconds: this.state.seconds - 1
      })
    }, 1000);
  
    clearInterval(interval)
  }

  render() {
    const {seconds} = this.state
    return <div>{seconds}</div>;
  }
}
