import React from 'react';
import {Col, Container, Row} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";

const RegisterInterestList = dynamic(
    () => import("../../components/RegisterInterest/RegisterInterestList"),
    {ssr: false}
);

const RegisterInterest = () => {
    return (
        <>
            <Breadcrumb
                title='ALl Register Interest'
                titleText='Welcome To Admin Panel'
                parent='Register Interest'
            />

            <Container fluid={true}>
                <Row>
                    <Col lg="12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Register Interest List</h5>
                            </div>
                            <div className="pt-0 card-body">
                                <RegisterInterestList/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RegisterInterest

