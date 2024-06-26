import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ServiceForm from "../../components/Service/ServiceForm";
import Link from "next/link";

const AddService = () => {
  return (
    <>
      <Breadcrumb
        title="Edit Service"
        titleText="Welcome To Admin Panel"
        parent="Services"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <Link
                  href="/service/list"
                  className="btn btn-link text-dark float-right"
                >
                  <span>Back to the list</span>
                </Link>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <ServiceForm service={[]} serviceId="0"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
    ;
};

export default AddService;
