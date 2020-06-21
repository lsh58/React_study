import React, {Component} from 'react';

class GS_question extends Component{
    render(){
      return(
        <article>
            <h2>{this.props.first} * {this.props.second} = ? </h2>
        </article>
      );
    }
  }

  export default GS_question;
  