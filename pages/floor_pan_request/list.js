import React from 'react';
import {Col, Container, Row} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import ProjectFloorPlanRequestList from "../../components/ProjectFloorPlanRequest/ProjectFloorPlanRequestList";

const RegisterInterestList = dynamic(
  () => import("../../components/RegisterInterest/RegisterInterestList"),
  {ssr: false}
);

const ProjectFloorPlanRequest = () => {
  return (
    <>
      <Breadcrumb
        title='All Projects Floor Plan Requests'
        titleText='Welcome To Admin Panel'
        parent='All Projects Floor Plan Requests'
      />

      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <h5>Projects Floor Plan Requests List</h5>
              </div>
              <div className="pt-0 card-body">
                <ProjectFloorPlanRequestList/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectFloorPlanRequest

