import React, {Component} from 'react';
import GS2answer from "./components/GS2answer";


class GSclass2 extends Component {
  constructor(props){ //초기화담당
    super(props);
    this.state = {
      text : '아이유',
      result :''
    }
  }
  render() {
    return (
      <div className="box">
        <div>{this.state.text}</div>
        <GS2answer onSubmit={function(_answer){
          if (this.state.text[this.state.text.length - 1] === _answer[0]) {
            this.setState({
              result: '성공',
            });
          } else{
            this.setState({
              result: '실패'
            });
          }
        }.bind(this)}>
        </GS2answer>
        <div>{this.state.result}</div>
      </div>
      );
    }
}


export default GSclass2;