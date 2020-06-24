import React, {Component} from 'react';

class GS3answer extends Component{
    render(){
      return(
        <form action="/create_process" method="post"
        onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(
          e.target.answer.value);
          e.target.answer.value='';
          e.target.answer.focus();
        }.bind(this)}>
          <input maxLength={4} name="answer"></input>
          <button>Insert!</button>
        </form>
      );
    }
  }

  export default GS3answer;
  