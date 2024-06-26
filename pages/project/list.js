import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";
import ProjectsList from "../../components/Project/ProjectList";

const ProjectList = dynamic(
  () => import("../../components/Project/ProjectList"),
  {ssr: false}
);

const Projects = () => {
  return (
    <>
      <Breadcrumb
        title='Dashboard / Projects'
        titleText='Projects list'
        parent='Projects page'
      />
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/project/add-project"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Project
                </Link>
              </div>
              <div className="pt-0 card-body">
                <ProjectsList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default Projects

