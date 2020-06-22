import React, {Component} from 'react';
import GSquestion from "./components/GSquestion";
import GSanswer from "./components/GSanswer";

const GameSample3 = () => {
  //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }

  return array;
};
class GSclass3 extends Component {
  constructor(props){ //초기화담당
    super(props);
    this.state = {
      first : Math.ceil(Math.random() * 9),
      second : Math.ceil(Math.random() * 9),
      result :''
    }
  }
  render() {
    return (
      <div className="box">
        <GSquestion 
            first={this.state.first} 
            second={this.state.second} 
        >
        </GSquestion>
        <GSanswer onSubmit={function(_answer){
          var _question = this.state.first * this.state.second;
          if(parseInt(_answer) === _question){
            this.setState({
              result: '정답입니다',
              first : Math.ceil(Math.random() * 9),
              second : Math.ceil(Math.random() * 9)
            });
          } else{
            this.setState({
              result: '틀렸습니다'
            });
          }
        }.bind(this)}>
        </GSanswer>
        <div>{this.state.result}</div>
      </div>
      );
    }
}


export default GSclass3;