import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Top from './Main/Top';
import Info from './Main/Info'
import Footer from './Main/Footer'
import Education from './Main/Education'
import MenuBar from './Main/MenuBar'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
      return (
        <div className="App">
          <Top />
          <BrowserRouter>
            <MenuBar />
            <Switch>
              <Route path="/" exact={true} component={Info} />
              <Route path="/Education" component={Education} />
            </Switch>
          </BrowserRouter>

          <Footer email='luiz.neosnk@gmail.com' linkedin='https://www.linkedin.com/in/luiz-nai/' />
        </div>
      );
  }
}

export default App;