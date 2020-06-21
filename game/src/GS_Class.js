import React, {Component} from 'react';
import GS_question from "./components/GS_question";
import GS_answer from "./components/GS_answer";

class GS_Class extends Component {
  constructor(props){ //초기화담당
    super(props);
    this.state = {
      first : Math.ceil(Math.random() * 9),
      second : Math.ceil(Math.random() * 9),
    }
  }

  getContent(){
  _article =<CreateContent onSubmit={function(_title,_desc){


      }
    }
  }

  render() {
    return (
      <div className="box">
        <GS_question 
            first={this.state.first} 
            second={this.state.second} 
        >
        </GS_question>
        
        <GS_answer></GS_answer>

        <div>정답입니다</div>
      </div>
      );
    }
}


export default GS_Class;