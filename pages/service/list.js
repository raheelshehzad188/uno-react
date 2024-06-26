import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const ServiceList = dynamic(
  () => import("../../components/Service/ServiceList"),
  {ssr: false}
);

const Services = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / Services' titleText='Services List' parent='Services'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/service/add"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Service
                </Link>
              </div>
              <div className="pt-0 card-body">
                <ServiceList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default Services;

