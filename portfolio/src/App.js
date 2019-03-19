import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Top from './Main/Top';
import Info from './Main/Info'
import Footer from './Main/Footer'
import Education from './Main/Education'
import MenuBar from './Main/MenuBar'
import Experience from './Main/Experience';
import SideProjects from './Main/SideProjects';


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
              <Route path="/Experience" component={Experience} />
              <Route path="/SideProjects" component={SideProjects} />
            </Switch>
          </BrowserRouter>

          <Footer email='luiz.neosnk@gmail.com' linkedin='https://www.linkedin.com/in/luiz-nai/' />
        </div>
      );
  }
}

export default App;