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

const DeveloperForm = (props) => {
  const router = useRouter();
  const [developerId, setDeveloperId] = useState(0);
  const developerInfo = props.developer;
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [developerLogo, setDeveloperLogo] = useState();
  const [developerImage, setDeveloperImage] = useState();
  const [developerBanner, setDeveloperBanner] = useState();
  useEffect(() => {
    setDeveloperImage(developerInfo?.developer?.developer_image);
    setDeveloperLogo(developerInfo?.developer?.developer_logo);
    setDeveloperBanner(developerInfo?.developer?.developer_banner);
    setDeveloperId(developerInfo?.developer?.developer_id);
  }, [developerInfo.developer]);

  function submitDeveloper(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.developer_id = developerId;
    axios
      .post(`${process.env.API_URL}dashboard/developer/store`, values, {
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
            router.push("/developer/list");
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
        main_data: {
          developer_title_en: developerInfo?.developer?.developer_title_en,
          developer_title_ar: developerInfo?.developer?.developer_title_ar,
          developer_title_fr: developerInfo?.developer?.developer_title_fr,
          developer_title_de: developerInfo?.developer?.developer_title_de,
          developer_title_ru: developerInfo?.developer?.developer_title_ru,
          developer_title_se: developerInfo?.developer?.developer_title_se,
          developer_menu_title_en:
            developerInfo?.developer?.developer_menu_title_en,
          developer_menu_title_ar:
            developerInfo?.developer?.developer_menu_title_ar,
          developer_menu_title_fr:
            developerInfo?.developer?.developer_menu_title_fr,
          developer_menu_title_de:
            developerInfo?.developer?.developer_menu_title_de,
          developer_menu_title_ru:
            developerInfo?.developer?.developer_menu_title_ru,
          developer_menu_title_se:
            developerInfo?.developer?.developer_menu_title_se,
          developer_slug_en: developerInfo?.developer?.developer_slug_en,
          developer_slug_ar: developerInfo?.developer?.developer_slug_ar,
          developer_slug_fr: developerInfo?.developer?.developer_slug_fr,
          developer_slug_de: developerInfo?.developer?.developer_slug_de,
          developer_slug_ru: developerInfo?.developer?.developer_slug_ru,
          developer_slug_se: developerInfo?.developer?.developer_slug_se,
          developer_is_active: developerInfo?.developer?.developer_is_active,
          developer_is_show_header_menu:
            developerInfo?.developer?.developer_is_show_header_menu,
          developer_is_show_footer:
            developerInfo?.developer?.developer_is_show_footer,
          developer_sorting: developerInfo?.developer?.developer_sorting,
          developer_image_alt_en:
            developerInfo?.developer?.developer_image_alt_en,
          developer_image_alt_ar:
            developerInfo?.developer?.developer_image_alt_ar,
          developer_image_alt_fr:
            developerInfo?.developer?.developer_image_alt_fr,
          developer_image_alt_de:
            developerInfo?.developer?.developer_image_alt_de,
          developer_image_alt_ru:
            developerInfo?.developer?.developer_image_alt_ru,
          developer_image_alt_se:
            developerInfo?.developer?.developer_image_alt_se,
          developer_image_title_en:
            developerInfo?.developer?.developer_image_title_en,
          developer_image_title_ar:
            developerInfo?.developer?.developer_image_title_ar,
          developer_image_title_fr:
            developerInfo?.developer?.developer_image_title_fr,
          developer_image_title_de:
            developerInfo?.developer?.developer_image_title_de,
          developer_image_title_ru:
            developerInfo?.developer?.developer_image_title_ru,
          developer_image_title_se:
            developerInfo?.developer?.developer_image_title_se,
        },
        seo: {
          developer_seo_meta_description_en:
            developerInfo?.seo?.developer_seo_meta_description_en,
          developer_seo_meta_description_ar:
            developerInfo?.seo?.developer_seo_meta_description_ar,
          developer_seo_meta_description_fr:
            developerInfo?.seo?.developer_seo_meta_description_fr,
          developer_seo_meta_description_de:
            developerInfo?.seo?.developer_seo_meta_description_de,
          developer_seo_meta_description_ru:
            developerInfo?.seo?.developer_seo_meta_description_ru,
          developer_seo_meta_description_se:
            developerInfo?.seo?.developer_seo_meta_description_se,
          developer_seo_meta_title_en:
            developerInfo?.seo?.developer_seo_meta_title_en,
          developer_seo_meta_title_ar:
            developerInfo?.seo?.developer_seo_meta_title_ar,
          developer_seo_meta_title_fr:
            developerInfo?.seo?.developer_seo_meta_title_fr,
          developer_seo_meta_title_de:
            developerInfo?.seo?.developer_seo_meta_title_de,
          developer_seo_meta_title_ru:
            developerInfo?.seo?.developer_seo_meta_title_ru,
          developer_seo_meta_title_se:
            developerInfo?.seo?.developer_seo_meta_title_se,
          developer_seo_meta_keywords_en:
            developerInfo?.seo?.developer_seo_meta_keywords_en,
          developer_seo_meta_keywords_ar:
            developerInfo?.seo?.developer_seo_meta_keywords_ar,
          developer_seo_meta_keywords_fr:
            developerInfo?.seo?.developer_seo_meta_keywords_fr,
          developer_seo_meta_keywords_de:
            developerInfo?.seo?.developer_seo_meta_keywords_de,
          developer_seo_meta_keywords_ru:
            developerInfo?.seo?.developer_seo_meta_keywords_ru,
          developer_seo_meta_keywords_se:
            developerInfo?.seo?.developer_seo_meta_keywords_se,
        },
        description: {
          developer_short_desc_ar:
            developerInfo?.description?.developer_short_desc_ar,
          developer_short_desc_en:
            developerInfo?.description?.developer_short_desc_en,
          developer_short_desc_fr:
            developerInfo?.description?.developer_short_desc_fr,
          developer_short_desc_de:
            developerInfo?.description?.developer_short_desc_de,
          developer_short_desc_ru:
            developerInfo?.description?.developer_short_desc_ru,
          developer_short_desc_se:
            developerInfo?.description?.developer_short_desc_se,
          about_developer_description_ar:
            developerInfo?.description?.about_developer_description_ar,
          about_developer_description_en:
            developerInfo?.description?.about_developer_description_en,
          about_developer_description_fr:
            developerInfo?.description?.about_developer_description_fr,
          about_developer_description_de:
            developerInfo?.description?.about_developer_description_de,
          about_developer_description_ru:
            developerInfo?.description?.about_developer_description_ru,
          about_developer_description_se:
            developerInfo?.description?.about_developer_description_se,
        },
      }}
      validationSchema={Yup.object().shape({
        main_data: Yup.object().shape({
          developer_title_en: Yup.string()
            .required("Developer title en is required")
            .nullable(),
          developer_title_ar: Yup.string()
            .required("Developer title ar is required")
            .nullable(),
          developer_title_fr: Yup.string()
            .required("Developer title fr is required")
            .nullable(),
          developer_title_de: Yup.string()
            .required("Developer title de is required")
            .nullable(),
          developer_title_ru: Yup.string()
            .required("Developer title ru is required")
            .nullable(),
          developer_title_se: Yup.string()
            .required("Developer title se is required")
            .nullable(),
          developer_menu_title_en: Yup.string()
            .required("Developer title en is required")
            .nullable(),
          developer_menu_title_ar: Yup.string()
            .required("Developer title ar is required")
            .nullable(),
          developer_menu_title_fr: Yup.string()
            .required("Developer title fr is required")
            .nullable(),
          developer_menu_title_de: Yup.string()
            .required("Developer title de is required")
            .nullable(),
          developer_menu_title_ru: Yup.string()
            .required("Developer title ru is required")
            .nullable(),
          developer_menu_title_se: Yup.string()
            .required("Developer title se is required")
            .nullable(),
          developer_slug_en: Yup.string()
            .required("Developer title en is required")
            .nullable(),
          developer_slug_ar: Yup.string()
            .required("Developer title ar is required")
            .nullable(),
          developer_slug_fr: Yup.string()
            .required("Developer title fr is required")
            .nullable(),
          developer_slug_de: Yup.string()
            .required("Developer title de is required")
            .nullable(),
          developer_slug_ru: Yup.string()
            .required("Developer title ru is required")
            .nullable(),
          developer_slug_se: Yup.string()
            .required("Developer title se is required")
            .nullable(),
          developer_is_active: Yup.string()
            .required("developer active status is required")
            .nullable(),
          developer_is_show_header_menu: Yup.string()
            .required("developer show header menu status is required")
            .nullable(),
          developer_is_show_footer: Yup.string()
            .required("developer show footer status is required")
            .nullable(),
          developer_sorting: Yup.string()
            .required("developer sorting is required")
            .nullable(),
        }),
      })}
      onSubmit={(values) => {
        submitDeveloper(values);
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
              <Tab>Developer Main Data</Tab>
              <Tab>Developer Image</Tab>
              <Tab>Developer Description</Tab>
              <Tab>Developer SEO Data</Tab>
            </TabList>

            <TabPanel>
              <br />
              <fieldset className="form-control">
                <legend>
                  {" "}
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "main_data.developer_title_" + lang,
                            values.main_data.developer_title_en
                          );
                          setFieldValue(
                            "main_data.developer_slug_" + lang,
                            values.main_data.developer_slug_en
                          );
                          setFieldValue(
                            "main_data.developer_menu_title_" + lang,
                            values.main_data.developer_menu_title_en
                          );
                        }
                      });
                    }}
                    className="btn btn-sm btn-link text-primary float-right"
                  >
                    Apply To All Languages
                  </a>
                </legend>
                <div className="gx-3 row">
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_title_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Title En"
                      label="Developer Title En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_title_en" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_slug_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_slug_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Slug En"
                      label="Developer Slug En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_slug_en" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_menu_title_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_menu_title_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Menu Title En"
                      label="Developer Menu Title En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_menu_title_en" />
                    </div>
                  </Col>
                </div>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> Arabic Data</legend>
                <div className="gx-3 row">
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_title_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Title Ar"
                      label="Developer Title Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_title_ar" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_slug_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_slug_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Slug Ar"
                      label="Developer Slug Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_slug_ar" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_menu_title_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_menu_title_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Menu Title Ar"
                      label="Developer Menu Title Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_menu_title_ar" />
                    </div>
                  </Col>
                </div>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> French Data</legend>
                <div className="gx-3 row">
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_title_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Title Fr"
                      label="Developer Title Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_title_fr" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_slug_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_slug_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Slug Fr"
                      label="Developer Slug Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_slug_fr" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_menu_title_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_menu_title_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Menu Title Fr"
                      label="Developer Menu Title Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_menu_title_fr" />
                    </div>
                  </Col>
                </div>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> German Data</legend>
                <div className="gx-3 row">
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_title_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Title De"
                      label="Developer Title De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_title_de" />
                    </div>
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_slug_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_slug_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Slug De"
                      label="Developer Slug De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_slug_de" />
                    </div>
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_menu_title_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_menu_title_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Menu Title De"
                      label="Developer Menu Title De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_menu_title_de" />
                    </div>
                  </Col>
                </div>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> Russian Data</legend>
                <div className="gx-3 row">
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_title_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Title Ru"
                      label="Developer Title Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_title_ru" />
                    </div>
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_slug_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_slug_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Slug Ru"
                      label="Developer Slug Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_slug_ru" />
                    </div>
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_menu_title_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_menu_title_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Menu Title Ru"
                      label="Developer Menu Title Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_menu_title_ru" />
                    </div>
                  </Col>
                </div>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> Swedish Data</legend>
                <div className="gx-3 row">
                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_title_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Title Se"
                      label="Developer Title Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_title_se" />
                    </div>
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_slug_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_slug_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Developer Slug Se"
                      label="Developer Slug Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_slug_se" />
                    </div>
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="main_data.developer_menu_title_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_menu_title_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Menu Title Se"
                      label="Developer Menu Title Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_menu_title_se" />
                    </div>
                  </Col>
                </div>
              </fieldset>
              <br />
              <div className="gx-3 row">
                <Col sm="3" className="form-group">
                  <Field
                    name="main_data.developer_is_active"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="developer active"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="main_data.developer_is_show_header_menu"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="developer show in header menu"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="main_data.developer_is_show_footer"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="developer show in footer menu"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="main_data.developer_sorting"
                    type="number"
                    component={ReactstrapInput}
                    className="form-control"
                    label="developer sorting"
                  />
                </Col>
              </div>
            </TabPanel>
            <TabPanel>
              <Row className="gx-3">
                <Col sm="4" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">
                      Developer Logo
                    </label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.developer_logo && touched.developer_logo
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="developer logo "
                      onChange={(event) => {
                        setFieldValue("developer_logo", event.target.files[0]);
                        setDeveloperLogo(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={developerLogo} width="70" height="50" style={{background:'blue',marginTop:'15px'}}/>
                </div>
                <Col sm="4" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">
                      Developer Banner
                    </label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.developer_banner && touched.developer_banner
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="developer Banner"
                      onChange={(event) => {
                        setFieldValue(
                          "developer_banner",
                          event.target.files[0]
                        );
                        setDeveloperBanner(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={developerBanner} width="70" height="70" />
                </div>
              </Row>
              <br />
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "main_data.developer_image_alt_" + lang,
                            values.main_data.developer_image_alt_en
                          );
                          setFieldValue(
                            "main_data.developer_image_title_" + lang,
                            values.main_data.developer_image_title_en
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
                      name="main_data.developer_image_alt_en"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_alt_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Alt En"
                      label="Developer Image Alt En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_alt_en" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_title_en"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_title_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Title En"
                      label="Developer Image Title En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_title_en" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> Arabic Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_alt_ar"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_alt_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Alt Ar"
                      label="Developer Image Alt Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_alt_ar" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_title_ar"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_title_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Title Ar"
                      label="Developer Image Title Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_title_ar" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> French Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_alt_fr"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_alt_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Alt Fr"
                      label="Developer Image Alt Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_alt_fr" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_title_fr"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_title_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Title Fr"
                      label="Developer Image Title Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_title_fr" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> German Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_alt_de"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_alt_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Alt De"
                      label="Developer Image Alt De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_alt_de" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_title_de"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_title_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Title De"
                      label="Developer Image Title De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_title_de" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> Russian Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_alt_ru"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_alt_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Alt Ru"
                      label="Developer Image Alt Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_alt_ru" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_title_ru"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_title_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Title Ru"
                      label="Developer Image Title Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_title_ru" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend> Swedish Data</legend>
                <Row>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_alt_se"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_alt_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Alt Se"
                      label="Developer Image Alt Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_alt_se" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="main_data.developer_image_title_se"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.main_data?.developer_image_title_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Image Title Se"
                      label="Developer Image Title Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="main_data.developer_image_title_se" />
                    </div>
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
                            "description.developer_short_desc_" + lang,
                            values.description.developer_short_desc_en
                          );
                          setFieldValue(
                            "description.about_developer_description_" + lang,
                            values.description.about_developer_description_en
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
                      name="description.developer_short_desc_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.developer_short_desc_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Short Description En"
                      label="Developer Short Description En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.developer_short_desc_en" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.about_developer_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.about_developer_description_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter About Developer Description En"
                      label="About Developer Description En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.about_developer_description_en" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.developer_short_desc_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.developer_short_desc_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Short Description Ar"
                      label="Developer Short Description Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.developer_short_desc_ar" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.about_developer_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.about_developer_description_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter About Developer Description Ar"
                      label="About Developer Description Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.about_developer_description_ar" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.developer_short_desc_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.developer_short_desc_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Short Description Fr"
                      label="Developer Short Description Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.developer_short_desc_fr" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.about_developer_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.about_developer_description_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter About Developer Description Fr"
                      label="About Developer Description Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.about_developer_description_fr" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.developer_short_desc_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.developer_short_desc_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Short Description De"
                      label="Developer Short Description De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.developer_short_desc_de" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.about_developer_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.about_developer_description_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter About Developer Description De"
                      label="About Developer Description De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.about_developer_description_de" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.developer_short_desc_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.developer_short_desc_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Short Description Ru"
                      label="Developer Short Description Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.developer_short_desc_ru" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.about_developer_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.about_developer_description_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter About Developer Description Ru"
                      label="About Developer Description Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.about_developer_description_ru" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.developer_short_desc_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.developer_short_desc_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Short Description Se"
                      label="Developer Short Description Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.developer_short_desc_se" />
                    </div>
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="description.about_developer_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.description?.about_developer_description_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter About Developer Description Se"
                      label="About Developer Description Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="description.about_developer_description_se" />
                    </div>
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
                            "seo.developer_seo_meta_description_" + lang,
                            values.seo.developer_seo_meta_description_en
                          );
                          setFieldValue(
                            "seo.developer_seo_meta_title_" + lang,
                            values.seo.developer_seo_meta_title_en
                          );
                          setFieldValue(
                            "seo.developer_seo_meta_keywords_" + lang,
                            values.seo.developer_seo_meta_keywords_en
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
                      name="seo.developer_seo_meta_title_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_title_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Title En"
                      label="Developer Meta Title En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_title_en" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_keywords_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_keywords_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta keywords En"
                      label="Developer Meta keywords En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_keywords_en" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_description_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Description En"
                      label="Developer Meta Description En"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_description_en" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_title_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_title_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Title Ar"
                      label="Developer Meta Title Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_title_ar" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_keywords_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_keywords_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta keywords Ar"
                      label="Developer Meta keywords Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_keywords_ar" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_description_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Description Ar"
                      label="Developer Meta Description Ar"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_description_ar" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_title_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_title_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Title Fr"
                      label="Developer Meta Title Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_title_fr" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_keywords_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_keywords_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta keywords Fr"
                      label="Developer Meta keywords Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_keywords_fr" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_description_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Description Fr"
                      label="Developer Meta Description Fr"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_description_fr" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_title_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_title_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Title De"
                      label="Developer Meta Title De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_title_de" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_keywords_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_keywords_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta keywords De"
                      label="Developer Meta keywords De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_keywords_de" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_description_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Description De"
                      label="Developer Meta Description De"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_description_de" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_title_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_title_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Title Ru"
                      label="Developer Meta Title Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_title_ru" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_keywords_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_keywords_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta keywords Ru"
                      label="Developer Meta keywords Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_keywords_ru" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_description_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Description Ru"
                      label="Developer Meta Description Ru"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_description_ru" />
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_title_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_title_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Title Se"
                      label="Developer Meta Title Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_title_se" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_keywords_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_keywords_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta keywords Se"
                      label="Developer Meta keywords Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_keywords_se" />
                    </div>
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="seo.developer_seo_meta_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.seo?.developer_seo_meta_description_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Developer Meta Description Se"
                      label="Developer Meta Description Se"
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      <ErrorMessage name="seo.developer_seo_meta_description_se" />
                    </div>
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

export default DeveloperForm;
