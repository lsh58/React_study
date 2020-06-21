import React, {Component} from 'react';

class GSquestion extends Component{
    render(){
      return(
        <article>
            <h2>{this.props.first} * {this.props.second} = ? </h2>
        </article>
      );
    }
  }

  export default GSquestion;
  