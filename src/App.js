import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContentTable } from './components/content/ContentTable';
import { Menu } from './components/menu/Menu';

class App extends Component {
  state = {
    data: 'light_armor'
  }

  changeData = (data) => {
    this.setState({
      data
    })
  }

  render() {
    return (
      <div>
        <Menu changeData={this.changeData}/>
        <ContentTable data={this.state.data}/>
      </div>
    );
  }
}

export default App;
