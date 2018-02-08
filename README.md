This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React Table Component
This is a demo for the basic usage of a table component

which can be used with any schema of data

## Basic Usage
The demo must be cloned from this repo executing the following 

comand in the terminal

```
git clone https://github.com/isaacsinuhe/react-table-component-demo.git
```

then you must install all of the dependencies from the cloned folder
 ```
 cd react-table-component-demo
 yarn install
 ```

## Basic Component Usage
The component follows a similar markup as the table html tags.

### Table Usage

#### THEAD Usage
You must import the *TABLE* component in which you must use a

*THEAD* component which will serve as a container for *TH* components.

*TH* components receives a property *title* wich is a string specifying

the name of the *column*. This group of elements are for asigning names 

to the headers.

#### TROWS Usage
*TROWS* component will serve as a container for *TDATA* components.

##### data prop
*TROWS* component receives a property called *data* as an Array of objects 

to populate all of the rows we want to display in our table.

#### TDATA Usage
*TDATA* component is an element that *TROWS* component will populate.

*TDATA* represents dinamically generated columns for the table.

##### forProp prop
*TDATA* component receives a property called *forProp* which indicates

the name of the property the column must filled with as a string.

Each generated row of that column will be filled with the value the

property contains for each object in the array of the *TROWS* data array.

If you want to populate the column with multiple data you can specify different

values using a space as a separator.

*TDATA* component supports *dot notation* so you can specify properties of

nested objects.

##### avatar prop
*TDATA* receives an optional property called *avatar* which expects to receive

a name of a property *TROWS* will populate.

The *avatar* value will populate an *image* source property, so it should be of

type string.

If *TROWS* doesn't find any match for the *avatar* value in its data array

the avatar will be filled with that string.

##### linkTo prop
*TDATA* receives an optional property called *linkTo* which expects to receive

a name of a property *TROWS* will use to transform the *forProps* populated value

to an anchor element.

If *TROWS* doesn't find a match for that property in its array of data then the 

*href* of the anchor element will be filled with the plain string value the

*linkTo* prop contains.

### Basic Usage Example with populated data
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
