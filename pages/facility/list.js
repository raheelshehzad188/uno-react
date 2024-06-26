import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const FacilityList = dynamic(
    () => import("../../components/Facility/FacilityList"),
    {ssr: false}
);

const Facility = () => {
    return (
        <>
            <Breadcrumb title='Dashboard / Facilities' titleText='Facility List' parent='Facility Page'/>
            <Container fluid={true}>
              <div className="row">
                <Col lg="12">
                  <div className="card">
                    <div className="card-header">
                      <Link
                        href="/facility/add"
                        className="btn btn-gradient float-right"
                      >
                        <FaPlus className="m-1 align-top"/> New Facility
                      </Link>
                    </div>
                    <div className="pt-0 card-body">
                      <FacilityList/>
                    </div>
                  </div>
                </Col>
              </div>
            </Container>
        </>
    )
}

export default Facility;

