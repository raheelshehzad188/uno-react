import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import GalleryForm from "../../../components/Gallery/GalleryForm";

const AddGalleryImage = () => {
  const router = useRouter();
  const [segments, setSegments] = useState();
  const [moduleItemTitle, setModuleItemTitle] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [moduleType, setModuleType] = useState("");
  useEffect(() => {
    setSegments(router.query.segments)
  }, [router.query.segments]);
  useEffect(() => {
    if (!segments)
      return;
    setModuleType(segments[0])
    setModuleId(segments[1])
    setModuleItemTitle(segments[2])
  }, [segments]);
  return (
    <>
      <Breadcrumb
        title={`Dashboard / Gallery`}
        titleText={`Gallery Of ${moduleType}:  ${moduleItemTitle}`}
        parent={`${moduleType} gallery page`}
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Add Gallery Image</h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <GalleryForm
                  gallery={[]}
                  moduleItemTitle={moduleItemTitle}
                  moduleId={moduleId}
                  ImageId="0"
                  moduleType={moduleType}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddGalleryImage;
