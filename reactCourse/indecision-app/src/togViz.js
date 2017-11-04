
import React from 'react';
import ReactDOM from 'react-dom';
class ToggleVis extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibility:false,

    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

  }
  handleToggleVisibility(){
    this.setState((prevState) =>{
      return {visibility:!prevState.visibility,}
    });
  }
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility?
          'Hide Details':'Show Details'}</button>


      {
        this.state.visibility ? <p>Some text to show</p>: <p></p>
      }
      </div>
    );
  }
}
ReactDOM.render(<ToggleVis></ToggleVis>, document.getElementById('root'));
