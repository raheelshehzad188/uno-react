import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import CityForm from "../../components/City/CityForm";
import Link from "next/link";

const AddCity = () => {
    return (
        <>
            <Breadcrumb
                title="Add Area"
                titleText="Welcome To Admin Panel"
                parent="Area"
            />
            <Container fluid={true}>
                <Row>
                    <Col lg="12">
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Add Area
                                  <Link
                                    href="/city/list"
                                    className="btn btn-link text-dark float-right"
                                  >
                                    <span>Back to the list</span>
                                  </Link>
                                </h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <CityForm city={[]} seo={[]} cityId="0"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddCity;
