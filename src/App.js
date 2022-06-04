import {useState} from 'react'
import './App.css';
import data from './data'

function App() {
  return (
    <div className="container">
    {this.state.teams.map((team, index)=> {
    return (
      <div className="card" key={team.name}>
        <img src={team.img} alt={`${team.name} logo`} />
        <h3>{team.name}</h3>
        <button onClick={()=>this.handleVote(index)}>Vote</button>
        
    <div className="lower">
        <p>Vote count: <span id="span1">{team.vote}</span></p>
        <button onClick={()=>this.handleClear(index)} type="reset" className='clear-btn'>Clear</button>
    </div>
    </div>
    )
    })}
    </div>
  );
}

export default App;

