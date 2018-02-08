import * as React from 'react';
import { Table, THead, TH, TRows, TData, TFoot } from './components/TableComponent';
import axios from 'axios';
import './App.css';

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
      <div className="App">
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
            <TData linkTo="http://www.google.com" forProp="website"/>
          </TRows>

          <TFoot legend="This is the footer"/>
        </Table>
      </div>
    );
  }
}

export default App;
