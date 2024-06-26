import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const GalleryList = dynamic(
  () => import("../../components/Gallery/GalleryList"),
  { ssr: false }
);
const Gallery = () => {
  const router = useRouter();
  const [segments, setSegments] = useState([]);
  //   const [moduleItemTitle, setModuleItemTitle] = useState("project");
  //   const [moduleId, setModuleId] = useState("0");
  //   const [moduleType, setModuleType] = useState("project");
  useEffect(() => {
    setSegments(router.query.segments);
    // if (!segments) return;
    // setModuleType(segments[0]);
    // setModuleId(segments[1]);
    // setModuleItemTitle(segments[2]);
  }, [router.query.segments]);

  const [moduleType, moduleId, moduleItemTitle] = segments ?? [];

  return (
    <>
      <Breadcrumb
        title={`Dashboard / Gallery`}
        titleText={`Gallery Of ${moduleType}:  ${moduleItemTitle}`}
        parent={`${moduleType} gallery page`}
      />
      <Container fluid={true}>
        <Container fluid={true}>
          <Row>
            <Col lg="12">
              <div className="card">
                <div className="card-header">
                  <Link
                    className="float-right"
                    href={`/gallery/add/${moduleType}/${moduleId}/${moduleItemTitle}`}
                  >
                    <button className="btn btn-gradient">
                      <FaPlus className="m-1 align-top" />
                      Add New Image
                    </button>
                  </Link>
                </div>
                <div className="pt-0 card-body">
                  {moduleId && (
                    <GalleryList
                      moduleType={moduleType}
                      moduleId={moduleId}
                      moduleItemTitle={moduleItemTitle}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Gallery;
