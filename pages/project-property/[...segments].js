import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const ProjectPropertyList = dynamic(
  () => import("../../components/ProjectProperty/ProjectPropertyList"),
  { ssr: false }
);
const ProjectProperty = () => {
  const router = useRouter();
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectId] = useState();
  const [segments, setSegments] = useState();
  useEffect(() => {
    setSegments(router.query.segments);
  }, [router.query.segments]);
  useEffect(() => {
    if (!segments) return;
    setProjectTitle(segments[1]);
    setProjectId(segments[0]);
  }, [segments]);
  return (
    <>
      <Breadcrumb
        title={`Dashboard / Project Property`}
        titleText={`Project Property Of:  ${projectTitle}`}
        parent={`Project Property page`}
      />
      <Container fluid={true}>
        <Container fluid={true}>
          <Row>
            <Col lg="12">
              <div className="card">
                <div className="card-header">
                  <Link
                    className="float-right"
                    href={`/project-property/add/${projectId}/${projectTitle}`}
                  >
                    <button className="btn btn-gradient">
                      <FaPlus className="m-1 align-top" />
                      Add New Project Property
                    </button>
                  </Link>
                </div>
                <div className="pt-0 card-body">
                  {projectId && <ProjectPropertyList projectId={projectId} />}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ProjectProperty;
