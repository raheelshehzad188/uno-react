import React from 'react'
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import CommunityForm from "../../components/Community/CommunityForm";
import Link from "next/link";

const AddCommunity = (props) => {
  return (
    <>
      <Breadcrumb title='Add Community' titleText='Welcome To Admin Panel' parent='Communities'/>
      <Container fluid={true}>
        <Row>
          <Col lg='12'>
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Add Community details
                  <Link
                    href="/community/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <CommunityForm community={[]} community_id="0"/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default AddCommunity