import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const PropertyTypeList = dynamic(
  () => import("../../components/propertyType/propertyTypeList"),
  {ssr: false}
);

const PropertyType = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / Property Types' titleText='Property Types List' parent='Property Types'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/propertyTypes/add-property-type"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Property Type
                </Link>
              </div>
              <div className="pt-0 card-body">
                <PropertyTypeList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default PropertyType;

