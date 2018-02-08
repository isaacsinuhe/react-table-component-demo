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
**Table** component serves as a container of **THead**, **TRows** and **TFoot**

components.

```
<Table>
  <THead>
    // ...TH elements
  </THead>
  <TROWS>
    // ...TDATA elements
  </TROWS>
  <TFOOT legend="any legend"/>
</Table>
```

#### THEAD Usage
You must import the **Table** component in which you must use a

**THead** component which will serve as a container for **TH** components.

**TH** components receives a property `title` wich is a string specifying

the name of the `column`. This group of elements are for asigning names 

to the headers.

```
...
<THead>
  <TH title="Column Header"/> *this will display `Column Header` as a header of the column*
  ... // other TH components
  ...
</THead>
...
```

#### TRows Usage
**TRows** component will serve as a container for **TData** components.

##### data prop
**TRows** component receives a property called `data` as an Array of objects 

to populate all of the rows we want to display in our table.

```
...
<TRows data={this.state.data}> *receives the data it will populate with*
  ... TData components
</TRows>
...
```

#### TData Usage
**TData** component is an element that **TRows** component will populate.

**TData** represents dinamically generated columns for the table.

##### forProp prop
**TData** component receives a property called `forProp` which indicates

the name of the property the column must filled with as a string.

Each generated row of that column will be filled with the value the

property contains for each object in the array of the **TRows** data array.

If you want to populate the column with multiple data you can specify different

values using a space as a separator.

**TData** component supports *dot notation* so you can specify properties of

nested objects.
```
...
<TRows data={this.state.data}>
  ... other TData components
  <TData forProp="name"/> *Populates a column with the name property for each element in the TRows data array*
  <TData forProp="address.suite address.city"/> *Populates a column with both the suite and the city properties in the address object property for each element in the TRows data array*
  ... other TData components
</TRows>
...
```


##### avatar prop
**TData** receives an optional property called `avatar` which expects to receive

a name of a property **TRows** will populate.

The `avatar` value will populate an `image` source property, so it should be of

type string.

If **TRows** doesn't find any match for the `avatar` value in its data array

the avatar will be filled with that string.

```
...
<TRows data={this.state.data}>
  ...
  <TData avatar="http://oi66.tinypic.com/2a0n4ue.jpg" forProp="username"/> *It will render the property username from each object in the array of data and will render an avatar image from that source*
  <TData avatar="user.avatar" forProp="username"/> *It will render the property username from each object in the array of data and will render an avatar image from the property avatar inside of the prop user from the data array*
  ...
</TRows>
...
```

##### linkTo prop
**TData** receives an optional property called `linkTo` which expects to receive

a name of a property **TRows** will use to transform the `forProps` populated value

to an anchor element.

If **TRows** doesn't find a match for that property in its array of data then the 

`href` of the anchor element will be filled with the plain string value the

`linkTo` prop contains.

```
<TRows data={this.state.data}>
  ...
  <TData linkTo="http://www.google.com" forProp="website"/> *it will render the string from the website property in the data array and the links will redirect to that url*
  <TData linkTo="user.website" forProp="website"/> *it will render the string from the website property in the data array and the links will redirect to the website value contains for each user property in the array of data*
  ...
</TRows>
```

#### TFoot **(optional)**
This represents the foot of the table, which is optional.

##### legend prop
This prop is the value of the text the **TFoot** will render.

```
  <TFoot legend="Author Isaac G"/> *this will display `Author Isaac G` in the footer*
```

### Overall Basic Usage Example with populated data
This is an example of how you can use the whole Table component.

```
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
```