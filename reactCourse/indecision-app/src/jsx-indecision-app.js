import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Indecision extends React.Component{
  constructor(props){
    super(props);
    this.state = {

      subtitle:'Put you life in the hands of a computer',
      options:props.options,

    }
    this.addOption = this.addOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.removeIndOption = this.removeIndOption.bind(this);

  }
  componentDidMount() {
    console.log('fetching data')
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify()
      console.log('saving data')
  }

  }
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  removeIndOption(index){
    this.setState((prevState) =>{
        let arr = prevState.options.slice();
        arr.splice(index, 1);

        return {options: arr};

      }
    );
  }
  handlePick(){
    if(this.state.options)
      {
        const randNum = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randNum]);
     }

  }
  addOption(option){
    if(~this.state.options.indexOf(option)){
      return 'Enter in a non-duplicate value!';
    }
    this.setState((prevState) =>({
          options: prevState.options.concat(option),
        })
    );
  }

  removeAll(){
    this.setState(() =>({
          options: [],
        })
      );

  }

  render(){

    return(
      <div>
        <Header subtitle={this.state.subtitle}></Header>
        <Action disabled={this.state.options.length == 0} handlePick={this.handlePick}></Action>
        <Options options={this.state.options} removeIndOption={this.removeIndOption} removeAll={this.removeAll}></Options>
        <AddOption options={this.state.options} addOption={this.addOption}></AddOption>
      </div>
    );
  }
}
Indecision.defaultProps = {
  options:[],
}
const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>

      {props.title && <h2>{props.subtitle}</h2>}
    </div>
  );
}
Header.defaultProps = {
  title:'Indecision',
};

/*
class Header extends React.Component{
  render(){
    return(
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
    </div>);
  }
}
*/
const Action = (props) => {
  return(
    <div>
      <button disabled={props.disabled} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );


}
/*class Action extends React.Component{
  render(){
    return(
      <div>
        <button disabled={this.props.disabled} onClick={this.props.handlePick}>
          What should I do?
        </button>
      </div>
    )
  }

}
*/
// Add Remove all button
// Setup handleRemoveAll ->
/*class Options extends React.Component{

  render(){
    return(
    <div>
      <button onClick={this.props.removeAll}>Remove All Options</button>
      {

        this.props.options.map((element, number)=>{
          return <SingleOption task={element} key={`${number} ${element}`}></SingleOption>;
        })


      }
    </div>
  );
  }
}*/

const Options = (props) => {
  return(
  <div>
    <button onClick={props.removeAll}>Remove All Options</button>
    {

      props.options.map((element, number)=>{
        return <SingleOption removeIndOption={props.removeIndOption} task={element} key={`${element} ${number}`} index={number}></SingleOption>;
      })


    }
  </div>
);
}

const SingleOption  = (props) => {




    return(
        <div>
          {props.task}
          <button onClick={(e) =>{
            props.removeIndOption(props.index)
          }}>Remove Option</button>
        </div>
    );


}
/*
class SingleOption extends React.Component{

  render(){
    return(

      <div>{this.props.task}</div>
    );
  }
}
*/
class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined,
    }

  }
  addOption(e){
    e.preventDefault();
    const text = e.target.addOptionText.value.trim();
    if(text){
      const error = this.props.addOption(text);
      this.setState(()=>(
        {error}
      )
    );


      }

      else{
        return this.setState(() =>({error:'Enter a value !'}));
      }

    }



  render(){
    return(
    <div>
      {
        this.state.error? <p>{this.state.error}</p>: <p></p>
      }


      <form onSubmit={this.addOption}>


        <input type="text" placeholder="Enter an option" name="addOptionText"/>
        <button>Add Option</button>
      </form>

    </div>);

}
}



ReactDOM.render(<Indecision></Indecision>, root);
