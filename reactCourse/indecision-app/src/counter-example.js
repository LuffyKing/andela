
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
  constructor(props){
    super(props);

    this.addOne = this.addOne.bind(this);
    this.minusOne= this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.initialCount,
    }


  }
  addOne(){
    this.setState((prevState) =>{
      return {
        count: prevState.count+1,
      }

    });



  }

  minusOne(){
    this.setState((prevState) =>{
      return {
        count:  prevState.count-1,
      }

    });


  }

  reset(){
    this.setState(() =>{
      return {
        count: 0,
      }

    });


  }

  render(){
    return (<div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.addOne}>+1</button>
      <button onClick={this.minusOne}>-1</button>
      <button onClick={this.reset}>Reset </button>
    </div>);

  }

}

Counter.defaultProps = {
  initialCount:0,
}
ReactDOM.render(<Counter></Counter>, root);
