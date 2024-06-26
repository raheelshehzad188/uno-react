import React from 'react'
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import ProjectForm from "../../components/Project/ProjectForm";
import Link from "next/link";

const AddProject = (props) => {
  return (
    <>
      <Breadcrumb title='Add Project' titleText='Welcome To Admin Panel' parent='Project Page'/>
      <Container fluid={true}>
        <Row>
          <Col lg='12'>
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Add Project details
                  <Link
                    href="/project/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <ProjectForm projectData={[]} projectId="0"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default AddProject