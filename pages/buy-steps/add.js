import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import BuyStepForm from "../../components/BuySteps/BuyStepForm";
import Link from "next/link";

const AddBuyStepData = () => {
  return (
    <>
      <Breadcrumb
        title="Add FAQs"
        titleText="Welcome To Admin Panel"
        parent="FAQs"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Add FAQs
                  <Link
                    href="/buy-steps/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <BuyStepForm buyStep={[]} buyStepId="0"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddBuyStepData;
