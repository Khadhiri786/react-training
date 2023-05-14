import React from "react";

class ClassComponent extends React.Component {
  state = {
    countValue: 0,
  };
  incrementValue= ()=>{
    this.setState({countValue:this.state.countValue+1});
  }

  decrementValue = ()=>{
    this.setState({countValue:this.state.countValue-1})
  }
  render() {
    const { countValue } = this.state;
    return (
      <>
        <button style={{ marginRight: "10px" }} onClick={this.incrementValue}>+</button>
        {countValue}
        <button style={{ marginLeft: "10px" }} onClick={this.decrementValue}>-</button>
      </>
    );
  }
}
export default ClassComponent;
