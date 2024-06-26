import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const BuyStepList = dynamic(
  () => import("../../components/BuySteps/BuyStepList"),
  {ssr: false}
);

const BuySteps = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / FAQs' titleText='FAQs List' parent='FAQs page'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/buy-steps/add"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New FAQs
                </Link>
              </div>
              <div className="pt-0 card-body">
                <BuyStepList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default BuySteps

