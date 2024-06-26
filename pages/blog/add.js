import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import BlogForm from "../../components/Blog/BlogForm";
import Link from "next/link";

const AddBlog = () => {
    return (
        <>
            <Breadcrumb
                title="Add Article"
                titleText="Welcome To Admin Panel"
                parent="Articles"
            />
            <Container fluid={true}>
                <Row>
                    <Col lg="12">
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Add Article
                                  <Link
                                    href="/blog/list"
                                    className="btn btn-link text-dark float-right"
                                  >
                                    <span>Back to the list</span>
                                  </Link>
                                </h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <BlogForm blog={[]} blogId="0"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddBlog;
