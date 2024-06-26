import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import GalleryForm from "../../../components/Gallery/GalleryForm";
import ProjectPropertyForm from "../../../components/ProjectProperty/ProjectPropertyForm";

const EditGallery = () => {
  const router = useRouter();
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectId] = useState();
  const [projectPropertyId, setProjectPropertyId] = useState();
  const [projectProperty, setProjectProperty] = useState([]);
  const [segments, setSegments] = useState();
  useEffect(() => {
    setSegments(router.query.segments)
  }, [router.query.segments]);
  useEffect(() => {
    if (!segments)
      return;
    setProjectPropertyId(segments[0])
    setProjectId(segments[1])
    setProjectTitle(segments[2])
  }, [segments]);
  useEffect(() => {
    if (!projectPropertyId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/project-property/view/${projectPropertyId}`).then(function (response) {
      if (response) {
        setProjectProperty(response.data?.data);
      }
    });
  }, [projectPropertyId]);
  return (
    <>
      <Breadcrumb
        title={`Dashboard / Project Property`}
        titleText={`Project Property Of:  ${projectTitle}`}
        parent={`Project Property page`}
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit Gallery Image</h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  projectId &&
                  <ProjectPropertyForm
                    projectProperty={projectProperty}
                    projectTitle={projectTitle}
                    projectId={projectId}
                    projectPropertyId={projectPropertyId}
                  />
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditGallery;
