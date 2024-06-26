import {useRouter} from "next/router";
import React, { useState} from "react";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {Col, Container, Input, Label, Row} from "reactstrap";
import dynamic from "next/dynamic";
const AgentReviewsList = dynamic(
    () => import("../../../components/agents/AgentReviews"),
    {ssr: false}
);
const AgentReviews = (props) => {
    const router = useRouter();
    const [agentReviews, setAgentReviews] = useState([]);
    const agentId = router.query.agent_id;
    return (<>
        <Breadcrumb title='All Agents' titleText='welcome to admin panel' parent='Agents'/>
        <Container fluid={true}>
            <Row className="agent-section property-section agent-lists">
                <Col lg='12'>
                    <div className="ratio2_3">
                        <AgentReviewsList agent_id={agentId}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>)
}

export default AgentReviews;