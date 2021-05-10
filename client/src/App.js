import React,{useState,useEffect} from 'react'
import './App.css';
import Axios from 'axios'

function App() {

  const[movieName,setMovieName]=useState('')
  const[review,setReview]=useState('')
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response)
    });
  },[]);
  
  const submitReview = ()=>{
    Axios.post('http://localhost:3001/api/insert',{
      movieName:movieName,movieReview:review}).then(()=>{
      alert("sucess")})
  }
  return (
    <div className="App">
      <h1>CRUD APP</h1>

      <div className="form">
        <label>Movie name:</label>
        <input type="text" name="movieName" onChange={(e)=>
        setMovieName(e.target.value)}/>
        <label>Movie review:</label>
        <input type="text" name="review" onChange={(e)=>
        setReview(e.target.value)}/>
        <button onClick={submitReview()}>Submit</button>
      </div>

    </div>
  );
}

export default App;
