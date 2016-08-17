var dir = require('node-dir');
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

    export default class DropDownMenuOpenImmediateExample extends React.Component {

      constructor(props) {
        super(props);
        this.state = {value : "Log files",
        files: ["never","something"]};
      }

      handleChange(event,index,value){

        console.log(value);
      }

      componentWillMount(){
      axios.get("http://localhost:7770/files").
      then((files)=>{
        console.log("received ...................." ,files.data);
        this.setState({
          files: files.data
        })
      })
      }
    componentDidMount(){

    }
      render() {
        var file = this.state.files;
        var logData = file.map(function (data) {
          return(
              <MenuItem value={data} primaryText={data} />
            );
          });
        return (
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          {logData}
          </DropDownMenu>
        );
      }
    }
