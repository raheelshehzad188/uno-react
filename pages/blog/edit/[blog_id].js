import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import {useRouter} from "next/router";
import {fetchData} from "../../../components/api/fetchData";
import BlogForm from "../../../components/Blog/BlogForm";
import Link from "next/link";

const EditBlog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState([]);
  const [blogName, setBlogName] = useState();
  const [blogId, setBlogId] = useState();

  useEffect(() => {
    setBlogId(router.query.blog_id)
  }, [router.query.blog_id]);
  useEffect(() => {
    if (!blogId) {
      return;
    }
    fetchData(`${process.env.API_URL}dashboard/blogs/view/${blogId}`).then(function (response) {
      if (response) {
        setBlog(response.data?.data);
        setBlogName(response.data?.data?.blog_title_en)
      }
    });
  }, [blogId]);
  return (
    <>
      <Breadcrumb
        title="Edit Article"
        titleText="Welcome To Admin Panel"
        parent="Articles"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit Article:
                  <b className="text-primary">{blogName}</b>
                  <Link
                    href="/blog/list"
                    className="btn btn-link text-dark float-right"
                  >
                    <span>Back to the list</span>
                  </Link>
                </h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                {blogId &&
                  <BlogForm blog={blog} blogId={router.query.blog_id}/>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditBlog;
