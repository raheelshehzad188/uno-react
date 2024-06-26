import React from 'react'
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import PropertyTypeForm from "../../components/propertyType/PropertyTypeForm";
import Link from "next/link";

const AddPropertyType = (props) => {
  return (
    <>
      <Breadcrumb title='Add Property Type' titleText='Welcome To Admin Panel' parent='Property Type'/>
      <Container fluid={true}>
        <Row>

          <Col lg='12'>
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Add Property Type details
                  <Link
                    href="/propertyTypes/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <PropertyTypeForm propertyType={[]} property_type_id="0"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default AddPropertyType