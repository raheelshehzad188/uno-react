import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import AddAgentForm from "../../../components/agents/AgentForm";
import {fetchData} from "../../../components/api/fetchData";
import Link from "next/link";

const EditAgentData = () => {
  const router = useRouter();
  const [agent, setAgent] = useState([]);
  const [agentId, setAgentId] = useState();
  useEffect(() => {
    setAgentId(router.query.agent_id)
  }, [router.query.agent_id])
  useEffect(() => {
    if (!agentId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/agent/view/${agentId}`).then(function (response) {
      if (response) {
        setAgent(response.data?.data);
      }
    });
  }, [agentId]);
  return (
    <>
      <Breadcrumb
        title="Edit Agent"
        titleText="Welcome To Admin Panel"
        parent="Agents"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit agent details:
                  <b className="text-primary">{agent.agent_name}</b>
                  <Link
                    href="/agents/all-agents"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  agentId &&
                  <AddAgentForm agent={agent} agent_id={router.query.agent_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditAgentData;
