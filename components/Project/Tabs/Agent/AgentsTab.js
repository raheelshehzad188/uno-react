import {Col, List, Row} from "reactstrap";
import React from "react";

const ProjectAgentTab = ({agents, projectAgents}) => {
  console.log(projectAgents)
  const handleChange = (checked, agent_id) => {
    if (checked) {
      projectAgents.push(agent_id);
    } else {
      const agentIndex = projectAgents.indexOf(agent_id);
      projectAgents.splice(agentIndex, 1);
    }
  };
    console.log('agents wffwf', projectAgents);
  return (<>
    <Row>
      {agents && agents.map((agent, i) => {
        return (
          <Col sm="4" className="form-group">
            <label>
              <input
                type="checkbox"
                defaultChecked={projectAgents?.includes(agent.id)}
                onChange={e => handleChange(e.target.checked, agent.id)}
              /> {agent.name } <small className="text-primary">(  {agent.agent_language}  )</small>
            </label>
          </Col>
        )
      })}
    < /Row>
  </>);
}

export default ProjectAgentTab;