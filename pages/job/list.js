import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const JobList = dynamic(
  () => import("../../components/Job/JobList"),
  {ssr: false}
);

const Jobs = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / Jobs' titleText='Jobs List' parent='Jobs'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/job/add"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Job
                </Link>
              </div>
              <div className="pt-0 card-body">
                <JobList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default Jobs;

