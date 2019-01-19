import React from "react";
import ReactTable from "react-table";
import Logo from "./logo.svg";
import 'react-table/react-table.css'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    // if (this.state.liked) {
    //   return ;
    // }

    // return <button onClick={() => this.setState({ liked: true })}>Like</button>;

    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]
  
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]

    return (
    <>
      <img src={Logo} />
      <ReactTable data={data} columns={columns}/>
    </>
    )
  }
}

export default App;
