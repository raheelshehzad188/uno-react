import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import AddAgentForm from "../../components/agents/AgentForm";

const AddAgent = (props) => {
     return (
        <>
            <Breadcrumb title='Add Agent' titleText='Welcome To Admin Panel' parent='Agents' />
            <Container fluid={true}>
                <Row>

                    <Col lg='12'>
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Agent details</h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <AddAgentForm agent={[]} agent_id="0"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddAgent