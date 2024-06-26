import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import PropertyTypeForm from "../../../components/propertyType/PropertyTypeForm";
import ProjectPropertyForm from "../../../components/ProjectProperty/ProjectPropertyForm";

const AddProjectProperty = () => {
  const router = useRouter();
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectId] = useState();
  const [segments, setSegments] = useState();
  useEffect(() => {
    setSegments(router.query.segments)
  }, [router.query.segments]);

  useEffect(() => {
    if (!segments)
      return;
    setProjectTitle(segments[1])
    setProjectId(segments[0])
  }, [segments]);
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
                <h5>Add Gallery Image</h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  projectId &&
                  <ProjectPropertyForm
                    projectProperty={[]}
                    projectTitle={projectTitle}
                    projectId={projectId}
                    projectPropertyId="0"
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

export default AddProjectProperty;
