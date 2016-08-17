import React,{Component} from 'react';
import ErrorPaper from './ErrorPaper.js'
import $ from 'jquery'
import axios from 'axios'
import SearchBar from 'material-ui/TextField'
import DropDown from './DropDown'
  var errorArray = [];
 var keyNumber=0;
var myData;

 export default class ErrorContainer extends React.Component{
   constructor(props){
     super();
     this.state ={
       errorData:[]
     }
   }
   componentWillMount(){

    var _this = this;
    this.serverRequest =
      axios
        .get(this.props.source)
        .then(function(result) {
          myData = result.data
              errorArray = myData.map(function(error){
               return(<ErrorPaper key={keyNumber++}  error={error}/>)
             })
             _this.setState({errorData:errorArray})
          });

   }

   onChange(e){
     console.log('Filtered text is'+ e.target.value)
    //  console.log(this.state.errorData)
     var filteredData = myData.filter(function(value){
       console.log("valueb ois  " ,value);
       return value["status-code"].indexOf(e.target.value)>-1?true:false
     })
     errorArray = filteredData.map(function(error){
      return(<ErrorPaper key={keyNumber++}  error={error}/>)
    })
    this.setState({errorData:errorArray})
    // this.state.errorData.forEach(function(error){
    //    if(error["status-code"].indexOf(e.target.value)>-1){
    //      return(<ErrorPaper key={keyNumber++} error={error})
    //    }
    //  })
  }
     render(){
      return(
        <div>
        <div>
        <SearchBar hintText="Enter status code to search for logs"  onChange = {this.onChange.bind(this)} />
        <DropDown />
        </div>
        <div>
        {this.state.errorData}
        </div>
        </div>
      )
    }
   }
