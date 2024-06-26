import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import FacilityForm from "../../components/Facility/FacilityForm";
import Link from "next/link";

const AddFacility = () => {
    return (
        <>
            <Breadcrumb
                title="Add Facility"
                titleText="Welcome To Admin Panel"
                parent="Cities"
            />
            <Container fluid={true}>
                <Row>
                    <Col lg="12">
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Add Facility
                                  <Link
                                    href="/facility/list"
                                    className="btn btn-link text-dark float-right"
                                  >
                                    <span>Back to the list</span>
                                  </Link>
                                </h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <FacilityForm facility={[]} facilityId="0"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddFacility;
