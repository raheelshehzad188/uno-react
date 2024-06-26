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
import { Languages } from "../../data/Languages";
import TextEditor from "../Editor/TextEditor";
import { fetchData } from "../api/fetchData";

const BlogForm = ({ blog, blogId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [blogCategories, setBlogCategories] = useState([]);
  const [blogImage, setBlogImage] = useState();
  const defaultSelectOption = { id: "", name: "select an option" };
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setBlogImage(blog.blog_image);
  }, [blog.blog_image]);

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/lookup-list/blog-category`).then(
      function (response) {
        if (response) {
          setBlogCategories([defaultSelectOption, ...response.data?.data]);
        }
      }
    );
  }, []);

  function submitBlog(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.blog_id = blogId;
    axios
      .post(`${process.env.API_URL}dashboard/blogs/store`, values, {
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
            router.push("/blog/list");
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

  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      setActiveTab(0);
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        blog_category_id: blog?.blog_category_id,
        blog_publisher: blog?.blog_publisher,
        blog_title_en: blog?.blog_title_en,
        blog_title_ar: blog?.blog_title_ar,
        blog_title_fr: blog?.blog_title_fr,
        blog_title_de: blog?.blog_title_de,
        blog_title_ru: blog?.blog_title_ru,
        blog_title_se: blog?.blog_title_se,
        blog_path_en: blog?.blog_path_en,
        blog_path_ar: blog?.blog_path_ar,
        blog_path_fr: blog?.blog_path_fr,
        blog_path_de: blog?.blog_path_de,
        blog_path_ru: blog?.blog_path_ru,
        blog_path_se: blog?.blog_path_se,
        blog_meta_title_en: blog?.blog_meta_title_en,
        blog_meta_title_ar: blog?.blog_meta_title_ar,
        blog_meta_title_fr: blog?.blog_meta_title_fr,
        blog_meta_title_de: blog?.blog_meta_title_de,
        blog_meta_title_ru: blog?.blog_meta_title_ru,
        blog_meta_title_se: blog?.blog_meta_title_se,
        blog_image_alt_en: blog?.blog_image_alt_en,
        blog_image_alt_ar: blog?.blog_image_alt_ar,
        blog_image_alt_fr: blog?.blog_image_alt_fr,
        blog_image_alt_de: blog?.blog_image_alt_de,
        blog_image_alt_ru: blog?.blog_image_alt_ru,
        blog_image_alt_se: blog?.blog_image_alt_se,
        blog_image_title_en: blog?.blog_image_title_en,
        blog_image_title_ar: blog?.blog_image_title_ar,
        blog_image_title_fr: blog?.blog_image_title_fr,
        blog_image_title_de: blog?.blog_image_title_de,
        blog_image_title_ru: blog?.blog_image_title_ru,
        blog_image_title_se: blog?.blog_image_title_se,
        blog_meta_description_en: blog?.blog_meta_description_en,
        blog_meta_description_ar: blog?.blog_meta_description_ar,
        blog_meta_description_fr: blog?.blog_meta_description_fr,
        blog_meta_description_de: blog?.blog_meta_description_de,
        blog_meta_description_ru: blog?.blog_meta_description_ru,
        blog_meta_description_se: blog?.blog_meta_description_se,
        blog_body_en: blog?.blog_body_en,
        blog_body_ar: blog?.blog_body_ar,
        blog_body_fr: blog?.blog_body_fr,
        blog_body_de: blog?.blog_body_de,
        blog_body_ru: blog?.blog_body_ru,
        blog_body_se: blog?.blog_body_se,
        blog_meta_keywords_ar: blog?.blog_meta_keywords_ar,
        blog_meta_keywords_en: blog?.blog_meta_keywords_en,
        blog_meta_keywords_fr: blog?.blog_meta_keywords_fr,
        blog_meta_keywords_de: blog?.blog_meta_keywords_de,
        blog_meta_keywords_ru: blog?.blog_meta_keywords_ru,
        blog_meta_keywords_se: blog?.blog_meta_keywords_se,
        blog_short_description_ar: blog?.blog_short_description_ar,
        blog_short_description_en: blog?.blog_short_description_en,
        blog_short_description_fr: blog?.blog_short_description_fr,
        blog_short_description_de: blog?.blog_short_description_de,
        blog_short_description_ru: blog?.blog_short_description_ru,
        blog_short_description_se: blog?.blog_short_description_se,
        blog_date: blog?.blog_date,
        blog_is_active: blog?.blog_is_active,
        blog_sorting: blog?.blog_sorting,
      }}
      validationSchema={Yup.object().shape({
        blog_publisher: Yup.string()
          .required("Blog publisher en is required")
          .nullable(),
        blog_title_en: Yup.string()
          .required("Blog title en is required")
          .nullable(),
        blog_title_ar: Yup.string()
          .required("Blog title ar is required")
          .nullable(),
        blog_title_fr: Yup.string()
          .required("Blog title fr is required")
          .nullable(),
        blog_title_de: Yup.string()
          .required("Blog title de is required")
          .nullable(),
        blog_title_ru: Yup.string()
          .required("Blog title ru is required")
          .nullable(),
        blog_title_se: Yup.string()
          .required("Blog title se is required")
          .nullable(),
        blog_path_en: Yup.string()
          .required("Blog title en is required")
          .nullable(),
        blog_path_ar: Yup.string()
          .required("Blog title ar is required")
          .nullable(),
        blog_path_fr: Yup.string()
          .required("Blog title fr is required")
          .nullable(),
        blog_path_de: Yup.string()
          .required("Blog title de is required")
          .nullable(),
        blog_path_ru: Yup.string()
          .required("Blog title ru is required")
          .nullable(),
        blog_path_se: Yup.string()
          .required("Blog title se is required")
          .nullable(),
        blog_date: Yup.date().required("Blog date is required").nullable(),
        blog_category_id: Yup.date()
          .required("Blog Category is required")
          .nullable(),
        blog_is_active: Yup.string().required("Blog active status is required"),
        blog_sorting: Yup.string()
          .required("Blog sorting is required")
          .nullable(),
      })}
      onSubmit={(values) => {
        submitBlog(values);
      }}
      validateOnChange={true}
    >
      {({ props, form, setFieldValue, values, errors, touched }) => (
        <Form>
          {activeErrorTab(errors)}
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab> Blog Main Data </Tab>
              <Tab>Blog Image </Tab>
              <Tab id="BlogShortDescriptionTab">Blog Short Description</Tab>
              <Tab id="BlogBodyTab">Blog Body</Tab>
              <Tab id="BlogSeoDataTab">Blog SEO Data</Tab>
            </TabList>

            <TabPanel>
              <Row className="gx-3">
                <Col sm="3" className="form-group">
                  <Field
                    name="blog_category_id"
                    component={ReactstrapSelect}
                    inputprops={{ options: blogCategories }}
                    className={`form-control ${
                      errors.blog_category_id ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Blog Category"
                    label="Blog Category"
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="blog_is_active"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="Blog active"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="blog_date"
                    type="date"
                    component={ReactstrapInput}
                    className={`form-control ${
                      errors.blog_date ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Blog Date"
                    label="Blog Date"
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="blog_sorting"
                    type="number"
                    component={ReactstrapInput}
                    className={`form-control ${
                      errors.blog_date ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Blog Sorting"
                    label="Blog Sorting"
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="blog_publisher"
                    type="text"
                    component={ReactstrapInput}
                    className={`form-control ${
                      errors.blog_publisher ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Blog Publisher"
                    label="Blog Publisher"
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
                            "blog_title_" + lang,
                            values.blog_title_en
                          );
                          setFieldValue(
                            "blog_path_" + lang,
                            values.blog_path_en
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
                      name="blog_title_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Title En"
                      label="Blog Title En"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_path_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_path_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Slug En"
                      label="Blog Slug En"
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
                      name="blog_title_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Title Ar"
                      label="Blog Title Ar"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_path_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_path_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Slug Ar"
                      label="Blog Slug Ar"
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
                      name="blog_title_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Title Fr"
                      label="Blog Title Fr"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_path_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_path_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Slug Fr"
                      label="Blog Slug Fr"
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
                      name="blog_title_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Title De"
                      label="Blog Title De"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_path_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_path_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Slug De"
                      label="Blog Slug De"
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
                      name="blog_title_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Title Ru"
                      label="Blog Title Ru"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_path_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_path_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Slug Ru"
                      label="Blog Slug Ru"
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
                      name="blog_title_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Title Se"
                      label="Blog Title Se"
                    />
                  </Col>

                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_path_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_path_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Slug Se"
                      label="Blog Slug Se"
                    />
                  </Col>
                </Row>
              </fieldset>
            </TabPanel>
            <TabPanel active={true}>
              <Row className="gx-3">
                <Col sm="5" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">Blog Image</label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.blog_image && touched.blog_image
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="blog image"
                      onChange={(event) => {
                        setFieldValue("blog_image", event.target.files[0]);
                        setBlogImage(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={blogImage} width="70" height="70" />
                </div>
              </Row>
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "blog_image_alt_" + lang,
                            values.blog_image_alt_en
                          );
                          setFieldValue(
                            "blog_image_title_" + lang,
                            values.blog_image_title_en
                          );
                        }
                      });
                    }}
                    className="btn btn-sm btn-link text-primary float-right"
                  >
                    Apply To All Languages
                  </a>
                </legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_alt_en"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_alt_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Alt En"
                      label="Blog Image Alt En"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_title_en"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Title En"
                      label="Blog Image Title En"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_alt_ar"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_alt_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Alt Ar"
                      label="Blog Image Alt Ar"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_title_ar"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Title Ar"
                      label="Blog Image Title Ar"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>

                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_alt_fr"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_alt_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Alt Fr"
                      label="Blog Image Alt Fr"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_title_fr"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Title Fr"
                      label="Blog Image Title Fr"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_alt_de"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_alt_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Alt De"
                      label="Blog Image Alt De"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_title_de"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Title De"
                      label="Blog Image Title De"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_alt_ru"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_alt_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Alt Ru"
                      label="Blog Image Alt Ru"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_title_ru"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Title Ru"
                      label="Blog Image Title Ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_alt_se"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_alt_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Alt Se"
                      label="Blog Image Alt Se"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="blog_image_title_se"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_image_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Image Title Se"
                      label="Blog Image Title Se"
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
                            "blog_short_description_" + lang,
                            values.blog_short_description_en
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
                      name="blog_short_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_short_description_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Short Description En"
                      label="Blog Short Description En"
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
                      name="blog_short_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_short_description_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Short Description Ar"
                      label="Blog Short Description Ar"
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
                      name="blog_short_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_short_description_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Short Description Fr"
                      label="Blog Short Description Fr"
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
                      name="blog_short_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_short_description_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Short Description De"
                      label="Blog Short Description De"
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
                      name="blog_short_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_short_description_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Short Description Ru"
                      label="Blog Short Description Ru"
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
                      name="blog_short_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_short_description_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Short Description Se"
                      label="Blog Short Description Se"
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
                            "blog_body_" + lang,
                            values.blog_body_en
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
                    <TextEditor
                      name="blog_body_en"
                      initialValue={values.blog_body_en}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_body_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Body En"
                      label="Blog Body En"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <TextEditor
                      name="blog_body_ar"
                      initialValue={values.blog_body_ar}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_body_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Body Ar"
                      label="Blog Body Ar"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <TextEditor
                      name="blog_body_fr"
                      initialValue={values.blog_body_fr}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_body_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Body Fr"
                      label="Blog Body Fr"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <TextEditor
                      name="blog_body_de"
                      initialValue={values.blog_body_de}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_body_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Body De"
                      label="Blog Body De"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <TextEditor
                      name="blog_body_ru"
                      initialValue={values.blog_body_ru}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_body_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Body Ru"
                      label="Blog Body Ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="12" className="form-group">
                    <TextEditor
                      name="blog_body_se"
                      initialValue={values.blog_body_se}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_body_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Body Se"
                      label="Blog Body Se"
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
                            "blog_meta_title_" + lang,
                            values.blog_meta_title_en
                          );
                          setFieldValue(
                            "blog_meta_description_" + lang,
                            values.blog_meta_description_en
                          );
                          setFieldValue(
                            "blog_meta_keywords_" + lang,
                            values.blog_meta_keywords_en
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
                      name="blog_meta_title_en"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.blog_meta_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Title En"
                      label="Blog Meta Title En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_description_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Description En"
                      label="Blog Meta Description En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_keywords_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_keywords_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Keywords En"
                      label="Blog Meta Keywords En"
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
                      name="blog_meta_title_ar"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.blog_meta_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Title Ar"
                      label="Blog Meta Title Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_description_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Description Ar"
                      label="Blog Meta Description Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_keywords_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_keywords_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Keywords Ar"
                      label="Blog Meta Keywords Ar"
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
                      name="blog_meta_title_fr"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.blog_meta_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Title Fr"
                      label="Blog Meta Title Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_description_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Description Fr"
                      label="Blog Meta Description Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_keywords_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_keywords_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Keywords Fr"
                      label="Blog Meta Keywords Fr"
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
                      name="blog_meta_title_de"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.blog_meta_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Title De"
                      label="Blog Meta Title De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_description_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Description De"
                      label="Blog Meta Description De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_keywords_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_keywords_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Keywords De"
                      label="Blog Meta Keywords De"
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
                      name="blog_meta_title_ru"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.blog_meta_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Title Ru"
                      label="Blog Meta Title Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_description_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Description Ru"
                      label="Blog Meta Description Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_keywords_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_keywords_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Keywords Ru"
                      label="Blog Meta Keywords Ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_title_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Title Se"
                      label="Blog Meta Title Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_description_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Description Se"
                      label="Blog Meta Description Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="blog_meta_keywords_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.blog_meta_keywords_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Blog Meta Keywords Se"
                      label="Blog Meta Keywords Se"
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

export default BlogForm;
