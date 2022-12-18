function AgentRole({ role }) {
    return (
        <div className="agent-role-container">
            <span>{role.displayName}</span>
            <img className="agent-role-image" src={role.displayIcon} alt={role.displayName}></img>

        </div>
    )
}
export default AgentRole