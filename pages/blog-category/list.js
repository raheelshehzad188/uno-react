import React from 'react';
import {Col, Container} from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import dynamic from "next/dynamic";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";

const BlogCategoryList = dynamic(
  () => import("../../components/BlogCategory/BlogCategoryList"),
  {ssr: false}
);

const PropertyType = () => {
  return (
    <>
      <Breadcrumb title='Dashboard / Blog Category' titleText='Blog Category List' parent='Blog Category'/>
      <Container fluid={true}>
        <div className="row">
          <Col lg="12">
            <div className="card">
              <div className="card-header">
                <Link
                  href="/blog-category/add"
                  className="btn btn-gradient float-right"
                >
                  <FaPlus className="m-1 align-top"/> New Blog Category
                </Link>
              </div>
              <div className="pt-0 card-body">
                <BlogCategoryList/>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  )
}

export default PropertyType;

