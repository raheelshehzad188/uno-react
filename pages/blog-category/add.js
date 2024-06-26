import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import BlogCategoryForm from "../../components/BlogCategory/BlogCategoryForm";
import Link from "next/link";

const Add = () => {
    return (
        <>
            <Breadcrumb title='Add Blog Category' titleText='Welcome To Admin Panel' parent='Blog Category' />
            <Container fluid={true}>
                <Row>
                    <Col lg='12'>
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>
                                   Add Blog Category details
                                    <Link
                                      href="/blog-category/list"
                                      className="btn btn-link text-dark float-right"
                                    >
                                        <span>Back to the list</span>
                                    </Link>
                                </h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <BlogCategoryForm blogCategory={[]} blog_category_id="0"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Add