import React, {Component} from 'react';
import GSquestion from "./components/GSquestion";
import GSanswer from "./components/GSanswer";

class GSclass extends Component {
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


export default GSclass;