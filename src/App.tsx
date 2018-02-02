import * as React from 'react';
import { Table, THead, TH, TRows, TData } from './components/TableComponent';
import axios from 'axios';

class App extends React.Component {
  state = { data: null };
  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <Table>
        <THead>
          <TH title="Full Name"/>
          <TH title="User Name"/>
          <TH title="Adress"/>
          <TH title="Uri"/>
        </THead>

        <TRows data={this.state.data}>
          <TData forProp="name"/>
          <TData avatar="http://oi66.tinypic.com/2a0n4ue.jpg" forProp="username"/>
          <TData forProp="address.suite address.city"/>
          <TData linkTo="website" forProp="website"/>
        </TRows>

      </Table>
    );
  }
}

export default App;
