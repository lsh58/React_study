import React, {Component} from 'react';

class GS_answer extends Component{
    render(){
      return(
        <form onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
            e.target.answer.value
            )
        }}>
          <input name="answer"></input>
          <button type="submit">answer</button>
        </form>
      );
    }
  }

  export default GS_answer;
  