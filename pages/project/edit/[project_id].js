import React, {useEffect, useState} from 'react'
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import ProjectForm from "../../../components/Project/ProjectForm";
import Link from "next/link";

const EditProject = () => {
  const router = useRouter();
  const [projectData, setProjectData] = useState([]);
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectId] = useState();
  useEffect(() => {
    setProjectId(router.query.project_id)
  }, [router.query.project_id]);
  useEffect(() => {
    if (!projectId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/project/view/${projectId}`).then(function (response) {
      if (response) {
        setProjectData(response.data?.data);
        setProjectTitle(response.data?.data?.project?.project_title_en)
      }
    });
  }, [projectId]);
  return (
    <>
      <Breadcrumb title='Edit Project' titleText='Welcome To Admin Panel' parent='Project Page'/>
      <Container fluid={true}>
        <Row>
          <Col lg='12'>
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Project details: <b className="text-primary">{projectTitle}</b>
                  <Link
                    href="/project/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  projectId &&
                  <ProjectForm projectData={projectData} projectId={projectId}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default EditProject