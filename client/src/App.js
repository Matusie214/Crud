import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APP</h1>

      <div className="form">
        <label>Movie name:</label>
        <input type="text" name="movieName"/>
        <label>Movie review:</label>
        <input type="text" name="review"/>
        <button>Submit</button>
      </div>

    </div>
  );
}

export default App;
