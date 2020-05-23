import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContentTable } from './components/content/ContentTable';
import { Menu } from './components/menu/Menu';
import { Search } from './components/search/Search';
import { ApiClient } from './api/api'

class App extends Component {
  state = {
    data: [],
    filteredData: []
  }
  
  componentDidMount() {
    let client = new ApiClient();
    let data = client.query()
    this.setState({
      data,
      filteredData: data,
      client
    });
  }

  filterData = (event) => {
    let data = this.state.data.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({
      filteredData: data
    })
  }

  changeData = (query) => {
    let data = this.state.client.query(query)
    this.setState({
      data,
      filteredData: data
    })
  }

  render() {
    return (
      <div>
        <Menu changeData={this.changeData}/>
        <Search filterData={this.filterData}/>
        <ContentTable data={this.state.filteredData}/>
      </div>
    );
  }
}

export default App;
