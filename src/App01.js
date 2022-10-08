import './App.css';
import React, { Component } from 'react';

class App01 extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid green'}}>
        <div>Hello {this.props.name}</div>
        <div>Hello {this.props.kkk}</div>
      </div>
    );
  }
}


export default App01;
