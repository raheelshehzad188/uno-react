import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import JobForm from "../../../components/Job/JobForm";
import Link from "next/link";

const EditJob = () => {
  const router = useRouter();
  const [job, setJob] = useState([]);
  const [jobName, setJobName] = useState();
  const [jobId, setJobId] = useState();
  useEffect(() => {
    setJobId(router.query.job_id)
  }, [router.query.job_id])
  useEffect(() => {
    if (!jobId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/job/view/${jobId}`).then(function (response) {
      if (response) {
        setJob(response.data?.data);
        setJobName(response.data?.data?.job_title_en)
      }
    });
  }, [jobId]);
  return (
    <>
      <Breadcrumb
        title="Edit Job"
        titleText="Welcome To Admin Panel"
        parent="Jobs"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>
                  Edit Job:
                  <b className="text-primary">{jobName}</b>
                  <Link
                    href="/job/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  jobId &&
                  <JobForm job={job} jobId={router.query.job_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditJob;
