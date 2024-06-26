import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import PageForm from "../../../components/Page/PageForm";
import Link from "next/link";

const EditPage = () => {
  const router = useRouter();
  const [page, setPage] = useState([]);
  const [pageName, setPageName] = useState();
  const [pageId, setPageId] = useState();
  useEffect(() => {
    setPageId(router.query.page_id)
  }, [router.query.page_id]);
  useEffect(() => {
    if (!pageId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/page/view/${pageId}`).then(function (response) {
      if (response) {
        setPage(response.data?.data);
        setPageName(response.data?.data?.page_code)
      }
    });
  }, [pageId]);
  return (
    <>
      <Breadcrumb
        title="Edit Page"
        titleText="Welcome To Admin Panel"
        parent="Pages"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit Page: <b className="text-primary">{pageName}</b>
                  <Link
                    href="/page/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  pageId &&
                  <PageForm page={page} pageId={router.query.page_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPage;
