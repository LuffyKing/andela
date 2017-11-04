
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './jsx-indecision-app.js'
{/*
  let visValue = 'none';

function toggleVis(){

  visValue === 'none' ? visValue = 'block' : visValue ='none' ;
  renderApp();


}
const root = document.getElementById('root');

const renderApp = () =>{
const template  = (
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVis}>{visValue==='none' ? 'Show Details' : 'Hide Details'}</button>
    <p id='content' style={{display:visValue}}>Some detalis to hide.</p>
  </div>
);
  ReactDOM.render(template, root);
};
renderApp();

//import './playground/const-es6.js';
const appObject = {
  title:'Damola The Great',
  subtitle:'King Damola',
  options: [],
}
function options(appObject){
  if (options.length > 0){
    return 'Here are your options'

  }
  else{
    return 'No options'
  }
}
function renderSubtitlePara(appObject){
  if(appObject.subtitle){
    return <p>subtitle: {appObject.subtitle}</p>
  }



}
const resetOptions = () => {
  appObject.options = [];
  renderIndecisionApp();


}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option){
    appObject.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();


  }
}
const makeDecision = () => {
  const randNum = Math.floor(Math.random()*appObject.options.length);
  const option = appObject.options[randNum];
  alert(option);

};
const root = document.getElementById('root');
const renderIndecisionApp = () => {const template = (
  <div>
    <p>title: {appObject.title}</p>

    {renderSubtitlePara(appObject)}
    <p>{options(appObject)}</p>
    <button onClick={makeDecision} disabled={appObject.options.length == 0}>What should I do?</button><br/><br/>

    <button onClick={resetOptions}>Remove All</button>


    <ol>
      {
        appObject.options.map((item, index) =>{
          return <li key={index}>{item}</li>;
        })
      }

    </ol>
    <form onSubmit = {onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
);
ReactDOM.render(template, root);
};
renderIndecisionApp();
*/}
