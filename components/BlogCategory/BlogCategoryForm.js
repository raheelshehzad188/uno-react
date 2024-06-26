import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Col, Row, Spinner } from "reactstrap";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../utils/ReactStarpInputsValidation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import parse from "html-react-parser";
import { Languages } from "../../data/Languages";

const BlogCategoryForm = (props) => {
  const router = useRouter();
  const BlogCategoryInfo = props.blogCategory;
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [BlogCategoryId, setBlogCategoryId] = useState();
  useEffect(() => {
    setBlogCategoryId(BlogCategoryInfo?.blog_category_id);
    console.log(BlogCategoryInfo);
  }, [BlogCategoryInfo]);

  function submitBlogCategory(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.blog_category_id = BlogCategoryId;
    axios
      .post(`${process.env.API_URL}dashboard/blog-category/store`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("UNO_TOKEN"),
        },
        responseType: "json",
      })
      .then((response) => {
        if (response) {
          if (response.data.success) {
            toast.success("Data Saved Successfully");
            router.push("/blog-category/list");
          } else {
            setSubmitDisabled(false);
            setSubmitBtnText("Submit");
            let requestError = "";
            response.data.errors.map((error, i) => {
              requestError +=
                '<span class="text-danger">' + error + "</span><br>";
            });
            Swal.fire({
              icon: "error",
              html: requestError,
            });
          }
        }
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
        if (error.response.status === 401) {
          localStorage.removeItem("UNO_TOKEN");
          router.push("/authentication/login");
        }
      });
  }

  const [activeTab, setActiveTab] = useState(0);
  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      setActiveTab(0);
    }
  }
  return (
    <Formik
      enableReinitialize
      initialValues={{
        blog_category_icon: BlogCategoryInfo?.blog_category_icon,
        blog_category_title_en: BlogCategoryInfo?.blog_category_title_en,
        blog_category_title_ar: BlogCategoryInfo?.blog_category_title_ar,
        blog_category_title_fr: BlogCategoryInfo?.blog_category_title_fr,
        blog_category_title_de: BlogCategoryInfo?.blog_category_title_de,
        blog_category_title_ru: BlogCategoryInfo?.blog_category_title_ru,
        blog_category_title_se: BlogCategoryInfo?.blog_category_title_se,
        blog_category_slug_en: BlogCategoryInfo?.blog_category_slug_en,
        blog_category_slug_ar: BlogCategoryInfo?.blog_category_slug_ar,
        blog_category_slug_fr: BlogCategoryInfo?.blog_category_slug_fr,
        blog_category_slug_de: BlogCategoryInfo?.blog_category_slug_de,
        blog_category_slug_ru: BlogCategoryInfo?.blog_category_slug_ru,
        blog_category_slug_se: BlogCategoryInfo?.blog_category_slug_se,
        blog_category_short_description_en:
          BlogCategoryInfo?.blog_category_short_description_en,
        blog_category_short_description_ar:
          BlogCategoryInfo?.blog_category_short_description_ar,
        blog_category_short_description_fr:
          BlogCategoryInfo?.blog_category_short_description_fr,
        blog_category_short_description_de:
          BlogCategoryInfo?.blog_category_short_description_de,
        blog_category_short_description_ru:
          BlogCategoryInfo?.blog_category_short_description_ru,
        blog_category_short_description_se:
          BlogCategoryInfo?.blog_category_short_description_se,
        blog_category_is_active: BlogCategoryInfo?.blog_category_is_active,
        blog_category_sorting: BlogCategoryInfo?.blog_category_sorting,
        blog_category_meta_title_en:
          BlogCategoryInfo?.blog_category_meta_title_en,
        blog_category_meta_title_ar:
          BlogCategoryInfo?.blog_category_meta_title_ar,
        blog_category_meta_title_fr:
          BlogCategoryInfo?.blog_category_meta_title_fr,
        blog_category_meta_title_de:
          BlogCategoryInfo?.blog_category_meta_title_de,
        blog_category_meta_title_ru:
          BlogCategoryInfo?.blog_category_meta_title_ru,
        blog_category_meta_title_se:
          BlogCategoryInfo?.blog_category_meta_title_se,
        blog_category_meta_keywords_en:
          BlogCategoryInfo?.blog_category_meta_keywords_en,
        blog_category_meta_keywords_ar:
          BlogCategoryInfo?.blog_category_meta_keywords_ar,
        blog_category_meta_keywords_fr:
          BlogCategoryInfo?.blog_category_meta_keywords_fr,
        blog_category_meta_keywords_de:
          BlogCategoryInfo?.blog_category_meta_keywords_de,
        blog_category_meta_keywords_ru:
          BlogCategoryInfo?.blog_category_meta_keywords_ru,
        blog_category_meta_keywords_se:
          BlogCategoryInfo?.blog_category_meta_keywords_se,
        blog_category_meta_description_en:
          BlogCategoryInfo?.blog_category_meta_description_en,
        blog_category_meta_description_ar:
          BlogCategoryInfo?.blog_category_meta_description_ar,
        blog_category_meta_description_fr:
          BlogCategoryInfo?.blog_category_meta_description_fr,
        blog_category_meta_description_de:
          BlogCategoryInfo?.blog_category_meta_description_de,
        blog_category_meta_description_ru:
          BlogCategoryInfo?.blog_category_meta_description_ru,
        blog_category_meta_description_se:
          BlogCategoryInfo?.blog_category_meta_description_se,
      }}
      validationSchema={Yup.object().shape({
        blog_category_title_en: Yup.string()
          .required("Blog Category title en is required")
          .nullable(),
        blog_category_title_ar: Yup.string()
          .required("Blog Category title ar is required")
          .nullable(),
        blog_category_title_fr: Yup.string()
          .required("Blog Category title fr is required")
          .nullable(),
        blog_category_title_de: Yup.string()
          .required("Blog Category title de is required")
          .nullable(),
        blog_category_title_ru: Yup.string()
          .required("Blog Category title ru is required")
          .nullable(),
        blog_category_title_se: Yup.string()
          .required("Blog Category title se is required")
          .nullable(),
        blog_category_slug_en: Yup.string()
          .required("Blog Category title en is required")
          .nullable(),
        blog_category_slug_ar: Yup.string()
          .required("Blog Category title ar is required")
          .nullable(),
        blog_category_slug_fr: Yup.string()
          .required("Blog Category title fr is required")
          .nullable(),
        blog_category_slug_de: Yup.string()
          .required("Blog Category title de is required")
          .nullable(),
        blog_category_slug_ru: Yup.string()
          .required("Blog Category title ru is required")
          .nullable(),
        blog_category_slug_se: Yup.string()
          .required("Blog Category title se is required")
          .nullable(),
        blog_category_is_active: Yup.string()
          .required("Blog Category active status is required")
          .nullable(),
        blog_category_sorting: Yup.string()
          .required("Blog Category sorting is required")
          .nullable(),
      })}
      onSubmit={(values) => {
        submitBlogCategory(values);
      }}
      validateOnChange={true}
    >
      {({ props, form, setFieldValue, values, errors }) => (
        <Form>
          {activeErrorTab(errors)}
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab>Main Data</Tab>
              <Tab>Blog Category Description </Tab>
              <Tab>SEO Data</Tab>
            </TabList>

            <TabPanel>
              <Row className="gx-3">
                <Col sm="3" className="form-group">
                  <Field
                    name="blog_category_is_active"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="Blog Category active"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="blog_category_sorting"
                    type="number"
                    component={ReactstrapInput}
                    className="form-control"
                    label="Blog Category sorting"
                  />
                </Col>
              </Row>
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "blog_category_title_" + lang,
                            values.blog_category_title_en
                          );
                          setFieldValue(
                            "blog_category_slug_" + lang,
                            values.blog_category_slug_en
                          );
                          setFieldValue(
                            "blog_category_menu_title_" + lang,
                            values.blog_category_menu_title_en
                          );
                        }
                      });
                    }}
                    className="btn btn-sm btn-link text-primary float-right"
                  >
                    Apply To All Languages
                  </a>
                </legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_title_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Title En"
                      label="Blog Category Title En"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_slug_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_slug_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Slug En"
                      label="Blog Category Slug En"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_title_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Title Ar"
                      label="Blog Category Title Ar"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_slug_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_slug_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Slug Ar"
                      label="Blog Category Slug Ar"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_title_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Title Fr"
                      label="Blog Category Title Fr"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_slug_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_slug_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Slug Fr"
                      label="Blog Category Slug Fr"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_title_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Title De"
                      label="Blog Category Title De"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_slug_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_slug_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Slug De"
                      label="Blog Category Slug De"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_title_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Title Ru"
                      label="Blog Category Title Ru"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_slug_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_slug_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Slug Ru"
                      label="Blog Category Slug Ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_title_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Title Se"
                      label="Blog Category Title Se"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_category_slug_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_slug_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Slug Se"
                      label="Blog Category Slug Se"
                    />
                  </Col>
                </Row>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "blog_category_short_description_" + lang,
                            values.blog_category_short_description_en
                          );
                          setFieldValue(
                            "blog_category_description_" + lang,
                            values.blog_category_description_en
                          );
                        }
                      });
                    }}
                    className="btn btn-sm btn-link text-primary float-right"
                  >
                    Apply To All Languages
                  </a>
                </legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <Field
                      name="blog_category_short_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_short_description_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Short Description En"
                      label="Blog Category Short Description En"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <Field
                      name="blog_category_short_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_short_description_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Short Description Ar"
                      label="Blog Category Short Description Ar"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <Field
                      name="blog_category_short_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_short_description_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Short Description Fr"
                      label="Blog Category Short Description Fr"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <Field
                      name="blog_category_short_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_short_description_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Short Description De"
                      label="Blog Category Short Description De"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <Field
                      name="blog_category_short_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_short_description_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Short Description Ru"
                      label="Blog Category Short Description Ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <Field
                      name="blog_category_short_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_short_description_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Short Description Se"
                      label="Blog Category Short Description Se"
                    />
                  </Col>
                </Row>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "blog_category_meta_title_" + lang,
                            values.blog_category_meta_title_en
                          );
                          setFieldValue(
                            "blog_category_meta_keywords_" + lang,
                            values.blog_category_meta_keywords_en
                          );
                          setFieldValue(
                            "blog_category_meta_description_" + lang,
                            values.blog_category_meta_description_en
                          );
                        }
                      });
                    }}
                    className="btn btn-sm btn-link text-primary float-right"
                  >
                    Apply To All Languages
                  </a>
                </legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_title_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta Title En"
                      label="Blog Category Meta Title En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_keywords_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_keywords_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta keywords En"
                      label="Blog Category Meta keywords En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_description_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Meta Description En"
                      label="Blog Category Meta Description En"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_title_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta Title Ar"
                      label="Blog Category Meta Title Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_keywords_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_keywords_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta keywords Ar"
                      label="Blog Category Meta keywords Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_description_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Meta Description Ar"
                      label="Blog Category Meta Description Ar"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_title_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta Title Fr"
                      label="Blog Category Meta Title Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_keywords_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_keywords_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta keywords Fr"
                      label="Blog Category Meta keywords Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_description_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Meta Description Fr"
                      label="Blog Category Meta Description Fr"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_title_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta Title De"
                      label="Blog Category Meta Title De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_keywords_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_keywords_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta keywords De"
                      label="Blog Category Meta keywords De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_description_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Meta Description De"
                      label="Blog Category Meta Description De"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_title_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta Title Ru"
                      label="Blog Category Meta Title Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_keywords_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_keywords_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta keywords Ru"
                      label="Blog Category Meta keywords Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_description_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Meta Description Ru"
                      label="Blog Category Meta Description Ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_title_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta Title Se"
                      label="Blog Category Meta Title Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_keywords_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_keywords_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Category Meta keywords Se"
                      label="Blog Category Meta keywords Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_category_meta_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_category_meta_description_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Blog Category Meta Description Se"
                      label="Blog Category Meta Description Se"
                    />
                  </Col>
                </Row>
              </fieldset>
            </TabPanel>
          </Tabs>
          <div className="dropzone-admin mb-0 float-right me-4">
            <Col sm="12" className="form-btn">
              <Button
                type="submit"
                className="btn btn-gradient btn-pill"
                disabled={submitDisabled}
              >
                {submitBtnText}
                <span style={{ display: submitDisabled ? "" : "none" }}>
                  <Spinner size="sm">Loading...</Spinner>
                  <span> Loading...</span>
                </span>
              </Button>
            </Col>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BlogCategoryForm;
