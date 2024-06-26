import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Link from "next/link";
import DeveloperForm from "../../components/Developer/DeveloperForm";

const AddDeveloper = (props) => {
  return (
    <>
      <Breadcrumb
        title="Add Developer"
        titleText="Welcome To Admin Panel"
        parent="Developers"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <Link
                  href="/developer/list"
                  className="btn btn-link text-dark float-right"
                >
                  <span>Back to the list</span>
                </Link>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <DeveloperForm developer={[]} developer_id="0" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddDeveloper;
