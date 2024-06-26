import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
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

const PageForm = ({ page, pageId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [pageImage, setPageImage] = useState();
  const [page_footer_image, set_page_footer_image] = useState();
  useEffect(() => {
    setPageImage(page.page_image);
  }, [page.page_image]);
  useEffect(() => {
    set_page_footer_image(page.page_footer_image);
  }, [page.page_footer_image]);

  function submitPage(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.page_id = pageId;
    axios
      .post(`${process.env.API_URL}dashboard/page/store`, values, {
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
            router.push("/page/list");
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
  const mainDataTabFields = [
    "page_title_en",
    "page_title_ar",
    "page_title_fr",
    "page_title_de",
    "page_title_ru",
    "page_title_se",
  ];
  const shortSoeTabFields = [
    "page_meta_title_en",
    "page_meta_title_ar",
    "page_meta_title_fr",
    "page_meta_title_de",
    "page_meta_title_ru",
    "page_meta_title_se",
  ];

  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      let activeErrorTab = null;
      Object.keys(errors).map(function (field) {
        if (mainDataTabFields.includes(field)) {
          activeErrorTab = 0;
        }
        if (shortSoeTabFields.includes(field) && activeErrorTab === null) {
          activeErrorTab = 4;
        }
      });
      setActiveTab(activeErrorTab);
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        page_title_en: page?.page_title_en,
        page_title_ar: page?.page_title_ar,
        page_title_fr: page?.page_title_fr,
        page_title_de: page?.page_title_de,
        page_title_ru: page?.page_title_ru,
        page_title_se: page?.page_title_se,
        page_path_en: page?.page_path_en,
        page_path_ar: page?.page_path_ar,
        page_path_fr: page?.page_path_fr,
        page_path_de: page?.page_path_de,
        page_path_ru: page?.page_path_ru,
        page_path_se: page?.page_path_se,
        page_meta_title_en: page?.page_meta_title_en,
        page_meta_title_ar: page?.page_meta_title_ar,
        page_meta_title_fr: page?.page_meta_title_fr,
        page_meta_title_de: page?.page_meta_title_de,
        page_meta_title_ru: page?.page_meta_title_ru,
        page_meta_title_se: page?.page_meta_title_se,
        page_image_alt_en: page?.page_image_alt_en,
        page_image_alt_ar: page?.page_image_alt_ar,
        page_image_alt_fr: page?.page_image_alt_fr,
        page_image_alt_de: page?.page_image_alt_de,
        page_image_alt_ru: page?.page_image_alt_ru,
        page_image_alt_se: page?.page_image_alt_se,
        page_image_title_en: page?.page_image_title_en,
        page_image_title_ar: page?.page_image_title_ar,
        page_image_title_fr: page?.page_image_title_fr,
        page_image_title_de: page?.page_image_title_de,
        page_image_title_ru: page?.page_image_title_ru,
        page_image_title_se: page?.page_image_title_se,
        page_meta_keywords_en: page?.page_meta_keywords_en,
        page_meta_keywords_ar: page?.page_meta_keywords_ar,
        page_meta_keywords_fr: page?.page_meta_keywords_fr,
        page_meta_keywords_de: page?.page_meta_keywords_de,
        page_meta_keywords_ru: page?.page_meta_keywords_ru,
        page_meta_keywords_se: page?.page_meta_keywords_se,
        page_meta_description_en: page?.page_meta_description_en,
        page_meta_description_ar: page?.page_meta_description_ar,
        page_meta_description_fr: page?.page_meta_description_fr,
        page_meta_description_de: page?.page_meta_description_de,
        page_meta_description_ru: page?.page_meta_description_ru,
        page_meta_description_se: page?.page_meta_description_se,
        page_body_en: page?.page_body_en,
        page_body_ar: page?.page_body_ar,
        page_body_fr: page?.page_body_fr,
        page_body_de: page?.page_body_de,
        page_body_ru: page?.page_body_ru,
        page_body_se: page?.page_body_se,
        page_short_description_ar: page?.page_short_description_ar,
        page_short_description_en: page?.page_short_description_en,
        page_short_description_fr: page?.page_short_description_fr,
        page_short_description_de: page?.page_short_description_de,
        page_short_description_ru: page?.page_short_description_ru,
        page_short_description_se: page?.page_short_description_se,
      }}
      validationSchema={Yup.object().shape({
        page_title_en: Yup.string()
          .required("Page title en is required")
          .nullable(),
        page_title_ar: Yup.string()
          .required("Page title ar is required")
          .nullable(),
        page_title_fr: Yup.string()
          .required("Page title fr is required")
          .nullable(),
        page_title_de: Yup.string()
          .required("Page title de is required")
          .nullable(),
        page_title_ru: Yup.string()
          .required("Page title ru is required")
          .nullable(),
        page_title_se: Yup.string()
          .required("Page title se is required")
          .nullable(),
        page_meta_title_en: Yup.string()
          .required("Page title en is required")
          .nullable(),
        page_meta_title_ar: Yup.string()
          .required("Page title ar is required")
          .nullable(),
        page_meta_title_fr: Yup.string()
          .required("Page title fr is required")
          .nullable(),
        page_meta_title_de: Yup.string()
          .required("Page title de is required")
          .nullable(),
        page_meta_title_ru: Yup.string()
          .required("Page title ru is required")
          .nullable(),
        page_meta_title_se: Yup.string()
          .required("Page title se is required")
          .nullable(),
        page_path_en: Yup.string()
          .required("Page title en is required")
          .nullable(),
        page_path_ar: Yup.string()
          .required("Page title ar is required")
          .nullable(),
        page_path_fr: Yup.string()
          .required("Page title fr is required")
          .nullable(),
        page_path_de: Yup.string()
          .required("Page title de is required")
          .nullable(),
        page_path_ru: Yup.string()
          .required("Page title ru is required")
          .nullable(),
        page_path_se: Yup.string()
          .required("Page title se is required")
          .nullable(),
      })}
      onSubmit={(values) => {
        submitPage(values);
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
              <Tab>Page Main Data</Tab>
              <Tab>Page Image</Tab>
              <Tab>Page Short Description</Tab>
              <Tab>Page Body</Tab>
              <Tab>Page SEO Data</Tab>
            </TabList>

            <TabPanel>
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang !== "en") {
                          setFieldValue(
                            "page_title_" + lang,
                            values.page_title_en
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
                      name="page_title_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Title En"
                      label="Page Title En"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_path_en"
                      disabled
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_path_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Slug En"
                      label="Page Slug En"
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
                      name="page_title_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Title Ar"
                      label="Page Title Ar"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_path_ar"
                      disabled
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_path_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Slug Ar"
                      label="Page Slug Ar"
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
                      name="page_title_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Title Fr"
                      label="Page Title Fr"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_path_fr"
                      disabled
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_path_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Slug Fr"
                      label="Page Slug Fr"
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
                      name="page_title_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Title De"
                      label="Page Title De"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_path_de"
                      disabled
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_path_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Slug De"
                      label="Page Slug De"
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
                      name="page_title_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Title Ru"
                      label="Page Title Ru"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_path_ru"
                      disabled
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_path_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Slug Ru"
                      label="Page Slug Ru"
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
                      name="page_title_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Title Se"
                      label="Page Title Se"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_path_se"
                      disabled
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_path_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Slug Se"
                      label="Page Slug Se"
                    />
                  </Col>
                </Row>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <Row className="gx-3">
                <Col sm="4" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">Page Image</label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.page_image && touched.page_image
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="page image"
                      onChange={(event) => {
                        setFieldValue("page_image", event.target.files[0]);
                        setPageImage(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={pageImage} width="70" height="70" />
                </div>

                <Col sm="4" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">Page Footer Image</label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.page_footer_image && touched.page_footer_image
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="page footer image"
                      onChange={(event) => {
                        setFieldValue("page_footer_image", event.target.files[0]);
                        set_page_footer_image(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={page_footer_image} width="70" height="70" />
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
                            "page_image_alt_" + lang,
                            values.page_image_alt_en
                          );
                          setFieldValue(
                            "page_image_title_" + lang,
                            values.page_image_title_en
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
                      name="page_image_alt_en"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_alt_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Alt En"
                      label="Page Image Alt En"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_image_title_en"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Title En"
                      label="Page Image Title En"
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
                      name="page_image_alt_ar"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_alt_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Alt Ar"
                      label="Page Image Alt Ar"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_image_title_ar"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Title Ar"
                      label="Page Image Title Ar"
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
                      name="page_image_alt_fr"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_alt_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Alt Fr"
                      label="Page Image Alt Fr"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_image_title_fr"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Title Fr"
                      label="Page Image Title Fr"
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
                      name="page_image_alt_de"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_alt_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Alt De"
                      label="Page Image Alt De"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_image_title_de"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Title De"
                      label="Page Image Title De"
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
                      name="page_image_alt_ru"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_alt_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Alt Ru"
                      label="Page Image Alt Ru"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_image_title_ru"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Title Ru"
                      label="Page Image Title Ru"
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
                      name="page_image_alt_se"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_alt_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Alt Se"
                      label="Page Image Alt Se"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="page_image_title_se"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_image_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Image Title Se"
                      label="Page Image Title Se"
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
                            "page_short_description_" + lang,
                            values.page_short_description_en
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
                      name="page_short_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_short_description_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Short Description En"
                      label="Page Short Description En"
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
                      name="page_short_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_short_description_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Short Description Ar"
                      label="Page Short Description Ar"
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
                      name="page_short_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_short_description_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Short Description Fr"
                      label="Page Short Description Fr"
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
                      name="page_short_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_short_description_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Short Description De"
                      label="Page Short Description De"
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
                      name="page_short_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_short_description_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Short Description Ru"
                      label="Page Short Description Ru"
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
                      name="page_short_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_short_description_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Short Description Se"
                      label="Page Short Description Se"
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
                            "page_body_" + lang,
                            values.page_body_en
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
                      name="page_body_en"
                      initialValue={values.page_body_en}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_body_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Body En"
                      label="Page Body En"
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
                      name="page_body_ar"
                      initialValue={values.page_body_ar}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_body_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Body Ar"
                      label="Page Body Ar"
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
                      name="page_body_fr"
                      initialValue={values.page_body_fr}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_body_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Body Fr"
                      label="Page Body Fr"
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
                      name="page_body_de"
                      initialValue={values.page_body_de}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_body_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Body De"
                      label="Page Body De"
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
                      name="page_body_ru"
                      initialValue={values.page_body_ru}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_body_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Body Ru"
                      label="Page Body Ru"
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
                      name="page_body_se"
                      initialValue={values.page_body_se}
                      setFieldValue={setFieldValue}
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_body_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Body Se"
                      label="Page Body Se"
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
                            "page_meta_title_" + lang,
                            values.page_meta_title_en
                          );
                          setFieldValue(
                            "page_meta_keywords_" + lang,
                            values.page_meta_keywords_en
                          );
                          setFieldValue(
                            "page_meta_description_" + lang,
                            values.page_meta_description_en
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
                      name="page_meta_title_en"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Title En"
                      label="Page Meta Title En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_keywords_en"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_keywords_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Keywords En"
                      label="Page Meta keywords En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_meta_description_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Description En"
                      label="Page Meta Description En"
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
                      name="page_meta_title_ar"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Title Ar"
                      label="Page Meta Title Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_keywords_ar"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_keywords_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Keywords Ar"
                      label="Page Meta keywords Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_meta_description_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Description Ar"
                      label="Page Meta Description Ar"
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
                      name="page_meta_title_fr"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Title Fr"
                      label="Page Meta Title Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_keywords_fr"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_keywords_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta keywords Fr"
                      label="Page Meta keywords Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_meta_description_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Description Fr"
                      label="Page Meta Description Fr"
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
                      name="page_meta_title_de"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Title De"
                      label="Page Meta Title De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_keywords_de"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_keywords_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta keywords de"
                      label="Page Meta keywords de"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_meta_description_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Description De"
                      label="Page Meta Description De"
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
                      name="page_meta_title_ru"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Title Ru"
                      label="Page Meta Title Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_keywords_ru"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_keywords_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta keywords ru"
                      label="Page Meta keywords ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_meta_description_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Description Ru"
                      label="Page Meta Description Ru"
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
                      name="page_meta_title_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_meta_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Title Se"
                      label="Page Meta Title Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_keywords_se"
                      component={ReactstrapInput}
                      type="textarea"
                      rows={4}
                      className={`form-control ${
                        errors.page_meta_keywords_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta keywords se"
                      label="Page Meta keywords se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="page_meta_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.page_meta_description_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Page Meta Description Se"
                      label="Page Meta Description Se"
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

export default PageForm;
