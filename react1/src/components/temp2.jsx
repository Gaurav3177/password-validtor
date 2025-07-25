import React, { Component } from 'react';

class Temp2 extends Component {
  state = {
    users: [
      { id: 101, name: "Gaurav" },
      { id: 102, name: "Gaurav" },
      { id: 103, name: "Gaurav" }
    ],
    isValid: false
  };

  render() {
    const data = this.state.users.map(user => {
      console.log(user);
      return (
        <h1 key={user.id}>
          ID: {user.id} Name: {user.name}
        </h1>
      );
    });

    return <div>{data}</div>;
  }
}

export default Temp2;
