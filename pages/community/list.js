import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const CommunityList = dynamic(
  () => import("../../components/Community/CommunityList"),
  {ssr: false}
);

const RegisterInterest = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / Community' titleText='community list' parent='community page'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/community/add-community"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Community
                </Link>
              </div>
              <div className="pt-0 card-body">
                <CommunityList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default RegisterInterest
