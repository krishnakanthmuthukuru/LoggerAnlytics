import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';



export default class TitleBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render(){
    return(

      <AppBar title={this.props.title} />



    )
  }
}
