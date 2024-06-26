import {Col, List, Row} from "reactstrap";
import React from "react";

const CommunityAgentTab = ({agents, communityAgents}) => {
  console.log(communityAgents)
  const handleChange = (checked, agent_id) => {
    if (checked) {
      communityAgents.push(agent_id);
    } else {
      const agentIndex = communityAgents.indexOf(agent_id);
      communityAgents.splice(agentIndex, 1);
    }
  };
  return (<>
    <Row>
      {agents && agents.map((agent, i) => {
        return (
          <Col sm="4" className="form-group">
            <label>
              <input
                type="checkbox"
                defaultChecked={communityAgents?.includes(agent.id)}
                onChange={e => handleChange(e.target.checked, agent.id)}
              /> {agent.name } <small className="text-primary">(  {agent.agent_language}  )</small>
            </label>
          </Col>
        )
      })}
    < /Row>
  </>);
}

export default CommunityAgentTab;