import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import GalleryForm from "../../../components/Gallery/GalleryForm";

const EditGallery = () => {
  const router = useRouter();
  const [segments, setSegments] = useState();
  const [moduleItemTitle, setModuleItemTitle] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [ImageId, setImageId] = useState("");
  const [moduleType, setModuleType] = useState("");
  const [gallery, setGallery] = useState("");
  useEffect(() => {
    setSegments(router.query.segments)
  }, [router.query.segments]);
  useEffect(() => {
    if (!segments)
      return;
    setModuleType(segments[0])
    setModuleId(segments[1])
    setImageId(segments[2])
    setModuleItemTitle(segments[3])
  }, [segments]);
  useEffect(() => {
    if (!moduleId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/gallery/view/${moduleType}/${ImageId}`).then(function (response) {
      if (response) {
        setGallery(response.data?.data);
      }
    });
  }, [moduleId]);
  return (
    <>
      <Breadcrumb
        title={`Edit Gallery`}
        titleText={`Gallery Of ${moduleType}:  ${moduleItemTitle}`}
        parent={`${moduleType} gallery page`}
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
                  segments &&
                  <GalleryForm
                    gallery={gallery}
                    moduleItemTitle={moduleItemTitle}
                    moduleId={moduleId}
                    ImageId={ImageId}
                    moduleType={moduleType}
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
