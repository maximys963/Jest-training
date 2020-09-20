import React, { Component } from 'react';
import { connect }          from 'react-redux';
import GuessedWords         from './components/GuessedWords/GuessedWords';
import Congrats             from './components/Congrats/Congrats'; 
import Input                from './components/Input/Input';
import { getSecretWord }    from './actions';

import './App.css';

class App extends Component {
  render(){
    const { 
      success,
      guessedWords,
      secretWord
     } = this.props;
    return (
        <div className = "container">
          <h1>Jotto</h1>
          <Congrats success = {success}/>
          <Input />
          <GuessedWords guessedWords = {guessedWords}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(App);
