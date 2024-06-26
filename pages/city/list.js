import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const CityList = dynamic(
  () => import("../../components/City/CityList"),
  {ssr: false}
);

const Cities = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / Areas' titleText='Areas List' parent='Areas Page'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/city/add"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Area
                </Link>
              </div>
              <div className="pt-0 card-body">
                <CityList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default Cities

