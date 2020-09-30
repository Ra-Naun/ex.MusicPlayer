import React from 'react';
import logo from './img/logo.svg';
import './css/PrimitiveUI.css';
import './css/App.css';



function App() {
  return (
    <div className="App">
      <div id="container">
        <Container/>
      </div>
    </div>
  );
}

class Container extends React.Component {
  constructor(props) {
      super(props);
      this.state = { isMusicPlaying: false };
  }


  render() {
      return (
        <div>
          <div id="divRes">
            <h1 className="text-center">Чат</h1>
            <form name="publish">
              <textarea id="textareaRes" placeholder="Введите сообщение..." name="message"></textarea>
              <input className="full-button round-button" type="submit" value="Отправить"></input>
            </form>
            
            <div id="subscribe"></div>
          </div>
        </div>
      
      );
  }
}

export default App;