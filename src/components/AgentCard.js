import AgentRole from "./AgentRole"
function AgentCard({ agent }) {
    return (
    
        <div className="agent-card" style={{background:getBackgroundGradient(agent)}}> 
           <div className="agent-name-background" style={{backgroundImage: `url(${agent.background})`}}>
            <AgentRole role={agent.role} />
            <img className="agent-image" src={agent.fullPortrait} alt={agent.displayName}></img>
            </div>
        </div>
    )
}

const getBackgroundGradient = agent => {
  const colors = agent.backgroundGradientColors.map(color => `#${color}`).join(', ')
return  `linear-gradient(${colors})`
}

export default AgentCard