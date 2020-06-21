import React, {Component} from 'react';

class GSanswer extends Component{
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
          <input name="answer"></input>
          <button type="submit">answer</button>
        </form>
      );
    }
  }

  export default GSanswer;
  