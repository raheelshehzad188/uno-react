import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import JobForm from "../../components/Job/JobForm";
import Link from "next/link";

const AddJob = () => {
  return (
    <>
      <Breadcrumb
        title="Edit Job"
        titleText="Welcome To Admin Panel"
        parent="Jobs"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>
                  Add Job
                  <Link
                    href="/job/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <JobForm job={[]} jobId="0"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddJob;
