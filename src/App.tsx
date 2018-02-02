import * as React from 'react';
import { Table, THead, TH, TRows, TData } from './components/TableComponent';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = { data: null };
  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => {
      console.log(data);
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
          <TData avatar="a.com" forProp="username"/>
          <TData forProp="address.suite"/>
          <TData forProp="website"/>
        </TRows>

      </Table>
    );
  }
}

export default App;
