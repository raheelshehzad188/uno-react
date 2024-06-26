import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import BlogCategoryForm from "../../../components/BlogCategory/BlogCategoryForm";
import Link from "next/link";

const EditPropertyType = () => {
  const router = useRouter();
  const [blogCategory, setBlogCategory] = useState([]);
  const [blogCategoryTitle, setBlogCategoryTitle] = useState();
  const [blogCategoryId, setBlogCategoryId] = useState();

  useEffect(() => {
    setBlogCategoryId(router.query.blog_category_id)
  }, [router.query.blog_category_id]);
  useEffect(() => {
    if (!blogCategoryId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/blog-category/view/${blogCategoryId}`).then(function (response) {
      if (response) {
        setBlogCategory(response.data?.data);
        setBlogCategoryTitle(response.data?.data?.blog_category_title_en)
      }
    });
  }, [blogCategoryId]);
  return (
    <>
      <Breadcrumb
        title="Edit Blog Category"
        titleText="Welcome To Admin Panel"
        parent="Blog Category"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>
                  Edit Blog Category:
                  <b className="text-primary">{blogCategoryTitle}</b>
                  <Link
                    href="/blog-category/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {
                  blogCategoryId &&
                  <BlogCategoryForm blogCategory={blogCategory} blog_category_id={router.query.blog_category_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPropertyType;
