import {useState} from 'react'
import './App.css';
import data from './data'

function App() {
  const [teams, setTeams]=useState(data)

  const handleVote=(index)=>{
    const newTeams=[...teams]
    newTeams[index].vote+=1;
    setTeams(newTeams)
  }

  const handleClear=(index)=>{
    const newTeams=teams.map((t)=>t)
    console.log(newTeams)
    newTeams[index].vote=0;
    setTeams(newTeams)
  }
  return (
    <div className="container">
    {teams.map((team, index)=> {
    return (
      <div className="card" key={team.name}>
        <img src={team.img} alt={`${team.name} logo`} />
        <h3>{team.name}</h3>
        <button onClick={()=>handleVote(index)}>Vote</button>
        
    <div className="lower">
        <p>Vote count: <span id="span1">{team.vote}</span></p>
        <button onClick={()=>handleClear(index)} type="reset" className='clear-btn'>Clear</button>
    </div>
    </div>
    )
    })}
    </div>
  );
}

export default App;

