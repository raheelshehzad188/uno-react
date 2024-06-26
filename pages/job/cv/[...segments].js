import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

const JobCvList = dynamic(
  () => import("../../../components/Job/JobCvList"),
  {ssr: false}
);
const JobCV = () => {
  const router = useRouter();
  const segments = router.query.segments;
  const [jobId, setJobId] = useState(0);
  const [jobTitle, setJobTitle] = useState();
  useEffect(() => {
    if (!segments)
      return;
    setJobId(segments[0])
    setJobTitle(segments[1])
  }, [segments]);
  return (
    <>
      <Breadcrumb
        title={`Job Applied CV For: ${jobTitle}`}
        parent={`Job Applied CV page`}
      />
      <Container fluid={true}>
        <Container fluid={true}>
          <Row>
            <Col lg="12">
              <div className="card">
                <div className="card-header">
                  <h5>
                    {jobTitle} CV List.
                    <Link
                      href="/job/list"
                      className="btn btn-link text-dark float-right"
                    >
                      <span>Back to the list</span>
                    </Link>
                  </h5>
                </div>
                <div className="pt-0 card-body">
                  <JobCvList
                    jobId={jobId}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default JobCV;
