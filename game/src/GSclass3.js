import React, {Component} from 'react';
import GS3answer from "./components/GS3answer";

const getNumbers = () => {
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
      answer : (getNumbers()),
      tried : '',
      tries : [],
      result : ''
    }
  }
  render() {
    return (
      <>
        <GS3answer onSubmit={function(_data){
          console.log(this.state.answer.join(''));
          if(_data === this.state.answer.join('')){
            this.setState({
              result: '홈런입니다',
              tries : this.state.tries.concat(_data),
              tried : _data
            });
          } else{
            const answerArray = _data.split('').map(v => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {//10번 이상 틀렸을 때
              this.setState({
                answer : (getNumbers()),
                result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join('')}였습니다.`,
                tries : [],
                tried : _data
              });
              alert('게임을 다시 시작합니다!');
            } else {//10번 미만 틀렸을 때
              for (let i = 0; i < 4; i += 1) {
                if (answerArray[i] === this.state.answer[i]) {
                  strike += 1;
                } else if (this.state.answer.includes(answerArray[i])) {
                  ball += 1;
                }
              }
            this.setState({
              result: `${strike} 스트라이크, ${ball} 볼입니다.`,
              tries : this.state.tries.concat(_data),
              tried : _data
            });
            }
          }
        }.bind(this)}>
        </GS3answer>
        <div>판정 : {this.state.result}</div>
        <div>카운트 :{this.state.tries.length}</div>
        <div>입력 :{this.state.tried}</div>
        <button onClick={function(){
              this.setState({
                answer : (getNumbers()),
                result: '',
                tries : [],
                tried : ''
              });
              alert('게임을 다시 시작합니다!');
        }.bind(this)}>다시도전하기</button>
      </>
      );
  }
}


export default GSclass3;