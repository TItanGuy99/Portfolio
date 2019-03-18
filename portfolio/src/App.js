import React, { Component } from 'react';
import './App.css';
import Top from './Main/Top';
import Info from './Main/Info'
import Footer from './Main/Footer'
import MenuBar from './Main/MenuBar'

class App extends Component {
  render() {
      return (
        <div className="App">
            <Top />
            <MenuBar />    
            <Info />
            <Footer email='luiz.neosnk@gmail.com' linkedin='https://www.linkedin.com/in/luiz-nai/' />
        </div>
      );
  }
}

export default App;