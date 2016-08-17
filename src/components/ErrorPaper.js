import React, {Component} from 'react';
import Paper from 'material-ui/Paper'

function getColor(errorCode){
  var color;
  switch(errorCode){
    case '404': color = 'orange';
                break;
    case '200': color = '#9CCC65';
                break;

    default: color='yellow'
                break;
  }
  return color;
}
var headerStyle={
  paddingTop:5
}
function DisplayError(props) {

    return (
    <div>
    {Object.keys(props.error).map((key)=> {
      if(key=='content-length')
      { return }
      else{
      return <h5 style={headerStyle} >{key} : {props.error[key]}  </h5>
      }
    })}
  </div>
  )

}
export default class ErrorPaper extends React.Component{
   render(){
    const errorStyle ={
     width: "22%",

     display: 'inline-block',
     'margin-left':10,
     'margin-right':10,
     'margin-top':5,
     'margin-bottom':5,
     paddingLeft:5,

     'background-color': getColor(this.props.error["status-code"])
    }

    return(
      <Paper zDepth={3} style={errorStyle} >
      <DisplayError error = { this.props.error } />
       </Paper>
    );
  }
  static   get defaultProps() {
    return {
      error:{
        errorCode:'404',
        timestamp:'2016-08-10T05:08:38.128Z',
        method: 'GET',
        httpVersion: '1.1',
        url:'/',
        userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
        hostname:'DELL'
      }
    };
  }
}
