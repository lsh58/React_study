import React, {useState, useRef} from 'react';
import Create from './components/Create';
import User from './components/User';
import Result from './components/Result';

const Contact = () => {

    const [result, setResult] = useState([]); 
    const [user, setUser]= useState([
        {id:1, name:'Abet', number:'01011111111'},
        {id:2, name:'Betty', number:'01022222222'},
        {id:3, name:'Charlie', number:'01033333333'},
        {id:4, name:'David', number:'01044444444'},
    ]);
    const nextId = useRef(5);
    const [name, setName] = useState(''); 
    const [number, setNumber] = useState(''); 

    const onCreate = e =>{
        e.preventDefault();
        setUser([
            ...user,
            {
              id: nextId.current,
              name: e.target.username.value,
              number: e.target.number.value
            },
          ]);
          nextId.current+=1;
    }

    const onfind = e =>{
        e.preventDefault();
        for(let i=0; i<user.length; i++){
            if(user[i].name === e.target.innerText){
                var resultId = user[i].id;
                var resultName = user[i].name;
                var resultNum = user[i].number;
                setResult(
                    {
                      id : resultId,
                      name : resultName,
                      number : resultNum
                    }
                );
            break;
         }
       }
    }

    const onedit = e => {
        e.preventDefault();
        setUser(user.map(user => user.id === result.id ? {...user, name:e.target.username.value, number:e.target.number.value} : user));
        setResult(
            {
              id : '',
              name : '',
              number : ''
            }
        );
        setName('');
        setNumber('');
    }
    
    const onremove = e => {
        e.preventDefault();
        setUser(user.filter(user => user.id !== result.id));
        setResult(
            {
              id : '',
              name : '',
              number : ''
            }
        );
    }

    const onChangeInput = e => {
        setName(e.target.value);
    }; 
    const onChangeInput2 = e => {
        setNumber(e.target.value);
    }; 

  return (
    <>
      <h1>Contact App</h1>
      <form>
        <input placeholder="Search"></input>
      </form>
      <ul>
        {user.map((v, i) => {
          return <User key={i} userInfo={v} onClick={onfind}/>;
        })}
      </ul>
      <h2>Deatail Information</h2>
      <Result name={name} number={number} result={result} onEdit={onedit} onRemove={onremove} onChange={onChangeInput} onChange2={onChangeInput2}/>
      <h2>Create New User</h2>
      <Create onCreate={onCreate}/>
    </>
  );
};

export default Contact;