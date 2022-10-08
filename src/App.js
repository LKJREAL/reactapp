import './App.css';
import {useState, Fragment} from 'react';
import Counter from './components/Counter';
import axios from 'axios';

function App(props) {
  const [ abc, setAbc ] = useState("My ID") 
  const [ myName, setMyName ] = useState("A") 
  const [ myAge, setMyAge ] = useState("1") 
  const [ browseResult, setBrowseResult ] = useState("") 

  // const baseUrl = "http://localhost:8080";
  const baseUrl = "http://192.168.0.12:8080";

  // let colorArray = ['green', 'blue', 'yellow'];
  let colorArray = [
    {backColor: 'margenta', bRadius: 10},
    {backColor: 'yellow', bRadius: 20},
    {backColor: 'orange', bRadius: 30}
  ];

  function onClickHandler() {
    // alert('test');
    setAbc("AAAAAA!!!!");
  }

  function getFromJavaServer(){
    axios.get(baseUrl + '/testcall').then(resp => { 
      // console.log(resp.data);
      setMyName(resp.data.name)
      setMyAge(resp.data.age)
    });
    // axios.get('http://localhost:8080/testcall').then(function(resp){
    //   setMyName(resp.data.name)
    //   setMyAge(resp.data.age)
    // });
  }


  // function getFromJavaServer(){
  //   axios.post(baseUrl + '/testcall').then(resp => { 
  //     // console.log(resp.data);
  //     setMyName(resp.data.name)
  //     setMyAge(resp.data.age)
  //   });
  //   // axios.get('http://localhost:8080/testcall').then(function(resp){
  //   //   setMyName(resp.data.name)
  //   //   setMyAge(resp.data.age)
  //   // });
  // }














  function asperaBrowse(){
    axios.get(baseUrl + '/asperacall').then(resp => { 
      //  console.log(resp.data.list);
      const result = JSON.parse(resp.data.list);
      // console.log(result);
      setBrowseResult(resp.data.list);
    });
  }

  function deleteText(){
    setBrowseResult("");
  }

  return (
    <div>
      Hello App {props.name}
      <div style={{backgroundColor: 'yellow', border: '1px solid green'}}>
        I am state variables: { abc }
      </div>
      <div>
        <button onClick={onClickHandler}>Click me</button>
        <button onClick={getFromJavaServer}>getFromJavaServer</button>
        <button onClick={asperaBrowse}>asperaBrowse</button>
        <button onClick={deleteText}>delete</button>
      </div>
      <div className='container'>
        <div style={{width: '500px'}}>
        <div style={{border: '1px solid black'}}>{browseResult}</div>
          <div style={{border: '1px solid black'}}>{myName}</div>
          <div>{myAge}</div>
        </div>
        <Counter backColor='blue'></Counter>
        <Counter backColor='yellow'></Counter>
        {/* <Counter bRadius={10}></Counter> */}
        {colorArray.map(function (x, i) {
          return <Counter backColor={x.backColor} bRadius={x.bRadius} key={i}/>;
        })}
      </div>
      <Counter backColor='green' bRadius={20}></Counter>
    </div>
  );
}

export default App;
