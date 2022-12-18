import './App.css';
import api from './api/api.client'
import { useEffect } from 'react';
import { useState } from 'react';
import AgentCard from './components/AgentCard';


function App() {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    async function initialize() {
      const response = await api.getAgents()
      setAgents(response)
    }

    initialize()
  }, [])

  const agentCards = agents.map(agent => (<AgentCard agent={agent} />))

  return (
    <div className="App">
      {agentCards}
    </div>
  );
}

export default App;
