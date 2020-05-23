import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContentTable } from './components/content/ContentTable';
import { Menu } from './components/menu/Menu';
import { Search } from './components/search/Search';
import { ApiClient } from './api/api'

class App extends Component {
  state = {
    data: []
  }
  
  componentDidMount() {
    let client = new ApiClient();
    this.setState({
      data: client.query(),
      client
    });
  }

  filterData = (query) => {
    // let data = this.state.client.query(query)
    let data = this.state.data.filter(item => item.name.includes(query));
  }

  changeData = (query) => {
    let data = this.state.client.query(query)
    this.setState({
      data
    })
  }

  render() {
    return (
      <div>
        <Menu changeData={this.changeData}/>
        <Search filterData={this.filterData}/>
        <ContentTable data={this.state.data}/>
      </div>
    );
  }
}

export default App;
