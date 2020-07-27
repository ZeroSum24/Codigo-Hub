import * as React from 'react';
import { Table } from 'reactstrap';

const columns = [
  {
    key: 'index',
    name: '#',
  },
  {
    key: 'address',
    name: 'Address',
  },
  {
    key: 'name',
    name: 'Name',
  },
  {
    key: 'type',
    name: 'Type',
  },
  {
    key: 'balance',
    name: 'Balance',
  },
]

export default class BalanceSheet extends React.Component {

  render = () => {
    if (this.props.balancesList == null) return <div>"You have no Filecoin addresses :("</div>;
    const data = this.props.balancesList;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              {columns.map(c => <th key={c.name}>{c.name}</th>)}
            </tr>
          </thead>
          <tbody>
          {data.map((d,i) =>
          <tr key={d.addr.addr}>
            <th scope='row'>{i}</th>
            <th>{d.addr.addr}</th>
            <th>{d.addr.name}</th>
            <th>{d.addr.type}</th>
            <th>{d.balance}</th>
          </tr>)}
          </tbody>
        </Table>
      </div>
    );
  };
}
