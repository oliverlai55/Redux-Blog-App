import React, { Component } from 'react';

export default class App extends Component {


  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
  //this.props.children. If we nest child component inside parent component and want the parent to render the chil component, then need to use this.props.children in the parent compoennt
  // this.props.children is where the child components will take place on the page
