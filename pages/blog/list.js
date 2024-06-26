import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const BlogList = dynamic(
  () => import("../../components/Blog/BlogList"),
  {ssr: false}
);

const Blogs = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / Article' titleText='Article List' parent='Article'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/blog/add"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Article
                </Link>
              </div>
              <div className="pt-0 card-body">
                <BlogList/>
              </div>
            </div>
          </Col>
        </div>

      </Container>
    </>
  )
}

export default Blogs;

