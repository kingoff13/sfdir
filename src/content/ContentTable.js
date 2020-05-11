import React, { Component } from 'react';

const TEST_DATA = [
    {
      id: 0,
      first: 'Mark',
      last: 'Otto',
      handle: '@mdo',
    },
    {
      id: 1,
      first: 'Jacob',
      last: 'Thornton',
      handle: '@fat',
    },
    {
      id: 2,
      first: 'Larry',
      last: 'the Bird',
      handle: '@twitter',
    },
  ];

export class ContentTable extends React.Component {
    render() {
        let heads = Object.keys(TEST_DATA[0]);
        heads.shift();
        let order = 1;

        return <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {heads.map((head) => (
              <th key={head} scope="col">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TEST_DATA.map((item) => (
          <tr>
            <th scope="row">{order++}</th>
            {heads.map((field) => (
              <td key={item.id}>{item[field]}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    }
}