import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Link from "next/link";
import UserForm from "../../components/User/UserForm";

const AddUser = () => {
  return (
    <>
      <Breadcrumb
        title="Add user"
        titleText="Welcome To Admin Panel"
        parent="Manage Users"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <Link
                  href="/manage-users/list"
                  className="btn btn-link text-dark float-right"
                >
                  <span>Back to the list</span>
                </Link>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <UserForm user={[]} UserId="0" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddUser;
