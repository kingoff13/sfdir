import React, { Component } from 'react';
import { ApiClient } from '../../api/api';

export class ContentTable extends Component {
    render() {
        let client = new ApiClient();
        let query_data = client.query(this.props.data);

        let heads = Object.keys(query_data[0]);
        heads.shift();
        let order = 1;

        return <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {heads.map((head) => (
              <th key={this.props.data+head} scope="col">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {query_data.map((item) => (
          <tr key={this.props.data+item.id}>
            <th scope="row">{order++}</th>
            {heads.map((field) => (
              <td key={this.props.data+item.id+field}>{item[field]}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    }
}